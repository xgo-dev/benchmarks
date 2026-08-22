#!/usr/bin/env bash
set -euo pipefail

run_dir=$1
benchstat_bin=$2
bench_dir="$run_dir/bench"
benchmark_file="$run_dir/benchmarks-llgo-performance.toml"
report="$run_dir/benchstat.txt"
csv_report="$run_dir/benchstat.csv"
json_report="$run_dir/results.json"
repetitions=5
confidence=0.90

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
done

valid_benchmarks=()
skipped_benchmarks=()
for benchmark in "${benchmarks[@]}"; do
  failure=""
  for index in "${!configs[@]}"; do
    config=${configs[$index]}
    stdout_file=${stdout_files[$index]}
    sample_count=$(grep -Fxc -- "shortname: $benchmark" "$stdout_file" || true)
    pass_count=$(awk -v marker="shortname: $benchmark" '
      function finish_sample() {
        if (active && passed) {
          passing++
        }
      }
      /^shortname: / {
        finish_sample()
        active = ($0 == marker)
        passed = 0
        next
      }
      active && $0 == "PASS" {
        passed = 1
      }
      END {
        finish_sample()
        print passing + 0
      }
    ' "$stdout_file")

    if ((sample_count != repetitions || pass_count != repetitions)); then
      detail="$config: $pass_count/$sample_count passing samples"
      failure="${failure}${failure:+; }$detail"
    fi
  done

  if [[ -n "$failure" ]]; then
    skipped_benchmarks+=("$benchmark ($failure)")
  else
    valid_benchmarks+=("$benchmark")
  fi
done

if ((${#valid_benchmarks[@]} == 0)); then
  echo "no LLGo performance benchmarks produced complete results" >&2
  exit 1
fi

filtered_dir=$(mktemp -d "$run_dir/report-filtered.XXXXXX")
trap 'rm -rf "$filtered_dir"' EXIT
allow_file="$filtered_dir/benchmarks.txt"
printf '%s\n' "${valid_benchmarks[@]}" > "$allow_file"

filtered_stdout_files=()
for index in "${!configs[@]}"; do
  config=${configs[$index]}
  stdout_file=${stdout_files[$index]}
  filtered_stdout="$filtered_dir/$config.stdout"
  awk -v allow_file="$allow_file" '
    BEGIN {
      while ((getline benchmark < allow_file) > 0) {
        allowed["shortname: " benchmark] = 1
      }
      close(allow_file)
    }
    /^shortname: / {
      emit = ($0 in allowed)
    }
    emit {
      print
    }
  ' "$stdout_file" > "$filtered_stdout"
  filtered_stdout_files+=("$filtered_stdout")
done

{
  printf 'Compared %d/%d benchmarks with %d repetitions per toolchain.\n' \
    "${#valid_benchmarks[@]}" "${#benchmarks[@]}" "$repetitions"
  if ((${#skipped_benchmarks[@]} > 0)); then
    printf 'Skipped %d incomplete benchmarks:\n' "${#skipped_benchmarks[@]}"
    printf -- '- %s\n' "${skipped_benchmarks[@]}"
  fi
  printf '\n'
} > "$report"

"$benchstat_bin" -confidence "$confidence" \
  -table shortname -col toolchain -row .name "${filtered_stdout_files[@]}" >> "$report"
"$benchstat_bin" -confidence "$confidence" -format csv -filter '.unit:sec/op' \
  -table shortname -col toolchain -row .name "${filtered_stdout_files[@]}" > "$csv_report"
LLGO_PERFORMANCE_REPETITIONS=$repetitions \
  python3 "$(dirname "$0")/report.py" "$csv_report" "$json_report" "${filtered_stdout_files[0]}"
cat "$report"
