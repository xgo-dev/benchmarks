import tomllib
import unittest
from collections import Counter
from pathlib import Path


class CompatibilityManifestTest(unittest.TestCase):
    def test_manifest_contains_exactly_200_unique_test_packages(self):
        repository = Path(__file__).resolve().parents[2]
        manifest = repository / "cmd/bent/configs/benchmarks-llgo-compatibility.toml"
        projects = Path(__file__).with_name("projects.toml")
        with manifest.open("rb") as source:
            entries = tomllib.load(source)["Benchmarks"]
        with projects.open("rb") as source:
            quotas = tomllib.load(source)["Projects"]

        self.assertEqual(len(entries), 200)
        self.assertEqual(sum(project["Limit"] for project in quotas), 200)
        self.assertEqual(len({entry["Name"] for entry in entries}), 200)
        self.assertEqual(len({entry["Repo"] for entry in entries}), 200)
        self.assertTrue(all(entry["Standalone"] for entry in entries))
        self.assertTrue(all(entry["Version"].startswith("@v") for entry in entries))
        self.assertEqual(Counter(entry["Project"] for entry in entries)["etcd"], 26)
        excluded = {
            import_path
            for project in quotas
            for import_path in project.get("Exclude", [])
        }
        self.assertTrue(excluded.isdisjoint(entry["Repo"] for entry in entries))


if __name__ == "__main__":
    unittest.main()
