// Copyright 2021 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

//go:build go1.16

package main

import (
	"fmt"
	"os"
	"os/exec"
	"reflect"
	"runtime"
	"strings"
	"sync"
	"testing"
	"time"
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

func TestConfigurationTestCommandArgs(t *testing.T) {
	originalExplicitAll := explicitAll
	defer func() { explicitAll = originalExplicitAll }()

	tests := []struct {
		name          string
		configuration Configuration
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
			got := test.configuration.testCommandArgs(test.randomizing)
			if !reflect.DeepEqual(got, test.want) {
				t.Fatalf("testCommandArgs() = %q, want %q", got, test.want)
			}
		})
	}
}

func TestRunCompileTasks(t *testing.T) {
	tasks := make([]compileTask, 4)
	for index := range tasks {
		tasks[index].count = index
	}

	var mu sync.Mutex
	active, maxActive := 0, 0
	failures := runCompileTasks(tasks, 2, func(task compileTask) string {
		mu.Lock()
		active++
		maxActive = max(maxActive, active)
		mu.Unlock()

		time.Sleep(10 * time.Millisecond)

		mu.Lock()
		active--
		mu.Unlock()
		if task.count%2 != 0 {
			return fmt.Sprintf("failure %d", task.count)
		}
		return ""
	})

	if maxActive != 2 {
		t.Fatalf("maximum concurrent builds = %d, want 2", maxActive)
	}
	if want := []string{"failure 1", "failure 3"}; !reflect.DeepEqual(failures, want) {
		t.Fatalf("failures = %q, want %q", failures, want)
	}
}

func TestBuildWorkersMustBePositive(t *testing.T) {
	cmd := bentCmd(t, "-j=0", "-l")
	output, err := cmd.CombinedOutput()
	if err == nil {
		t.Fatalf("bent -j=0 succeeded, output = %s", output)
	}
	if !strings.Contains(string(output), "j must be at least 1") {
		t.Fatalf("bent -j=0 output = %q, want validation error", output)
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
	Bs := []string{"all", "50", "gc", "gcplus", "trial", "llgo-size"}
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
