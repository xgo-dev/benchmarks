# LLGo runtime performance

This job compares the pinned Go and LLGo toolchains with Bent. It runs the
checked-in cases ten times each, grouped by benchmark to reduce time-local
runner noise, and publishes both the raw Bent output and a benchstat report.

It runs only after the `xgo-dev/llgo` release workflow publishes a new tag and
dispatches the exact tag and commit. Ordinary pushes and pull requests do not
start a performance run.

The selected set contains cases where LLGo or LLGo full LTO was faster in a
local `benchmarks-100.toml` survey, plus stable same-range cases that are useful
for tracking future optimization. The workflow checks sample completeness but
does not fail on a performance percentage because hosted-runner measurements
are not a reliable hard regression gate.

The suite versions come from `cmd/bent/configs/suites.toml`. Keep those versions
pinned for comparable history; update them deliberately in a reviewed change.
