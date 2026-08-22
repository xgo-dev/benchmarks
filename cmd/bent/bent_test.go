// Copyright 2021 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

//go:build go1.16

package main

import (
	"fmt"
	"os"
	"os/exec"
	"path"
	"reflect"
	"runtime"
	"strings"
	"testing"
)

var dir string

// TestMain implemented to allow (1) alternate use as bent command itself if BENT_TEST_IS_CMD_BENT is in environment,
// and (2) to create and remove a temporary directory for test initialization.
func TestMain(m *testing.M) {
	if os.Getenv("BENT_TEST_IS_CMD_BENT") != "" {
		main()
		os.Exit(0)
	}
	var err error
	dir, err = os.MkdirTemp("", "bent_test")
	if err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(1)
	}
	defer os.RemoveAll(dir)
	m.Run()
}

func TestConfigurationBuildCommandArgs(t *testing.T) {
	originalExplicitAll := explicitAll
	defer func() { explicitAll = originalExplicitAll }()

	tests := []struct {
		name          string
		configuration Configuration
		benchmark     Benchmark
		randomizing   bool
		explicitAll   counterFlag
		want          []string
	}{
		{
			name: "default fresh build",
			want: []string{"test", "-vet=off", "-c", "-a"},
		},
		{
			name:          "cached alternate compiler",
			configuration: Configuration{OmitVetFlag: true, UseBuildCache: true},
			want:          []string{"test", "-c"},
		},
		{
			name:      "main package fresh build",
			benchmark: Benchmark{BuildMode: "build"},
			want:      []string{"build", "-a"},
		},
		{
			name:          "main package cached alternate compiler",
			configuration: Configuration{OmitVetFlag: true, UseBuildCache: true},
			benchmark:     Benchmark{BuildMode: "build"},
			want:          []string{"build"},
		},
		{
			name:          "explicit a overrides cache opt in",
			configuration: Configuration{OmitVetFlag: true, UseBuildCache: true},
			explicitAll:   1,
			want:          []string{"test", "-c", "-a"},
		},
		{
			name:        "randomized builds never force a",
			randomizing: true,
			explicitAll: 1,
			want:        []string{"test", "-vet=off", "-c"},
		},
	}

	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			explicitAll = test.explicitAll
			got := test.configuration.buildCommandArgs(&test.benchmark, test.randomizing)
			if !reflect.DeepEqual(got, test.want) {
				t.Fatalf("buildCommandArgs() = %q, want %q", got, test.want)
			}
		})
	}
}

func TestBenchmarkBuildMode(t *testing.T) {
	tests := []struct {
		mode     string
		wantMode string
		wantTest bool
		wantErr  bool
	}{
		{wantMode: buildModeTest, wantTest: true},
		{mode: buildModeTest, wantMode: buildModeTest, wantTest: true},
		{mode: buildModeBuild, wantMode: buildModeBuild},
		{mode: "install", wantMode: "install", wantErr: true},
	}
	for _, test := range tests {
		t.Run(test.mode, func(t *testing.T) {
			benchmark := Benchmark{Name: "example", BuildMode: test.mode}
			if got := benchmark.effectiveBuildMode(); got != test.wantMode {
				t.Errorf("effectiveBuildMode() = %q, want %q", got, test.wantMode)
			}
			if got := benchmark.buildsTestBinary(); got != test.wantTest {
				t.Errorf("buildsTestBinary() = %t, want %t", got, test.wantTest)
			}
			if err := benchmark.validateBuildMode(); (err != nil) != test.wantErr {
				t.Errorf("validateBuildMode() error = %v, wantErr %t", err, test.wantErr)
			}
		})
	}
}

func TestBenchOneSkipsBuildMode(t *testing.T) {
	config := Configuration{RunWrapper: []string{"/must-not-run"}}
	benchmark := Benchmark{Name: "command", BuildMode: buildModeBuild}

	output, rc := benchOne(&config, &benchmark, 0, nil)
	if output != "" || rc != 0 {
		t.Fatalf("benchOne(build mode) = (%q, %d), want (\"\", 0)", output, rc)
	}
}

func TestCompileOneBuildsMainPackage(t *testing.T) {
	goCommand, err := exec.LookPath("go")
	if err != nil {
		t.Fatal(err)
	}

	workspace := t.TempDir()
	buildDir := t.TempDir()
	if err := os.MkdirAll(path.Join(workspace, "testbin"), 0o755); err != nil {
		t.Fatal(err)
	}
	if err := os.WriteFile(path.Join(buildDir, "go.mod"), []byte("module example.com/main\n\ngo 1.22\n"), 0o644); err != nil {
		t.Fatal(err)
	}
	if err := os.WriteFile(path.Join(buildDir, "main.go"), []byte("package main\n\nfunc main() {}\n"), 0o644); err != nil {
		t.Fatal(err)
	}

	oldDirs, oldDefaultEnv, oldReportBuildTime := dirs, defaultEnv, reportBuildTime
	defer func() {
		dirs = oldDirs
		defaultEnv = oldDefaultEnv
		reportBuildTime = oldReportBuildTime
	}()
	dirs = &directories{wd: workspace, testBinDir: "testbin"}
	defaultEnv = replaceEnv(os.Environ(), "GOCACHE", t.TempDir())
	reportBuildTime = false

	config := Configuration{Name: "Main", Compiler: goCommand, UseBuildCache: true}
	benchmark := Benchmark{Name: "hello", Suite: "hello", Repo: ".", BuildMode: "build", buildDir: buildDir, NotSandboxed: true}
	if failure := config.compileOne(&benchmark, workspace, 1, false); failure != "" {
		t.Fatal(failure)
	}
	if _, err := os.Stat(path.Join(workspace, "testbin", "hello_Main")); err != nil {
		t.Fatalf("main binary was not created: %v", err)
	}
}

