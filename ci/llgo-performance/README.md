# LLGo runtime performance

This job compares the pinned Go and LLGo toolchains with Bent. It runs the
checked-in cases ten times each, grouped by benchmark to reduce time-local
runner noise, and publishes the raw Bent output, native benchstat text/CSV, and
a structured result used by the runtime-performance Pages table.

It runs only after the `xgo-dev/llgo` release workflow publishes a new tag and
dispatches the exact tag and commit. Ordinary pushes and pull requests do not
start a performance run.

The selected set contains cases where LLGo or LLGo full LTO was faster in a
local `benchmarks-100.toml` survey, plus stable same-range cases that are useful
for tracking future optimization. The workflow checks sample completeness but
does not fail on a performance percentage because hosted-runner measurements
are not a reliable hard regression gate.

Each successful release run is stored under `data/performance/runs/<tag>/` on
the `pages` branch. The lightweight `performance.html` view follows benchstat's
layout: Go is the baseline, with LLGo and LLGo full-LTO values, confidence
ranges, deltas, and p-values shown side by side. The existing `index.html`
continues to show only binary size and build time.

The suite versions come from `cmd/bent/configs/suites.toml`. Keep those versions
pinned for comparable history; update them deliberately in a reviewed change.
