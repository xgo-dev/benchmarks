#!/usr/bin/env bash
set -euo pipefail

run_dir=$1
benchstat_bin=$2
bench_dir="$run_dir/bench"
benchmark_file="$run_dir/benchmarks-llgo-performance.toml"
report="$run_dir/benchstat.txt"
repetitions=10

benchmarks=()
while IFS= read -r benchmark; do
  benchmarks+=("$benchmark")
done < <(awk -F'"' '/^  Name = / { print $2 }' "$benchmark_file")
configs=(Go LLGo LLGoFullLTO)

if ((${#benchmarks[@]} == 0)); then
  echo "no LLGo performance benchmarks found in $benchmark_file" >&2
  exit 1
fi

stdout_files=()
for config in "${configs[@]}"; do
  matches=()
  while IFS= read -r match; do
    matches+=("$match")
  done < <(find "$bench_dir" -maxdepth 1 -type f -name "*.$config.stdout" -print)
  if ((${#matches[@]} != 1)); then
    echo "expected one $config stdout file in $bench_dir, found ${#matches[@]}" >&2
    exit 1
  fi
  stdout_file=${matches[0]}
  stdout_files+=("$stdout_file")

  for benchmark in "${benchmarks[@]}"; do
    count=$(grep -Fxc "shortname: $benchmark" "$stdout_file" || true)
    if ((count != repetitions)); then
      echo "$config produced $count/$repetitions samples for $benchmark" >&2
      exit 1
    fi
  done

  pass_count=$(grep -c '^PASS$' "$stdout_file" || true)
  expected_passes=$((${#benchmarks[@]} * repetitions))
  if ((pass_count != expected_passes)); then
    echo "$config produced $pass_count/$expected_passes passing samples" >&2
    exit 1
  fi
done

"$benchstat_bin" -table shortname -col toolchain -row .name "${stdout_files[@]}" > "$report"
cat "$report"