func TestCompileOneValidatesTestBinary(t *testing.T) {
	goCommand, err := exec.LookPath("go")
	if err != nil {
		t.Fatal(err)
	}

	tests := []struct {
		name        string
		testSource  string
		wantFailure bool
	}{
		{
			name:       "starts",
			testSource: "package sample\n\nimport \"testing\"\n\nfunc TestSmoke(t *testing.T) {}\n",
		},
		{
			name:        "startup failure",
			testSource:  "package sample\n\nimport (\"os\"; \"testing\")\n\nfunc TestMain(*testing.M) { os.Exit(23) }\n",
			wantFailure: true,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			workspace := t.TempDir()
			buildDir := t.TempDir()
			if err := os.MkdirAll(path.Join(workspace, "testbin"), 0o755); err != nil {
				t.Fatal(err)
			}
			if err := os.WriteFile(path.Join(buildDir, "go.mod"), []byte("module example.com/sample\n\ngo 1.22\n"), 0o644); err != nil {
				t.Fatal(err)
			}
			if err := os.WriteFile(path.Join(buildDir, "sample_test.go"), []byte(tt.testSource), 0o644); err != nil {
				t.Fatal(err)
			}

			oldDirs, oldDefaultEnv, oldReportBuildTime := dirs, defaultEnv, reportBuildTime
			defer func() {
				dirs = oldDirs
				defaultEnv = oldDefaultEnv
				reportBuildTime = oldReportBuildTime
			}()
			dirs = &directories{wd: workspace, testBinDir: "testbin"}
			defaultEnv = replaceEnv(os.Environ(), "GOCACHE", t.TempDir())
			reportBuildTime = false

			config := Configuration{Name: "Validated", Compiler: goCommand, UseBuildCache: true, ValidateTestBinary: true}
			benchmark := Benchmark{Name: "sample", Suite: "sample", Repo: ".", buildDir: buildDir, NotSandboxed: true}
			failure := config.compileOne(&benchmark, workspace, 1, false)
			if tt.wantFailure {
				if !strings.Contains(failure, "startup failed") {
					t.Fatalf("compileOne failure = %q, want startup failure", failure)
				}
			} else if failure != "" {
				t.Fatalf("compileOne returned unexpected failure: %s", failure)
			}
		})
	}
}

func TestValidateTestBinarySkipsBuildMode(t *testing.T) {
	config := Configuration{ValidateTestBinary: true}
	benchmark := Benchmark{BuildMode: buildModeBuild}
	if err := config.validateTestBinary(&benchmark, "/does/not/exist", nil); err != nil {
		t.Fatalf("validateTestBinary(build mode) = %v, want nil", err)
	}
}

// bentCmd returns a "bent" command (that is implemented by rerunning the current program after setting
// BENT_TEST_IS_CMD_BENT).  The command is always run in the temporary directory created by TestMain.
func bentCmd(t *testing.T, args ...string) *exec.Cmd {
	exe, err := os.Executable()
	if err != nil {
		t.Fatal(err)
	}
	cmd := exec.Command(exe, args...)
	cmd.Dir = dir
	cmd.Env = append(os.Environ(), "BENT_TEST_IS_CMD_BENT=1", "PWD="+dir)
	return cmd
}

func TestBent(t *testing.T) {
	if runtime.GOARCH == "wasm" {
		t.Skipf("skipping test: exec not supported on %s/%s", runtime.GOOS, runtime.GOARCH)
	}
	cmd := bentCmd(t, "-I")
	output, err := cmd.CombinedOutput()
	if err != nil {
		fmt.Fprintf(os.Stderr, "%s\n", output)
		t.Fatal(err)
	}
	t.Log(string(output))
	Cs := []string{"sample", "cronjob", "cmpjob", "gollvm", "llgo-size"}
	Bs := []string{"all", "100", "gc", "gcplus", "trial", "llgo-size"}
	for _, c := range Cs {
		for _, b := range Bs {
			cmd = bentCmd(t, "-l", "-C=configurations-"+c+".toml", "-B=benchmarks-"+b+".toml")
			output, err = cmd.CombinedOutput()
			if err != nil {
				fmt.Fprintf(os.Stderr, "%s\n", output)
				t.Fatal(err)
			}
			t.Log(string(output))
		}
		Bs = Bs[:1] // truncate Bs for remaining configurations
	}

}
