#!/usr/bin/env bash
set -euo pipefail

run_dir=$1
script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
bench_dir="$run_dir/bench"
result_dir="$run_dir/results"
mkdir -p "$result_dir"

configs=(
  Go
  LLGoNoLTO
  LLGoFullLTONoGlobalDCE
  LLGoFullLTOGlobalDCE
  LLGoFullLTOGlobalDCEPlugin
)
expected_benchmarks=(
  Toml
  Aws_restjson
  Dustin_humanize
  K8s_workqueue
  Uber_zap
  Gorm_schema
)

summary="$result_dir/summary.md"
tsv="$result_dir/total-bytes.tsv"
raw_dir="$result_dir/raw"
json="$result_dir/results.json"
build_tsv="$result_dir/build-times.tsv"
timing_summary="$result_dir/timing-summary.md"
mkdir -p "$raw_dir"

printf '%s\n' '# LLGo binary-size CI' > "$summary"
printf '%s\n\n' 'All values are ELF file sizes in bytes, collected by Bent `benchsize`.' >> "$summary"
printf 'benchmark' > "$tsv"
for config in "${configs[@]}"; do
  printf '\t%s' "$config" >> "$tsv"
done
printf '\n' >> "$tsv"

printf '| Benchmark |' >> "$summary"
for config in "${configs[@]}"; do
  printf ' %s |' "$config" >> "$summary"
done
printf '\n| --- |' >> "$summary"
for config in "${configs[@]}"; do
  printf ' ---: |' >> "$summary"
done
printf '\n' >> "$summary"

if ! find "$bench_dir" -maxdepth 1 -type f -name '*.Go.benchsize' -print -quit | grep -q .; then
  echo "missing Go benchsize output in $bench_dir" >&2
  exit 1
fi

mapfile -t benchmarks < <(find "$bench_dir" -maxdepth 1 -type f -name '*.Go.benchsize' -exec \
  awk '$4 == "total-bytes" { name=$1; sub(/^Benchmark/, "", name); print name }' {} + | sort -u)
if ((${#benchmarks[@]} == 0)); then
  echo "no total-bytes benchmark results found in $bench_dir" >&2
  exit 1
fi
for expected in "${expected_benchmarks[@]}"; do
  if [[ ! " ${benchmarks[*]} " =~ " ${expected} " ]]; then
    echo "missing required binary-size benchmark: $expected" >&2
    exit 1
  fi
done
for benchmark in "${benchmarks[@]}"; do
  printf '%s' "$benchmark" >> "$tsv"
  printf '| %s |' "$benchmark" >> "$summary"
  for config in "${configs[@]}"; do
    value=$(find "$bench_dir" -maxdepth 1 -type f -name "*.$config.benchsize" -exec \
      awk -v key="Benchmark$benchmark" '$1 == key && $4 == "total-bytes" { print $3; exit }' {} +)
    value=${value%%$'\n'*}
    if [[ -z "$value" ]]; then
      echo "missing total-bytes result for $benchmark ($config)" >&2
      exit 1
    fi
    printf '\t%s' "$value" >> "$tsv"
    printf ' %s |' "$value" >> "$summary"
  done
  printf '\n' >> "$tsv"
  printf '\n' >> "$summary"
done


find "$bench_dir" -maxdepth 1 -type f -name '*.benchsize' -exec cp -f {} "$raw_dir/" \;

find "$bench_dir" -maxdepth 1 -type f -name '*.build' -exec cp -f {} "$raw_dir/" \;
: > "$result_dir/download-timings.log"
if [[ -s "$run_dir/download-timings.log" ]]; then
  cp "$run_dir/download-timings.log" "$result_dir/download-timings.log"
fi

python3 "$script_dir/timing-report.py" "$bench_dir" "$build_tsv" "$timing_summary"

export LLGO_SIZE_TSV="$tsv"
export LLGO_SIZE_JSON="$json"
python3 - <<'PY'
import csv
import json
import os
from datetime import datetime, timezone

tsv = os.environ["LLGO_SIZE_TSV"]
output = os.environ["LLGO_SIZE_JSON"]
configs = [
    "Go",
    "LLGoNoLTO",
    "LLGoFullLTONoGlobalDCE",
    "LLGoFullLTOGlobalDCE",
    "LLGoFullLTOGlobalDCEPlugin",
]

benchmarks = []
with open(tsv, newline="", encoding="utf-8") as f:
    for row in csv.DictReader(f, delimiter="\t"):
        benchmarks.append({
            "name": row["benchmark"],
            "values": {name: int(row[name]) for name in configs},
        })

def env(name, fallback=""):
    return os.environ.get(name) or os.environ.get(fallback, "")

def number(name, fallback):
    value = env(name, fallback)
    try:
        return int(value)
    except ValueError:
        return None

repository = env("LLGO_SIZE_REPOSITORY", "GITHUB_REPOSITORY")
run_id = env("LLGO_SIZE_RUN_ID", "GITHUB_RUN_ID")
workflow_url = os.environ.get("LLGO_SIZE_WORKFLOW_URL", "")
if not workflow_url and repository and run_id:
    workflow_url = "https://github.com/" + repository + "/actions/runs/" + run_id

run = {
    "id": run_id,
    "attempt": number("LLGO_SIZE_RUN_ATTEMPT", "GITHUB_RUN_ATTEMPT"),
    "number": number("LLGO_SIZE_RUN_NUMBER", "GITHUB_RUN_NUMBER"),
    "createdAt": datetime.now(timezone.utc).isoformat().replace("+00:00", "Z"),
    "repository": repository,
    "sourceCommit": env("LLGO_SIZE_SOURCE_COMMIT", "GITHUB_SHA"),
    "ref": env("LLGO_SIZE_REF", "GITHUB_REF_NAME"),
    "llgoRepository": os.environ.get("LLGO_REPOSITORY", ""),
    "llgoCommit": os.environ.get("LLGO_COMMIT", ""),
    "goVersion": os.environ.get("GO_VERSION", ""),
    "llvmVersion": os.environ.get("LLVM_VERSION", ""),
    "event": env("LLGO_SIZE_EVENT", "GITHUB_EVENT_NAME"),
    "workflowUrl": workflow_url,
}

document = {
    "schemaVersion": 1,
    "format": "bent-benchsize",
    "run": run,
    "configs": configs,
    "metric": "total-bytes",
    "benchmarks": benchmarks,
    "native": {
        "summary": "summary.md",
        "tsv": "total-bytes.tsv",
        "timingSummary": "timing-summary.md",
        "buildTimes": "build-times.tsv",
        "downloadTimings": "download-timings.log",
        "rawDir": "raw",
    },
}

with open(output, "w", encoding="utf-8") as f:
    json.dump(document, f, indent=2, sort_keys=False)
    f.write("\n")
PY

cat "$summary"
printf "\n"
cat "$timing_summary"
