#!/usr/bin/env python3
import csv
import glob
import os
import sys
from collections import defaultdict


CONFIGS = [
    "Go",
    "LLGoNoLTO",
    "LLGoFullLTONoGlobalDCE",
    "LLGoFullLTOGlobalDCE",
    "LLGoFullLTOGlobalDCEPlugin",
]


def read_rows(bench_dir):
    rows = []
    for config in CONFIGS:
        paths = sorted(glob.glob(os.path.join(bench_dir, "*." + config + ".build")))
        for path in paths:
            current_config = config
            with open(path, encoding="utf-8") as f:
                for line in f:
                    stripped = line.strip()
                    if stripped.startswith("toolchain: "):
                        current_config = stripped.split(":", 1)[1].strip() or config
                        continue
                    fields = stripped.split()
                    if len(fields) < 8 or not fields[0].startswith("Benchmark"):
                        continue
                    if fields[3] != "build-real-ns/op" or fields[5] != "build-user-ns/op" or fields[7] != "build-sys-ns/op":
                        continue
                    try:
                        real_ns = int(fields[2])
                        user_ns = int(fields[4])
                        sys_ns = int(fields[6])
                    except ValueError:
                        continue
                    rows.append({
                        "benchmark": fields[0][len("Benchmark"):],
                        "configuration": current_config,
                        "real_ns": real_ns,
                        "user_ns": user_ns,
                        "sys_ns": sys_ns,
                    })
    return sorted(rows, key=lambda row: row["real_ns"], reverse=True)


def format_ms(nanoseconds):
    return f"{nanoseconds / 1_000_000:.1f} ms"


def write_tsv(path, rows):
    with open(path, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f, delimiter="\t", lineterminator="\n")
        writer.writerow(["benchmark", "configuration", "real-ns", "user-ns", "sys-ns"])
        for row in rows:
            writer.writerow([row["benchmark"], row["configuration"], row["real_ns"], row["user_ns"], row["sys_ns"]])


def write_markdown(path, rows):
    with open(path, "w", encoding="utf-8") as f:
        f.write("## Build timing diagnostics\n\n")
        f.write("Native Bent `-report-build-time` records, sorted by real time (slowest first).\n\n")
        f.write("| Benchmark | Configuration | Real | User | Sys |\n")
        f.write("| --- | --- | ---: | ---: | ---: |\n")
        if not rows:
            f.write("| no records | — | — | — | — |\n")
            return
        for row in rows:
            f.write("| {benchmark} | {configuration} | {real} | {user} | {sys} |\n".format(
                benchmark=row["benchmark"],
                configuration=row["configuration"],
                real=format_ms(row["real_ns"]),
                user=format_ms(row["user_ns"]),
                sys=format_ms(row["sys_ns"]),
            ))
        totals = defaultdict(int)
        counts = defaultdict(int)
        for row in rows:
            totals[row["configuration"]] += row["real_ns"]
            counts[row["configuration"]] += 1
        f.write("\n### Configuration totals\n\n")
        f.write("| Configuration | Total real | Cases |\n")
        f.write("| --- | ---: | ---: |\n")
        for config in sorted(totals, key=totals.get, reverse=True):
            f.write("| {config} | {total} | {count} |\n".format(
                config=config,
                total=format_ms(totals[config]),
                count=counts[config],
            ))
        f.write("\nDependency download details are in `download-timings.log`.\n")


def main():
    if len(sys.argv) != 4:
        raise SystemExit("usage: timing-report.py BENCH_DIR BUILD_TSV MARKDOWN")
    rows = read_rows(sys.argv[1])
    write_tsv(sys.argv[2], rows)
    write_markdown(sys.argv[3], rows)


if __name__ == "__main__":
    main()
