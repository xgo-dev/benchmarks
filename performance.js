const performanceState = {
  index: null,
  runs: new Map(),
};

const performanceDom = {
  status: document.querySelector("#performance-status"),
  release: document.querySelector("#performance-release"),
  go: document.querySelector("#performance-go"),
  environment: document.querySelector("#performance-environment"),
  protocol: document.querySelector("#performance-protocol"),
  run: document.querySelector("#performance-run"),
  meta: document.querySelector("#performance-meta"),
  workflow: document.querySelector("#performance-workflow"),
  text: document.querySelector("#performance-text"),
  csv: document.querySelector("#performance-csv"),
  table: document.querySelector("#performance-table"),
};

function performanceEscape(value) {
  return String(value == null ? "" : value).replace(/[&<>"']/g, function (character) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character];
  });
}

function performanceDate(value) {
  if (!value) return "unknown time";
  return new Date(value).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });
}

function performanceSeconds(value) {
  const seconds = Number(value);
  if (!Number.isFinite(seconds)) return "—";
  const absolute = Math.abs(seconds);
  if (absolute < 1e-6) return (seconds * 1e9).toFixed(2).replace(/\.00$/, "") + " ns";
  if (absolute < 1e-3) return (seconds * 1e6).toFixed(2).replace(/\.00$/, "") + " µs";
  if (absolute < 1) return (seconds * 1e3).toFixed(2).replace(/\.00$/, "") + " ms";
  return seconds.toFixed(3).replace(/\.000$/, "") + " s";
}

function performanceDeltaClass(measurement) {
  const delta = Number(measurement && measurement.deltaPercent);
  if (!Number.isFinite(delta)) return "flat";
  return delta < 0 ? "good" : delta > 0 ? "bad" : "flat";
}

function performanceMeasurement(measurement) {
  if (!measurement) return '<span class="missing">—</span>';
  return "<strong>" + performanceEscape(performanceSeconds(measurement.value)) + "</strong>" +
    '<span class="secondary-value">± ' + performanceEscape(measurement.ci || "—") + "</span>";
}

function performanceDelta(measurement) {
  if (!measurement) return '<span class="missing">—</span>';
  return '<strong class="' + performanceDeltaClass(measurement) + '">' +
    performanceEscape(measurement.delta || "—") + "</strong>" +
    '<span class="secondary-value">' + performanceEscape(measurement.p || "") + "</span>";
}

function performanceSafeUrl(value) {
  const url = String(value || "");
  return /^https:\/\/github\.com\/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+\/(?:actions\/runs\/[0-9]+|releases\/tag\/.+|commit\/[0-9a-fA-F]{40})$/.test(url) ? url : "";
}

function performanceSetLink(element, href) {
  if (!href) {
    element.hidden = true;
    element.removeAttribute("href");
    return;
  }
  element.hidden = false;
  element.href = href;
}

function performanceReleaseLink(run) {
  const repository = String(run.llgoRepository || "xgo-dev/llgo");
  const tag = String(run.llgoTag || "");
  if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repository) || !tag) return "";
  return "https://github.com/" + repository + "/releases/tag/" + encodeURIComponent(tag);
}

function performanceRunUrl(meta, path) {
  const version = [meta.id || meta.key, meta.attempt || 1, meta.createdAt || ""].join("-");
  return "data/" + path + "?v=" + encodeURIComponent(version);
}

async function performanceLoadRun(meta) {
  if (!performanceState.runs.has(meta.key)) {
    performanceState.runs.set(meta.key, (async function () {
      const response = await fetch(performanceRunUrl(meta, meta.path));
      if (!response.ok) throw new Error("Cannot load " + meta.path);
      return response.json();
    })());
  }
  return performanceState.runs.get(meta.key);
}

