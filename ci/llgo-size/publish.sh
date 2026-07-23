#!/usr/bin/env bash
set -euo pipefail

results_dir="$1"
pages_dir="$2"
site_dir="$3"
if [[ -z "$results_dir" || -z "$pages_dir" || -z "$site_dir" ]]; then
  echo "usage: publish.sh RESULTS_DIR PAGES_DIR SITE_DIR" >&2
  exit 2
fi

result_json="$results_dir/results.json"
if [[ ! -s "$result_json" ]]; then
  echo "missing structured result: $result_json" >&2
  exit 1
fi

mkdir -p "$pages_dir/data/runs"
for legacy in "$pages_dir"/data/runs/*.json; do
  [[ -f "$legacy" ]] || continue
  legacy_key="$(basename "$legacy" .json)"
  legacy_dir="$pages_dir/data/runs/$legacy_key"
  mkdir -p "$legacy_dir"
  mv "$legacy" "$legacy_dir/results.json"
done

# Consolidate historical runs under the LLGo commit that produced them. This
# keeps reruns of the same commit as one comparable history entry instead of
# creating a new entry for every Actions run number.
python3 - "$pages_dir/data/runs" <<'PY'
import json
import os
import re
import shutil
import sys

runs_dir = sys.argv[1]
for source in sorted(os.listdir(runs_dir)):
    source_dir = os.path.join(runs_dir, source)
    result_path = os.path.join(source_dir, "results.json")
    if not os.path.isdir(source_dir) or not os.path.isfile(result_path):
        continue
    try:
        with open(result_path, encoding="utf-8") as f:
            run = json.load(f).get("run", {})
    except (OSError, ValueError):
        continue
    key = run.get("llgoCommit") or run.get("sourceCommit") or source
    if not re.fullmatch(r"[A-Za-z0-9._-]+", str(key)) or str(key) == source:
        continue
    target_dir = os.path.join(runs_dir, str(key))
    if os.path.exists(target_dir):
        existing_path = os.path.join(target_dir, "results.json")
        try:
            with open(existing_path, encoding="utf-8") as f:
                existing = json.load(f).get("run", {})
        except (OSError, ValueError):
            existing = {}
        if str(run.get("createdAt", "")) >= str(existing.get("createdAt", "")):
            shutil.rmtree(target_dir)
        else:
            shutil.rmtree(source_dir)
            continue
    os.rename(source_dir, target_dir)
PY
cp "$site_dir/index.html" "$pages_dir/index.html"
cp "$site_dir/app.js" "$pages_dir/app.js"
cp "$site_dir/style.css" "$pages_dir/style.css"
cp "$site_dir/_config.yml" "$pages_dir/_config.yml"
rm -f "$pages_dir/.nojekyll"

run_key=$(python3 - "$result_json" <<'PY'
import json
import re
import sys

with open(sys.argv[1], encoding="utf-8") as f:
    run = json.load(f)["run"]
key = str(run.get("llgoCommit") or run.get("sourceCommit") or run.get("id") or "manual")
if not re.fullmatch(r"[A-Za-z0-9._-]+", key):
    raise SystemExit("invalid run key: " + repr(key))
print(key)
PY
)

run_dir="$pages_dir/data/runs/$run_key"
mkdir -p "$run_dir/raw"
cp "$result_json" "$run_dir/results.json"
cp "$results_dir/summary.md" "$run_dir/summary.md"
cp "$results_dir/total-bytes.tsv" "$run_dir/total-bytes.tsv"
cp "$results_dir/timing-summary.md" "$run_dir/timing-summary.md"
cp "$results_dir/build-times.tsv" "$run_dir/build-times.tsv"
cp "$results_dir/download-timings.log" "$run_dir/download-timings.log"
if compgen -G "$results_dir/raw/*.benchsize" > /dev/null; then
  cp "$results_dir/raw/"*.benchsize "$run_dir/raw/"
fi
if compgen -G "$results_dir/raw/*.build" > /dev/null; then
  cp "$results_dir/raw/"*.build "$run_dir/raw/"
fi

python3 - "$pages_dir/data" <<'PY'
import glob
import json
import os
import sys
from datetime import datetime, timezone

data_dir = sys.argv[1]
runs = []
for path in glob.glob(os.path.join(data_dir, "runs", "*", "results.json")):
    with open(path, encoding="utf-8") as f:
        document = json.load(f)
    run = document.get("run", {})
    key = os.path.basename(os.path.dirname(path))
    runs.append({
        "key": key,
        "id": run.get("id", ""),
        "attempt": run.get("attempt"),
        "number": run.get("number"),
        "createdAt": run.get("createdAt", ""),
        "sourceCommit": run.get("sourceCommit", ""),
        "ref": run.get("ref", ""),
        "llgoCommit": run.get("llgoCommit", ""),
        "goVersion": run.get("goVersion", ""),
        "llvmVersion": run.get("llvmVersion", ""),
        "workflowUrl": run.get("workflowUrl", ""),
        "binaryArtifactName": run.get("binaryArtifactName", ""),
        "binaryArtifactUrl": run.get("binaryArtifactUrl", ""),
        "path": "runs/" + key + "/results.json",
    })
runs.sort(key=lambda item: item["createdAt"], reverse=True)

index = {
    "schemaVersion": 1,
    "generatedAt": datetime.now(timezone.utc).isoformat().replace("+00:00", "Z"),
    "runs": runs,
}
with open(os.path.join(data_dir, "index.json"), "w", encoding="utf-8") as f:
    json.dump(index, f, indent=2)
    f.write("\n")
PY

git -C "$pages_dir" config user.name "github-actions[bot]"
git -C "$pages_dir" config user.email "41898282+github-actions[bot]@users.noreply.github.com"
git -C "$pages_dir" add .
if git -C "$pages_dir" diff --cached --quiet; then
  echo "Pages history is already up to date"
else
  git -C "$pages_dir" commit -m "ci: publish LLGo binary-size run $run_key"
  git -C "$pages_dir" push origin HEAD:pages
fi
