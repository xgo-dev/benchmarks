import importlib.util
import json
import tempfile
import unittest
from pathlib import Path


SPEC = importlib.util.spec_from_file_location(
    "compatibility_report", Path(__file__).with_name("report.py")
)
report = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(report)


def event(action, test="", output="", elapsed=None):
    value = {"Action": action, "Package": "fixture"}
    if test:
        value["Test"] = test
    if output:
        value["Output"] = output
    if elapsed is not None:
        value["Elapsed"] = elapsed
    return json.dumps(value)


class CompatibilityReportTest(unittest.TestCase):
    def test_groups_projects_and_classifies_compile_and_test_gaps(self):
        with tempfile.TemporaryDirectory() as temporary:
            root = Path(temporary)
            (root / "bench").mkdir()
            (root / "benchmarks-llgo-compatibility.toml").write_text(
                """
[[Benchmarks]]
Name = "one"
Project = "demo"
Repo = "example.com/one"
Version = "@v1.0.0"
[[Benchmarks]]
Name = "two"
Project = "demo"
Repo = "example.com/two"
Version = "@v1.0.0"
[[Benchmarks]]
Name = "three"
Project = "other"
Repo = "example.com/three"
Version = "@v2.0.0"
""",
                encoding="utf-8",
            )
            go_lines = []
            for name in ("one", "two", "three"):
                go_lines.extend([
                    f"shortname: {name}",
                    "toolchain: Go",
                    event("pass", "TestOK"),
                    event("pass", elapsed=0.1),
                ])
            (root / "bench" / "run.Go.stdout").write_text("\n".join(go_lines), encoding="utf-8")
            llgo_lines = [
                "shortname: one",
                "toolchain: LLGo",
                event("pass", "TestOK"),
                event("pass", elapsed=0.2),
                "shortname: three",
                "toolchain: LLGo",
                event("output", "TestBroken", "wrong value\n"),
                event("fail", "TestBroken"),
                event("fail", elapsed=0.3),
            ]
            (root / "bench" / "run.LLGo.stdout").write_text("\n".join(llgo_lines), encoding="utf-8")

            document = report.build_document(str(root))
            packages = {
                package["name"]: package
                for project in document["projects"]
                for package in project["packages"]
            }
            self.assertEqual(packages["one"]["classification"], "compatible")
            self.assertEqual(packages["two"]["classification"], "compile-gap")
            self.assertEqual(packages["three"]["classification"], "test-failure")
            self.assertEqual(packages["three"]["LLGo"]["failedTests"][0]["name"], "TestBroken")
            self.assertEqual(document["summary"]["projectsCompatible"], 0)
            self.assertEqual(document["summary"]["packagesCompatible"], 1)

            (root / "selected-packages.txt").write_text("one\n", encoding="utf-8")
            selected = report.build_document(str(root))
            self.assertEqual(selected["summary"]["projectsTotal"], 1)
            self.assertEqual(selected["summary"]["packagesTotal"], 1)
            self.assertEqual(selected["summary"]["packagesCompatible"], 1)


if __name__ == "__main__":
    unittest.main()
