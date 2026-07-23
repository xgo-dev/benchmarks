#!/usr/bin/env bash
set -euo pipefail

pages_dir=$1
repository_url=$2
if [[ -z "$pages_dir" || -z "$repository_url" ]]; then
  echo "usage: prepare-pages-branch.sh PAGES_DIR REPOSITORY_URL" >&2
  exit 2
fi

if git ls-remote --exit-code --heads "$repository_url" pages >/dev/null; then
  git clone --depth=1 --branch pages "$repository_url" "$pages_dir"
  exit 0
fi

# A new formal repository has no publication branch yet.  Initialize an orphan
# branch locally; publish.sh or publish-site.sh commits and pushes its first
# content to create the remote branch.
git init "$pages_dir"
git -C "$pages_dir" checkout --orphan pages
git -C "$pages_dir" remote add origin "$repository_url"
