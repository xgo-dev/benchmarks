# LLGo open-source compatibility

This job compiles and runs 200 pinned, short-mode test packages from
representative pure-Go open-source projects with both Go and LLGo. It is triggered by an LLGo release
tag notification and publishes project-, package-, and test-level results to
GitHub Pages.

Go and LLGo are intentionally run in separate Bent invocations. A compiler
failure in one configuration therefore cannot disable the baseline package in
the other. Test binaries are wrapped with `go tool test2json`, while the native
Bent stdout and driver logs are retained beside the structured report.

The checked-in versions are the release comparison contract. Update them in a
normal reviewable PR; do not replace them with `@latest` in release data.

`projects.toml` defines the reviewed project quotas. Regenerate the embedded
Bent manifest with:

```sh
python3 ci/llgo-compatibility/generate_manifest.py \
  --output cmd/bent/configs/benchmarks-llgo-compatibility.toml
```

Generation targets linux/amd64 with cgo disabled and requires exactly 200
packages with ordinary Go test files. It excludes main packages, assembly,
cgo, integration/example trees, and testdata.
