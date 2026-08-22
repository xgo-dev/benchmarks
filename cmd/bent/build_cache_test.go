// Copyright 2026 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

package main

import (
	"os"
	"path/filepath"
	"slices"
	"testing"
)

func TestBuildCacheValidation(t *testing.T) {
	tests := []struct {
		name    string
		config  Configuration
		wantErr bool
		wantUse bool
	}{
		{name: "default"},
		{name: "legacy shared", config: Configuration{UseBuildCache: true}, wantUse: true},
		{name: "named shared", config: Configuration{BuildCache: buildCacheShared}, wantUse: true},
		{name: "stdlib", config: Configuration{BuildCache: buildCacheStdlib}, wantUse: true},
		{name: "conflict", config: Configuration{UseBuildCache: true, BuildCache: buildCacheStdlib}, wantErr: true, wantUse: true},
		{name: "unknown", config: Configuration{BuildCache: "everything"}, wantErr: true},
	}
	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			if err := test.config.validateBuildCache(); (err != nil) != test.wantErr {
				t.Fatalf("validateBuildCache() error = %v, wantErr %t", err, test.wantErr)
			}
			if got := test.config.usesBuildCache(); got != test.wantUse {
				t.Fatalf("usesBuildCache() = %t, want %t", got, test.wantUse)
			}
		})
	}
}

func TestIsolatedBuildCacheDoesNotLeak(t *testing.T) {
	oldDirs := dirs
	defer func() { dirs = oldDirs }()
	dirs = &directories{buildCaches: t.TempDir()}

	seed := filepath.Join(dirs.buildCaches, "seed")
	if err := os.MkdirAll(filepath.Join(seed, "go-build"), 0o755); err != nil {
		t.Fatal(err)
	}
	seedEntry := filepath.Join(seed, "go-build", "stdlib-entry")
	if err := os.WriteFile(seedEntry, []byte("standard library"), 0o444); err != nil {
		t.Fatal(err)
	}
	config := Configuration{BuildCache: buildCacheStdlib, cacheSeed: seed}

	first, cleanupFirst, err := config.isolatedBuildCache()
	if err != nil {
		t.Fatal(err)
	}
	if _, err := os.Stat(filepath.Join(first, "go-build", "stdlib-entry")); err != nil {
		t.Fatalf("first cache did not inherit seed: %v", err)
	}
	if err := os.WriteFile(filepath.Join(first, "module-entry"), []byte("private"), 0o644); err != nil {
		t.Fatal(err)
	}
	cleanupFirst()

	second, cleanupSecond, err := config.isolatedBuildCache()
	if err != nil {
		t.Fatal(err)
	}
	defer cleanupSecond()
	if _, err := os.Stat(filepath.Join(second, "module-entry")); !os.IsNotExist(err) {
		t.Fatalf("second cache inherited first build's module entry: %v", err)
	}
	if _, err := os.Stat(seedEntry); err != nil {
		t.Fatalf("seed was changed when first cache was removed: %v", err)
	}
	env := buildCacheEnv(nil, second)
	if got, want := getenv(env, "GOCACHE"), filepath.Join(second, "go-build"); got != want {
		t.Fatalf("GOCACHE = %q, want %q", got, want)
	}
	if got, want := getenv(env, "XDG_CACHE_HOME"), filepath.Join(second, "xdg"); got != want {
		t.Fatalf("XDG_CACHE_HOME = %q, want %q", got, want)
	}
	if got, want := getenv(env, "HOME"), filepath.Join(second, "home"); got != want {
		t.Fatalf("HOME = %q, want %q", got, want)
	}
}

func TestStandardLibraryPackages(t *testing.T) {
	module := t.TempDir()
	if err := os.WriteFile(filepath.Join(module, "go.mod"), []byte("module example.com/cachetest\n\ngo 1.22\n"), 0o644); err != nil {
		t.Fatal(err)
	}
	if err := os.WriteFile(filepath.Join(module, "cache.go"), []byte("package cachetest\n\nimport \"fmt\"\n\nvar _ = fmt.Sprint\n"), 0o644); err != nil {
		t.Fatal(err)
	}

	oldDefaultEnv := defaultEnv
	defer func() { defaultEnv = oldDefaultEnv }()
	defaultEnv = replaceEnv(os.Environ(), "GOCACHE", t.TempDir())
	bench := &Benchmark{Suite: "cachetest", Repo: ".", buildDir: module, NotSandboxed: true}
	packages, err := standardLibraryPackages([]*Benchmark{bench})
	if err != nil {
		t.Fatal(err)
	}
	if !slices.Contains(packages, "fmt") || !slices.Contains(packages, "runtime") {
		t.Fatalf("standard library packages %q do not contain fmt and runtime", packages)
	}
	if slices.Contains(packages, "unsafe") {
		t.Fatalf("standard library packages unexpectedly contain unsafe: %q", packages)
	}
}