function performanceRenderTable(document) {
  const rows = (document.benchmarks || []).map(function (entry) {
    const values = entry.values || {};
    return "<tr>" +
      '<th class="performance-benchmark-cell" scope="row"><span class="benchmark-name">' + performanceEscape(entry.suite || entry.benchmark) +
      '</span><span class="config-name">' + performanceEscape(entry.case || entry.benchmark) + "</span></th>" +
      "<td>" + performanceMeasurement(values.Go) + "</td>" +
      "<td>" + performanceMeasurement(values.LLGo) + "</td>" +
      '<td class="performance-delta">' + performanceDelta(values.LLGo) + "</td>" +
      "<td>" + performanceMeasurement(values.LLGoFullLTO) + "</td>" +
      '<td class="performance-delta">' + performanceDelta(values.LLGoFullLTO) + "</td>" +
      "</tr>";
  }).join("");

  performanceDom.table.innerHTML =
    "<thead><tr>" +
      '<th class="performance-benchmark-cell" rowspan="2">Benchmark</th>' +
      '<th rowspan="2">Go<br><span>sec/op</span></th>' +
      '<th colspan="2">LLGo</th>' +
      '<th colspan="2">LLGo full LTO</th>' +
    "</tr><tr>" +
      "<th>sec/op</th><th>vs Go</th><th>sec/op</th><th>vs Go</th>" +
    "</tr></thead><tbody>" + rows + "</tbody>";
}

async function performanceRender(meta) {
  performanceDom.status.classList.remove("error");
  performanceDom.status.textContent = "Loading " + (meta.llgoTag || meta.key) + "…";
  const document = await performanceLoadRun(meta);
  const run = document.run || {};
  const environment = run.benchmarkEnvironment || {};
  const tag = run.llgoTag || meta.llgoTag || "—";
  const releaseUrl = performanceSafeUrl(performanceReleaseLink(run));
  performanceDom.release.innerHTML = releaseUrl
    ? '<a href="' + performanceEscape(releaseUrl) + '">' + performanceEscape(tag) + "</a>"
    : performanceEscape(tag);
  performanceDom.go.textContent = run.goVersion ? "Go " + run.goVersion : "—";
  performanceDom.environment.textContent = [environment.cpu, [environment.goos, environment.goarch].filter(Boolean).join("/")].filter(Boolean).join(" · ") || "—";
  performanceDom.protocol.textContent = (run.repetitions || 10) + " samples per configuration";
  performanceDom.meta.textContent = "Published " + performanceDate(run.createdAt);

  const basePath = meta.path.slice(0, meta.path.lastIndexOf("/") + 1);
  performanceSetLink(performanceDom.workflow, performanceSafeUrl(run.workflowUrl));
  performanceSetLink(performanceDom.text, performanceRunUrl(meta, basePath + "benchstat.txt"));
  performanceSetLink(performanceDom.csv, performanceRunUrl(meta, basePath + "benchstat.csv"));
  performanceRenderTable(document);
  performanceDom.status.textContent = (document.benchmarks || []).length + " benchmarks · " + tag;
}

async function performanceStart() {
  try {
    const response = await fetch("data/performance/index.json", { cache: "no-store" });
    if (response.status === 404) {
      performanceDom.status.textContent = "No published results yet";
      performanceDom.run.innerHTML = '<option value="">Waiting for the first LLGo release</option>';
      performanceDom.run.disabled = true;
      performanceDom.table.innerHTML = '<tbody><tr><td class="empty-state">The table will appear after the next tagged LLGo performance run.</td></tr></tbody>';
      return;
    }
    if (!response.ok) throw new Error("Cannot load performance history");
    performanceState.index = await response.json();
    const runs = performanceState.index.runs || [];
    if (!runs.length) throw new Error("Performance history is empty");
    performanceDom.run.innerHTML = runs.map(function (run) {
      const label = (run.llgoTag || run.key) + " · " + performanceDate(run.createdAt);
      return '<option value="' + performanceEscape(run.key) + '">' + performanceEscape(label) + "</option>";
    }).join("");
    performanceDom.run.addEventListener("change", function () {
      const selected = runs.find(function (run) { return run.key === performanceDom.run.value; });
      performanceRender(selected).catch(performanceFail);
    });
    await performanceRender(runs[0]);
  } catch (error) {
    performanceFail(error);
  }
}

function performanceFail(error) {
  performanceDom.status.classList.add("error");
  performanceDom.status.textContent = error && error.message ? error.message : "Cannot load performance results";
}

performanceStart();
