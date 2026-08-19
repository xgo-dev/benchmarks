#!/usr/bin/env bash
set -euo pipefail

# Every selected project is materialized as its own pinned consumer module.
# An ambient workspace from the benchmark or compiler checkout must not alter
# dependency resolution inside those modules.
export GOWORK=off

# Some upstream suites emit hundreds of thousands of test2json events. Bent
# still retains every event in bench/*.stdout for reporting and artifacts, but
# echoing them all into the Actions log can starve a hosted runner.
export BENT_QUIET_RUN_OUTPUT=1

run_dir=$1
bent_bin=$2
if [[ -z "$run_dir" || -z "$bent_bin" ]]; then
  echo "usage: run.sh RUN_DIR BENT_BIN" >&2
  exit 2
fi

mkdir -p "$run_dir"
run_dir=$(cd "$run_dir" && pwd)
bent_bin=$(cd "$(dirname "$bent_bin")" && pwd)/$(basename "$bent_bin")

if [[ -n "${LLGO_COMPATIBILITY_PACKAGES:-}" ]]; then
  printf '%s\n' "$LLGO_COMPATIBILITY_PACKAGES" | tr ',' '\n' > "$run_dir/selected-packages.txt"
fi

(
  cd "$run_dir"
  "$bent_bin" -I
)

for config in Go LLGo; do
  arguments=(
    -T -N=1
    "-b=${LLGO_COMPATIBILITY_PACKAGES:-}"
    "-c=$config"
    -B=benchmarks-llgo-compatibility.toml
    -C=configurations-llgo-compatibility.toml
  )
  if [[ "$config" == "LLGo" ]]; then
    # Go already populated the pinned module workspaces. Preserve them so the
    # second compiler does not repeat 200 equivalent go-get operations.
    arguments+=(-X)
  fi
  set +e
  (
    cd "$run_dir"
    "$bent_bin" "${arguments[@]}"
  ) 2>&1 | tee "$run_dir/$config.log" >&2
  status=${PIPESTATUS[0]}
  set -e
  printf '%s\n' "$status" > "$run_dir/$config.exitcode"
done

python3 "$(dirname "$0")/report.py" "$run_dir" "$run_dir/results.json"
