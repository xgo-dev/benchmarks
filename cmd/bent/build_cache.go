// Copyright 2026 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

package main

import (
	"bufio"
	"fmt"
	"io"
	"io/fs"
	"os"
	"os/exec"
	"path/filepath"
	"runtime"
	"sort"
	"strings"
)

const (
	buildCacheShared = "shared"
	buildCacheStdlib = "stdlib"
)

func (config *Configuration) validateBuildCache() error {
	if config.UseBuildCache && config.BuildCache != "" {
		return fmt.Errorf("configuration %s sets both UseBuildCache and BuildCache", config.Name)
	}
	switch config.BuildCache {
	case "", buildCacheShared, buildCacheStdlib:
		return nil
	default:
		return fmt.Errorf("BuildCache for configuration %s is %q; want %q or %q", config.Name, config.BuildCache, buildCacheShared, buildCacheStdlib)
	}
}

func (config *Configuration) usesBuildCache() bool {
	return config.UseBuildCache || config.BuildCache == buildCacheShared || config.BuildCache == buildCacheStdlib
}

func buildCacheEnv(env []string, root string) []string {
	env = replaceEnv(env, "GOCACHE", filepath.Join(root, "go-build"))
	env = replaceEnv(env, "XDG_CACHE_HOME", filepath.Join(root, "xdg"))
	env = replaceEnv(env, "HOME", filepath.Join(root, "home"))
	return replaceEnv(env, "LocalAppData", filepath.Join(root, "local-app-data"))
}

// isolatedBuildCache returns a private copy of the configuration's cache seed.
// Cache setup is deliberately outside the measured compiler invocation.
func (config *Configuration) isolatedBuildCache() (string, func(), error) {
	if config.BuildCache != buildCacheStdlib {
		return "", func() {}, nil
	}
	if config.cacheSeed == "" {
		return "", func() {}, fmt.Errorf("standard-library cache seed is not initialized")
	}
	runsDir := filepath.Join(dirs.buildCaches, "runs")
	if err := os.MkdirAll(runsDir, 0o775); err != nil {
		return "", func() {}, err
	}
	cacheDir, err := os.MkdirTemp(runsDir, "cache-")
	if err != nil {
		return "", func() {}, err
	}
	cleanup := func() { _ = os.RemoveAll(cacheDir) }
	if err := cloneCacheTree(config.cacheSeed, cacheDir); err != nil {
		cleanup()
		return "", func() {}, err
	}
	return cacheDir, cleanup, nil
}

// cloneCacheTree uses hard links for immutable cache entries. Both Go's build
// cache and LLGo's package cache publish entries atomically, so a private tree
// can add or replace entries without changing the standard-library seed.
func cloneCacheTree(source, destination string) error {
	return filepath.WalkDir(source, func(sourcePath string, entry fs.DirEntry, walkErr error) error {
		if walkErr != nil {
			return walkErr
		}
		relative, err := filepath.Rel(source, sourcePath)
		if err != nil {
			return err
		}
		if relative == "." {
			return nil
		}
		destinationPath := filepath.Join(destination, relative)
		info, err := entry.Info()
		if err != nil {
			return err
		}
		if entry.IsDir() {
			return os.MkdirAll(destinationPath, info.Mode().Perm())
		}
		if entry.Type()&os.ModeSymlink != 0 {
			target, err := os.Readlink(sourcePath)
			if err != nil {
				return err
			}
			return os.Symlink(target, destinationPath)
		}
		if !info.Mode().IsRegular() {
			return fmt.Errorf("unsupported cache entry %s (%s)", sourcePath, info.Mode())
		}
		// Go periodically rewrites this housekeeping timestamp in place. Give
		// each clone its own copy so it cannot mutate the seed through a link.
		if entry.Name() == "trim.txt" {
			return copyCacheFile(sourcePath, destinationPath, info.Mode().Perm())
		}
		if err := os.Link(sourcePath, destinationPath); err == nil {
			return nil
		}
		return copyCacheFile(sourcePath, destinationPath, info.Mode().Perm())
	})
}

