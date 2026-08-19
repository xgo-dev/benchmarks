#!/usr/bin/env python3

import glob
import json
import os
import platform
import sys
import tomllib
from collections import OrderedDict, defaultdict
from datetime import datetime, timezone


CONFIGS = ("Go", "LLGo")
FINAL_TEST_ACTIONS = {"pass", "fail", "skip"}


def env(name, fallback=""):
    return os.environ.get(name) or os.environ.get(fallback, "")


def number(name, fallback=""):
    try:
        return int(env(name, fallback))
    except ValueError:
        return None


def load_manifest(path):
    with open(path, "rb") as source:
        entries = tomllib.load(source).get("Benchmarks", [])
    if not entries:
        raise ValueError("compatibility manifest contains no packages")
    return entries


def selected_manifest(run_dir, entries):
    selection_path = os.path.join(run_dir, "selected-packages.txt")
    if not os.path.exists(selection_path):
        return entries
    with open(selection_path, encoding="utf-8") as source:
        selected = {line.strip() for line in source if line.strip()}
    available = {entry["Name"] for entry in entries}
    unknown = selected - available
    if unknown:
        raise ValueError("unknown selected compatibility packages: " + ", ".join(sorted(unknown)))
    return [entry for entry in entries if entry["Name"] in selected]


def split_segments(path):
    segments = {}
    current = None
    with open(path, encoding="utf-8", errors="replace") as source:
        for raw_line in source:
            line = raw_line.rstrip("\n")
            if line.startswith("shortname: "):
                current = line.removeprefix("shortname: ")
                segments[current] = []
                continue
            if current is None or line.startswith("toolchain: "):
                continue
            try:
                event = json.loads(line)
            except json.JSONDecodeError:
                continue
            if isinstance(event, dict) and event.get("Action"):
                segments[current].append(event)
    return segments


def config_segments(run_dir, config):
    matches = glob.glob(os.path.join(run_dir, "bench", f"*.{config}.stdout"))
    if len(matches) > 1:
        raise ValueError(f"expected at most one {config} stdout file, found {len(matches)}")
    return split_segments(matches[0]) if matches else {}


def clipped_output(lines, limit=4000):
    text = "".join(lines).strip()
    if len(text) <= limit:
        return text
    return "…" + text[-limit:]


def package_result(events):
    if events is None:
        return {
            "build": "fail",
            "test": "not-run",
            "passed": 0,
            "failed": 0,
            "skipped": 0,
            "total": 0,
            "elapsedSeconds": None,
            "failedTests": [],
        }

    tests = {}
    output = defaultdict(list)
    package_output = []
    package_action = ""
    elapsed = None
    for event in events:
        test = event.get("Test", "")
        action = event.get("Action", "")
        if action == "output":
            if test:
                output[test].append(event.get("Output", ""))
            else:
                package_output.append(event.get("Output", ""))
        elif test and action in FINAL_TEST_ACTIONS:
            tests[test] = action
        elif not test and action in FINAL_TEST_ACTIONS:
            package_action = action
            if isinstance(event.get("Elapsed"), (int, float)):
                elapsed = event["Elapsed"]

    passed = sum(action == "pass" for action in tests.values())
    failed_names = [name for name, action in tests.items() if action == "fail"]
    skipped = sum(action == "skip" for action in tests.values())
    failed_tests = [
        {"name": name, "output": clipped_output(output[name])}
        for name in failed_names
    ]
    if package_action == "fail" and not failed_tests:
        failed_tests.append({"name": "package", "output": clipped_output(package_output)})

    test_status = package_action if package_action in FINAL_TEST_ACTIONS else "runner-error"
    return {
        "build": "pass",
        "test": test_status,
        "passed": passed,
        "failed": len(failed_names),
        "skipped": skipped,
        "total": passed + len(failed_names) + skipped,
        "elapsedSeconds": elapsed,
        "failedTests": failed_tests,
    }


def classification(go_result, llgo_result):
    if go_result["build"] != "pass" or go_result["test"] != "pass":
        return "baseline-failure"
    if llgo_result["build"] != "pass":
        return "compile-gap"
    if llgo_result["test"] != "pass":
        return "test-failure"
    return "compatible"


