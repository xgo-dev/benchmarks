# LLGo binary-size CI

The workflow builds a small Bent subset in five configurations:

1. native Go;
2. LLGo without LTO;
3. LLGo full LTO with GlobalDCE disabled;
4. LLGo full LTO with GlobalDCE enabled;
5. LLGo full LTO, GlobalDCE, and the MethodByName LTO plugin.

The Bent suites are `toml`, `aws_restjson`, `dustin_humanize` (its
`BenchmarkParseBigBytes` case), `k8s_workqueue`, `uber_zap`, and `gorm_schema`.
These cover widely used AWS SDK, human-readable byte parsing, Kubernetes, Uber, and GORM code. The GORM schema package is a real MethodByName consumer: its
package-global readonly `callbackTypes` slice supplies the callback names used
by `reflect.Value.MethodByName`. It therefore exercises the plugin through the
same `go test -c` path as every other result.

Every benchmark/configuration pair is built exactly once. LLGo's package cache
separates archives that contain LTO plugin markers from ordinary archives, so
the plugin configuration does not require a forced `-a` rebuild.
The required suite set explicitly includes `dustin_humanize`'s `BenchmarkParseBigBytes`; the
report fails instead of silently publishing a partial result if any required
suite is absent.

`llgo-version.env` supplies the default pinned LLGo, Go, and LLVM versions for
branch and manual runs. The workflow also runs when Bent itself changes, so its
compiler integration remains covered. The workflow stores a Markdown summary
and TSV result as an artifact. The summary also contains Bent's native per-case
build timings; `build-times.tsv`, `timing-summary.md`, `download-timings.log`,
and raw `.build` files are retained for diagnosing slow downloads or builds.

The `llgo-main-updated` repository-dispatch event from `xgo-dev/llgo` first
updates `LLGO_COMMIT` on the benchmarks `main` branch, then explicitly starts a
`workflow_dispatch` build with that complete SHA. This makes the version-file
update and the published result one ordered operation without relying on a
`GITHUB_TOKEN`-created push to trigger another workflow. The exact commit is
retained in `results.json` and the Pages history, so every LLGo `main` update
has a comparable data point. GitHub requires the receiver workflow to be on
the benchmarks repository's default branch before it can receive this event.
The workflow sources `timing.sh` for its shared CI step timing output.
It invokes Bent with four configurable build workers (`BENT_BUILD_WORKERS=4`);
set that environment value to `1` to reproduce a serial build.


## Publishing and history

The workflow keeps Bent's native benchsize files, the existing Markdown summary, and TSV report in the uploaded artifact. It also emits results.json as a small publication index derived from those native records; the raw files remain the source for detailed inspection.

For pushes to `main`, LLGo merge dispatches, and manual runs from `main`, the
workflow copies the structured result into the pages branch. The static page at
the Pages root lists all published runs and lets you compare any two runs by
benchmark and configuration. Pull requests use the lightweight Go-only
validation job described below; they do not produce a binary-size artifact or
modify the history.

Changes that only touch the dashboard source or its publication scripts use the
separate `llgo-binary-size-pages.yml` workflow. That path publishes the updated
site directly without rebuilding benchmarks, and its publication jobs are
restricted to `main`; pull-request builds cannot publish Pages.

The benchmark and page-only workflows use separate concurrency queues. A page
refresh can therefore wait independently without replacing a pending
binary-size run.

Pull requests that change the committed LLGo version, Bent, the LLGo-size
benchmark/configuration files, or the suite definitions used by those cases
run the full five-way matrix and upload the `llgo-binary-size` artifact for
review. They do not publish history. A PR outside that scope uses the separate
Go-only validation job, so dependency acquisition, compilation, and execution
remain checked without rebuilding LLGo or the four LLGo binary-size variants.

Published history is keyed by the full LLGo commit, so rerunning one commit
updates its existing entry instead of adding another build-round entry.

### First-time repository setup

The first publisher run creates the `pages` branch automatically. Before that
run, configure the repository's Pages source as **GitHub Actions** and allow
workflows to write repository contents. In `xgo-dev/llgo`, configure
`BENCHMARKS_DISPATCH_TOKEN` with permission to dispatch to
`xgo-dev/benchmarks`; this token is required only by the small sender workflow
that runs after `main` advances.
