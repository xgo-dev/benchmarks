#!/usr/bin/env bash
set -euo pipefail

pages_dir="$1"
site_dir="$2"
if [[ -z "$pages_dir" || -z "$site_dir" ]]; then
  echo "usage: publish-site.sh PAGES_DIR SITE_DIR" >&2
  exit 2
fi

for file in index.html app.js style.css _config.yml; do
  cp "$site_dir/$file" "$pages_dir/$file"
done
rm -f "$pages_dir/.nojekyll"

git -C "$pages_dir" config user.name "github-actions[bot]"
git -C "$pages_dir" config user.email "41898282+github-actions[bot]@users.noreply.github.com"
git -C "$pages_dir" add -A
if git -C "$pages_dir" diff --cached --quiet; then
  echo "Pages site is already up to date"
else
  git -C "$pages_dir" commit -m "ci: refresh LLGo binary-size site"
  git -C "$pages_dir" push origin HEAD:pages
fi
