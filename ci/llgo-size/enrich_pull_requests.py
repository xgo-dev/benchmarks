#!/usr/bin/env python3
"""Add LLGo commit and merged pull-request links to the Pages run index."""

import argparse
import json
import os
import re
import sys
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path


REPOSITORY_RE = re.compile(r"^[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+$")
COMMIT_RE = re.compile(r"^[0-9a-fA-F]{40}$")


def select_merged_pull_request(pulls, commit):
    merged = [
        pull
        for pull in pulls
        if pull.get("merged_at") and pull.get("html_url") and pull.get("number")
    ]
    if not merged:
        return None

    exact = [
        pull
        for pull in merged
        if str(pull.get("merge_commit_sha", "")).lower() == commit.lower()
    ]
    candidates = exact or merged
    # The exact squash/merge commit is authoritative. If GitHub only reports
    # PRs containing the commit, use the first PR that landed it.
    return min(candidates, key=lambda pull: pull["merged_at"])


def github_pull_request_lookup(repository, commit, api_url, token):
    path = "/repos/{}/commits/{}/pulls".format(
        urllib.parse.quote(repository, safe="/"),
        urllib.parse.quote(commit, safe=""),
    )
    credentials = [token, ""] if token else [""]
    pulls = None
    for credential in credentials:
        request = urllib.request.Request(
            api_url.rstrip("/") + path,
            headers={
                "Accept": "application/vnd.github+json",
                "X-GitHub-Api-Version": "2022-11-28",
                "User-Agent": "xgo-dev-benchmarks-pages",
            },
        )
        if credential:
            request.add_header("Authorization", "Bearer " + credential)
        try:
            with urllib.request.urlopen(request, timeout=30) as response:
                pulls = json.load(response)
            break
        except urllib.error.HTTPError as error:
            detail = error.read(500).decode("utf-8", "replace")
            # GITHUB_TOKEN is scoped to the benchmark repository. Public LLGo
            # metadata remains available without authentication if that token
            # cannot read the separate LLGo repository.
            if credential and error.code in (403, 404):
                continue
            raise RuntimeError(
                "GitHub API returned {} for {}@{}: {}".format(
                    error.code, repository, commit, detail
                )
            ) from error
        except urllib.error.URLError as error:
            raise RuntimeError(
                "cannot query GitHub for {}@{}: {}".format(
                    repository, commit, error.reason
                )
            ) from error
    if not isinstance(pulls, list):
        raise RuntimeError("unexpected GitHub response for {}@{}".format(repository, commit))
    return select_merged_pull_request(pulls, commit)


def repository_from_result(run, data_dir):
    path_value = run.get("path")
    if not path_value:
        return ""
    data_root = data_dir.resolve()
    result_path = (data_dir / str(path_value)).resolve()
    try:
        result_path.relative_to(data_root)
    except ValueError:
        return ""
    try:
        with result_path.open(encoding="utf-8") as result_file:
            document = json.load(result_file)
    except (OSError, ValueError):
        return ""
    return str(document.get("run", {}).get("llgoRepository", ""))


def enrich_runs(index, data_dir, lookup, default_repository):
    queries = 0
    linked = 0
    cache = {}
    for run in index.get("runs", []):
        commit = str(run.get("llgoCommit", ""))
        repository = str(run.get("llgoRepository", ""))
        if not REPOSITORY_RE.fullmatch(repository):
            repository = repository_from_result(run, data_dir)
        if not REPOSITORY_RE.fullmatch(repository):
            repository = default_repository
        if not REPOSITORY_RE.fullmatch(repository) or not COMMIT_RE.fullmatch(commit):
            continue

        commit = commit.lower()
        commit_url = "https://github.com/{}/commit/{}".format(repository, commit)
        run["llgoRepository"] = repository
        run["commitUrl"] = commit_url
        if run.get("pullRequestResolved") is True:
            if run.get("pullRequestUrl"):
                linked += 1
            continue

        key = (repository, commit)
        if key not in cache:
            cache[key] = lookup(repository, commit)
            queries += 1
        pull = cache[key]
        run["pullRequestResolved"] = True
        if pull:
            run["pullRequestNumber"] = int(pull["number"])
            run["pullRequestUrl"] = str(pull["html_url"])
            run["pullRequestTitle"] = str(pull.get("title", ""))
            linked += 1
        else:
            run.pop("pullRequestNumber", None)
            run.pop("pullRequestUrl", None)
            run.pop("pullRequestTitle", None)
    return queries, linked


def parse_args(argv):
    parser = argparse.ArgumentParser()
    parser.add_argument("index", type=Path, help="path to Pages data/index.json")
    parser.add_argument(
        "--default-repository",
        default="xgo-dev/llgo",
        help="LLGo repository for legacy results without repository metadata",
    )
    parser.add_argument(
        "--api-url",
        default=os.environ.get("GITHUB_API_URL", "https://api.github.com"),
    )
    return parser.parse_args(argv)


def main(argv=None):
    args = parse_args(argv)
    if not REPOSITORY_RE.fullmatch(args.default_repository):
        raise SystemExit("invalid default repository: " + repr(args.default_repository))
    with args.index.open(encoding="utf-8") as index_file:
        index = json.load(index_file)
    token = os.environ.get("GH_TOKEN") or os.environ.get("GITHUB_TOKEN", "")

    def lookup(repository, commit):
        return github_pull_request_lookup(repository, commit, args.api_url, token)

    queries, linked = enrich_runs(index, args.index.parent, lookup, args.default_repository)
    temporary = args.index.with_suffix(args.index.suffix + ".tmp")
    with temporary.open("w", encoding="utf-8") as index_file:
        json.dump(index, index_file, indent=2)
        index_file.write("\n")
    os.replace(temporary, args.index)
    print("Resolved {} LLGo commit(s); {} run(s) link to merged PRs".format(queries, linked))
    return 0


if __name__ == "__main__":
    sys.exit(main())
