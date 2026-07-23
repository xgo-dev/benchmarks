// Copyright 2021 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

package main

import "os"

var ppid int

func main() {
	for range 500000 {
		ppid = os.Getppid()
	}
}
