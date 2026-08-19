#!/usr/bin/env python3

import csv
import json
import os
import re
import sys
from datetime import datetime, timezone
from urllib.parse import unquote


CONFIGS = ("Go", "LLGo", "LLGoFullLTO")


def env(name, fallback=""):
    return os.environ.get(name) or os.environ.get(fallback, "")


def number(name, fallback=""):
    try:
        return int(env(name, fallback))
    except ValueError:
        return None


def benchmark_environment(path):
    values = {}
    with open(path, encoding="utf-8") as source:
        for line in source:
            if line.startswith("Benchmark"):
                break
            key, separator, value = line.rstrip("\n").partition(": ")
            if separator and key in {"goos", "goarch", "cpu"}:
                values[key] = value
    return values


def parse_delta(value):
    match = re.fullmatch(r"([+-]?\d+(?:\.\d+)?)%", value)
    return float(match.group(1)) if match else None


def split_shortname(shortname):
    suite, separator, encoded_case = shortname.partition("-")
    case = unquote(encoded_case) if separator else shortname
    return suite if separator else "", case


def parse_benchstat(path):
    with open(path, newline="", encoding="utf-8") as source:
        rows = list(csv.reader(source))

    benchmarks = []
    index = 0
    while index < len(rows):
        row = rows[index]
        if not row or not row[0].startswith("shortname: "):
            index += 1
            continue

        shortname = row[0].removeprefix("shortname: ")
        index += 1
        while index < len(rows) and not rows[index]:
            index += 1
        if index + 1 >= len(rows):
            raise ValueError(f"missing benchstat headers for {shortname}")

        config_row = rows[index]
        metric_row = rows[index + 1]
        columns = {}
        for config in CONFIGS:
            try:
                columns[config] = config_row.index(config)
            except ValueError as error:
                raise ValueError(f"missing {config} column for {shortname}") from error
        if any(column >= len(metric_row) or metric_row[column] != "sec/op" for column in columns.values()):
            raise ValueError(f"expected sec/op table for {shortname}")

        index += 2
        suite, case = split_shortname(shortname)
        while index < len(rows) and rows[index] and not rows[index][0].startswith("shortname: "):
            values = rows[index]
            index += 1
            if not values or values[0] == "geomean":
                continue

            measurements = {}
            for config in CONFIGS:
                column = columns[config]
                try:
                    measurement = {
                        "value": float(values[column]),
                        "ci": values[column + 1],
                    }
                    if config != "Go":
                        measurement["delta"] = values[column + 2]
                        measurement["deltaPercent"] = parse_delta(values[column + 2])
                        measurement["p"] = values[column + 3]
                except (IndexError, ValueError) as error:
                    raise ValueError(f"invalid {config} result for {shortname}") from error
                measurements[config] = measurement

            benchmarks.append({
                "shortname": shortname,
                "suite": suite,
                "case": case,
                "benchmark": values[0],
                "values": measurements,
            })

    if not benchmarks:
        raise ValueError("benchstat CSV contains no sec/op benchmarks")
    return benchmarks


def main():
    if len(sys.argv) != 4:
        raise SystemExit("usage: report.py BENCHSTAT_CSV OUTPUT_JSON GO_STDOUT")

    csv_path, output_path, go_stdout = sys.argv[1:]
    repository = env("LLGO_PERFORMANCE_REPOSITORY", "GITHUB_REPOSITORY")
    run_id = env("LLGO_PERFORMANCE_RUN_ID", "GITHUB_RUN_ID")
    workflow_url = env("LLGO_PERFORMANCE_WORKFLOW_URL")
    if not workflow_url and repository and run_id:
        workflow_url = f"https://github.com/{repository}/actions/runs/{run_id}"

    document = {
        "schemaVersion": 1,
        "format": "benchstat",
        "run": {
            "id": run_id,
            "attempt": number("LLGO_PERFORMANCE_RUN_ATTEMPT", "GITHUB_RUN_ATTEMPT"),
            "number": number("LLGO_PERFORMANCE_RUN_NUMBER", "GITHUB_RUN_NUMBER"),
            "createdAt": datetime.now(timezone.utc).isoformat().replace("+00:00", "Z"),
            "repository": repository,
            "sourceCommit": env("LLGO_PERFORMANCE_SOURCE_COMMIT", "GITHUB_SHA"),
            "ref": env("LLGO_PERFORMANCE_REF", "GITHUB_REF_NAME"),
            "llgoRepository": env("LLGO_REPOSITORY"),
            "llgoCommit": env("LLGO_COMMIT"),
            "llgoTag": env("LLGO_TAG"),
            "goVersion": env("GO_VERSION"),
            "llvmVersion": env("LLVM_VERSION"),
            "event": env("LLGO_PERFORMANCE_EVENT", "GITHUB_EVENT_NAME"),
            "workflowUrl": workflow_url,
            "runnerOS": env("RUNNER_OS"),
            "runnerArch": env("RUNNER_ARCH"),
            "runnerImage": env("ImageOS"),
            "repetitions": number("LLGO_PERFORMANCE_REPETITIONS"),
            "benchmarkEnvironment": benchmark_environment(go_stdout),
        },
        "configs": list(CONFIGS),
        "metric": "sec/op",
        "benchmarks": parse_benchstat(csv_path),
        "native": {
            "text": "benchstat.txt",
            "csv": "benchstat.csv",
            "rawDir": "raw",
        },
    }

    with open(output_path, "w", encoding="utf-8") as destination:
        json.dump(document, destination, indent=2)
        destination.write("\n")


if __name__ == "__main__":
    main()