func copyCacheFile(source, destination string, mode fs.FileMode) error {
	input, err := os.Open(source)
	if err != nil {
		return err
	}
	defer input.Close()
	output, err := os.OpenFile(destination, os.O_WRONLY|os.O_CREATE|os.O_EXCL, mode)
	if err != nil {
		return err
	}
	_, copyErr := io.Copy(output, input)
	closeErr := output.Close()
	if copyErr != nil {
		return copyErr
	}
	return closeErr
}

// standardLibraryPackages returns the union of standard-library dependencies
// used by the selected benchmark suites. It intentionally excludes module
// dependencies, which must remain cold during each measured build.
func standardLibraryPackages(benchmarks []*Benchmark) ([]string, error) {
	packages := make(map[string]struct{})
	for _, bench := range benchmarks {
		if bench.IsDisabled() {
			continue
		}
		env := DefaultEnv()
		if !bench.NotSandboxed {
			env = replaceEnv(env, "GOOS", "linux")
		}
		env = replaceEnvs(env, sliceExpandEnv(bench.GcEnv, env))
		args := []string{"list", "-deps"}
		if bench.buildsTestBinary() {
			args = append(args, "-test")
		}
		args = append(args, "-f={{if .Standard}}{{.ImportPath}}{{end}}")
		args = append(args, sliceExpandEnv(bench.BuildFlags, env)...)
		args = append(args, bench.Repo)
		cmd := exec.Command("go", args...)
		cmd.Dir = bench.BuildDir()
		cmd.Env = env
		output, err := cmd.CombinedOutput()
		if err != nil {
			return nil, fmt.Errorf("list standard-library dependencies for %s: %w\n%s", bench.Suite, err, output)
		}
		scanner := bufio.NewScanner(strings.NewReader(string(output)))
		for scanner.Scan() {
			pkg := strings.TrimSpace(scanner.Text())
			if pkg != "" && pkg != "unsafe" && pkg != "builtin" {
				packages[pkg] = struct{}{}
			}
		}
		if err := scanner.Err(); err != nil {
			return nil, err
		}
	}
	result := make([]string, 0, len(packages))
	for pkg := range packages {
		result = append(result, pkg)
	}
	sort.Strings(result)
	return result, nil
}

func prepareCacheSeed(config *Configuration, stdPackages []string, needSandbox, needNotSandbox bool) error {
	seed := filepath.Join(dirs.buildCaches, "seeds", config.Name)
	if err := os.RemoveAll(seed); err != nil {
		return err
	}
	if err := os.MkdirAll(seed, 0o775); err != nil {
		return err
	}
	config.cacheSeed = seed

	prewarm := func(withAltOS bool) error {
		if withAltOS && runtime.GOOS == "linux" {
			return nil
		}
		cmd := exec.Command(config.goCommandCopy(), "install", "-a")
		cmd.Env = DefaultEnv()
		if withAltOS {
			cmd.Env = replaceEnv(cmd.Env, "GOOS", "linux")
		}
		if config.rootCopy != "" {
			cmd.Env = replaceEnv(cmd.Env, "GOROOT", config.rootCopy)
		} else if config.Root != "" {
			cmd.Env = replaceEnv(cmd.Env, "GOROOT", config.Root)
		}
		cmd.Env = replaceEnvs(cmd.Env, sliceExpandEnv(config.GcEnv, cmd.Env))
		cmd.Env = buildCacheEnv(cmd.Env, seed)
		cmd.Args = append(cmd.Args, sliceExpandEnv(config.BuildFlags, cmd.Env)...)
		if config.GcFlags != "" {
			cmd.Args = append(cmd.Args, "-gcflags="+expandEnv(config.GcFlags, cmd.Env))
		}
		cmd.Args = append(cmd.Args, stdPackages...)
		if output, err := cmd.CombinedOutput(); err != nil {
			return fmt.Errorf("prewarm %s standard library: %w\n%s", config.Name, err, output)
		}
		return nil
	}
	if needSandbox {
		if err := prewarm(true); err != nil {
			return err
		}
	}
	if needNotSandbox {
		if err := prewarm(false); err != nil {
			return err
		}
	}
	return nil
}