def run_metadata():
    repository = env("LLGO_COMPATIBILITY_REPOSITORY", "GITHUB_REPOSITORY")
    run_id = env("LLGO_COMPATIBILITY_RUN_ID", "GITHUB_RUN_ID")
    workflow_url = env("LLGO_COMPATIBILITY_WORKFLOW_URL")
    if not workflow_url and repository and run_id:
        workflow_url = f"https://github.com/{repository}/actions/runs/{run_id}"
    machine = env("LLGO_COMPATIBILITY_CPU") or platform.processor()
    return {
        "id": run_id,
        "attempt": number("LLGO_COMPATIBILITY_RUN_ATTEMPT", "GITHUB_RUN_ATTEMPT"),
        "number": number("LLGO_COMPATIBILITY_RUN_NUMBER", "GITHUB_RUN_NUMBER"),
        "createdAt": datetime.now(timezone.utc).isoformat().replace("+00:00", "Z"),
        "repository": repository,
        "sourceCommit": env("LLGO_COMPATIBILITY_SOURCE_COMMIT", "GITHUB_SHA"),
        "llgoRepository": env("LLGO_REPOSITORY"),
        "llgoCommit": env("LLGO_COMMIT"),
        "llgoTag": env("LLGO_TAG"),
        "goVersion": env("GO_VERSION"),
        "llvmVersion": env("LLVM_VERSION"),
        "event": env("LLGO_COMPATIBILITY_EVENT", "GITHUB_EVENT_NAME"),
        "workflowUrl": workflow_url,
        "runnerOS": env("RUNNER_OS") or platform.system(),
        "runnerArch": env("RUNNER_ARCH") or platform.machine(),
        "cpu": machine,
    }


def build_document(run_dir):
    manifest_path = os.path.join(run_dir, "benchmarks-llgo-compatibility.toml")
    entries = selected_manifest(run_dir, load_manifest(manifest_path))
    segments = {config: config_segments(run_dir, config) for config in CONFIGS}
    projects = OrderedDict()
    packages = []

    for entry in entries:
        name = entry["Name"]
        go_result = package_result(segments["Go"].get(name))
        llgo_result = package_result(segments["LLGo"].get(name))
        result = classification(go_result, llgo_result)
        package = {
            "name": name,
            "importPath": entry["Repo"],
            "version": entry.get("Version", "@latest"),
            "tests": entry.get("Tests", "Test"),
            "buildFlags": entry.get("BuildFlags", []),
            "classification": result,
            "Go": go_result,
            "LLGo": llgo_result,
        }
        packages.append(package)
        project_name = entry.get("Project") or name
        if project_name not in projects:
            projects[project_name] = {
                "name": project_name,
                "url": entry.get("ProjectURL", ""),
                "versions": [],
                "packages": [],
            }
        project = projects[project_name]
        if package["version"] not in project["versions"]:
            project["versions"].append(package["version"])
        project["packages"].append(package)

    for project in projects.values():
        project["classification"] = (
            "compatible"
            if all(package["classification"] == "compatible" for package in project["packages"])
            else "gap"
        )

    if not any(package["Go"]["build"] == "pass" for package in packages):
        raise ValueError("Go baseline produced no compiled packages; refusing to publish an infrastructure failure")

    summary = {
        "projectsCompatible": sum(project["classification"] == "compatible" for project in projects.values()),
        "projectsTotal": len(projects),
        "packagesCompatible": sum(package["classification"] == "compatible" for package in packages),
        "packagesCompiled": sum(package["LLGo"]["build"] == "pass" for package in packages),
        "packagesTotal": len(packages),
        "testsPassed": sum(package["LLGo"]["passed"] for package in packages),
        "testsFailed": sum(package["LLGo"]["failed"] for package in packages),
        "testsSkipped": sum(package["LLGo"]["skipped"] for package in packages),
        "testsTotal": sum(package["LLGo"]["total"] for package in packages),
    }
    return {
        "schemaVersion": 1,
        "format": "go-test-json",
        "run": run_metadata(),
        "summary": summary,
        "projects": list(projects.values()),
        "native": {
            "go": "raw/Go.stdout",
            "llgo": "raw/LLGo.stdout",
            "goDriver": "raw/Go.log",
            "llgoDriver": "raw/LLGo.log",
        },
    }


def print_summary(document):
    summary = document["summary"]
    print("## LLGo open-source compatibility")
    print()
    print(f"- Projects: {summary['projectsCompatible']}/{summary['projectsTotal']} fully compatible")
    print(f"- Packages: {summary['packagesCompatible']}/{summary['packagesTotal']} compatible")
    print(f"- LLGo compile: {summary['packagesCompiled']}/{summary['packagesTotal']} packages")
    print(f"- LLGo tests: {summary['testsPassed']}/{summary['testsTotal']} passed, "
          f"{summary['testsFailed']} failed, {summary['testsSkipped']} skipped")
    gaps = [
        package
        for project in document["projects"]
        for package in project["packages"]
        if package["classification"] != "compatible"
    ]
    if gaps:
        print()
        print("### Gaps")
        for package in gaps[:30]:
            print(f"- `{package['importPath']}`: {package['classification']}")
        if len(gaps) > 30:
            print(f"- … and {len(gaps) - 30} more; see the published table or raw JSON")


def main():
    if len(sys.argv) != 3:
        raise SystemExit("usage: report.py RUN_DIR OUTPUT_JSON")
    run_dir, output_path = sys.argv[1:]
    document = build_document(run_dir)
    with open(output_path, "w", encoding="utf-8") as destination:
        json.dump(document, destination, indent=2)
        destination.write("\n")
    print_summary(document)


if __name__ == "__main__":
    main()
