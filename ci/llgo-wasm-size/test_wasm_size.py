import importlib.util
import json
import os
import tempfile
import unittest
from pathlib import Path
from unittest import mock


HERE = Path(__file__).resolve().parent


def load_module(name: str, path: Path):
    spec = importlib.util.spec_from_file_location(name, path)
    module = importlib.util.module_from_spec(spec)
    assert spec.loader is not None
    spec.loader.exec_module(module)
    return module


report = load_module("wasm_size_report", HERE / "report.py")
archive = load_module("wasm_size_archive", HERE / "archive.py")


class WasmSizeTest(unittest.TestCase):
    def test_report_requires_exact_app_set_and_records_three_compilers(self):
        manifest = [
            {"id": "base64", "command": "base64", "source": "base64", "provenance": "repository", "kind": "streaming codec", "description": "Encoding"},
            {"id": "grep", "command": "grep", "source": "grep", "provenance": "repository", "kind": "text search", "description": "Matching"},
        ]
        with mock.patch.dict(os.environ, {"GO_VERSION": "1.26.2", "LLGO_BUILD_GO_VERSION": "1.27.0", "TINYGO_VERSION": "0.41.1"}, clear=True):
            document = report.build_document(manifest, {"base64": (900, 100, 80), "grep": (1200, 200, 600)})
        self.assertEqual(document["target"], {"goos": "wasip1", "goarch": "wasm"})
        self.assertEqual(document["configs"], ["Go", "TinyGo", "LLGo"])
        self.assertTrue(document["protocol"]["sameGoToolchain"])
        self.assertEqual(document["run"]["llgoBuildGoVersion"], "1.27.0")
        self.assertEqual(document["protocol"]["Go"], ["build", "-trimpath", "-ldflags=-s -w"])
        self.assertEqual(document["protocol"]["LLGo"], ["build", "-Oz"])
        self.assertIn("Emscripten wasm-opt", document["protocol"]["LLGoPostLink"])
        self.assertEqual(document["benchmarks"][1]["source"], "grep")
        self.assertEqual(document["benchmarks"][0]["provenance"], "repository")
        self.assertEqual(document["benchmarks"][1]["values"]["LLGo"], 600)
        self.assertEqual(document["benchmarks"][0]["values"]["Go"], 900)
        with self.assertRaisesRegex(ValueError, "missing=.*grep"):
            report.build_document(manifest, {"base64": (900, 100, 80)})

    def test_archive_keys_history_by_llgo_commit(self):
        with tempfile.TemporaryDirectory() as temporary:
            root = Path(temporary)
            run_dir = root / "run"
            pages_dir = root / "pages"
            run_dir.mkdir()
            document = {
                "format": "wasm-file-size",
                "run": {
                    "id": "42",
                    "createdAt": "2026-09-03T00:00:00Z",
                    "llgoRepository": "xgo-dev/llgo",
                    "llgoCommit": "a" * 40,
                    "llgoMainIndex": 7,
                    "llgoBuildGoVersion": "1.27.0",
                    "tinygoVersion": "0.41.1",
                },
            }
            (run_dir / "results.json").write_text(json.dumps(document), encoding="utf-8")
            (run_dir / "summary.md").write_text("summary\n", encoding="utf-8")
            (run_dir / "sizes.tsv").write_text(
                "app\tgo_bytes\ttinygo_bytes\tllgo_bytes\nbase64\t100\t10\t20\n",
                encoding="utf-8",
            )
            key = archive.archive(run_dir, pages_dir)
            self.assertEqual(key, "a" * 40)
            index = json.loads((pages_dir / "data" / "wasm" / "index.json").read_text(encoding="utf-8"))
            self.assertEqual(index["runs"][0]["path"], f"wasm/runs/{'a' * 40}/results.json")
            self.assertEqual(index["runs"][0]["tinygoVersion"], "0.41.1")
            self.assertEqual(index["runs"][0]["llgoBuildGoVersion"], "1.27.0")


if __name__ == "__main__":
    unittest.main()
