const state = {
  index: null,
  runs: new Map(),
  benchmarkNames: [],
  activeBenchmarks: new Set(),
  activeConfigs: new Set(),
  page: 1,
  pageSize: 20,
  query: "",
};

const newerSelect = document.querySelector("#newer-run");
const baselineSelect = document.querySelector("#baseline-run");
const status = document.querySelector("#status");
const comparisonGrid = document.querySelector("#comparison-grid");
const pagination = document.querySelector("#pagination");
const filterInput = document.querySelector("#commit-filter");
const pageSizeSelect = document.querySelector("#page-size");
const historyMetric = document.querySelector("#history-metric");
const historyRange = document.querySelector("#history-range");

const configs = [
  "Go",
  "LLGoNoLTO",
  "LLGoFullLTONoGlobalDCE",
  "LLGoFullLTOGlobalDCE",
  "LLGoFullLTOGlobalDCEPlugin",
];

const configLabels = {
  Go: "Go",
  LLGoNoLTO: "LLGo · no LTO",
  LLGoFullLTONoGlobalDCE: "LLGo · full LTO, no GlobalDCE",
  LLGoFullLTOGlobalDCE: "LLGo · full LTO + GlobalDCE",
  LLGoFullLTOGlobalDCEPlugin: "LLGo · full LTO + GlobalDCE + plugin",
};

const compactConfigLabels = {
  Go: "Go",
  LLGoNoLTO: "No LTO",
  LLGoFullLTONoGlobalDCE: "Full LTO",
  LLGoFullLTOGlobalDCE: "LTO + DCE",
  LLGoFullLTOGlobalDCEPlugin: "LTO + DCE + P",
};

const seriesColors = ["#2457d6", "#7c3aed", "#d97706", "#0f766e", "#c92a2a"];
const seriesDashes = ["", "7 3", "2 3"];

function escapeHtml(value) {
  return String(value == null ? "" : value).replace(/[&<>"']/g, function (char) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char];
  });
}

function formatBytes(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return "—";
  const units = ["B", "KiB", "MiB", "GiB"];
  let scaled = Math.abs(number);
  let unit = 0;
  while (scaled >= 1024 && unit < units.length - 1) {
    scaled /= 1024;
    unit++;
  }
  return (number < 0 ? "-" : "") + scaled.toFixed(3) + " " + units[unit];
}

function formatPercent(value, digits) {
  if (!Number.isFinite(value)) return "—";
  return (value > 0 ? "+" : "") + value.toFixed(digits == null ? 3 : digits) + "%";
}

function percentDelta(value, base) {
  if (!Number.isFinite(Number(value)) || !Number.isFinite(Number(base)) || Number(base) === 0) return null;
  return ((Number(value) - Number(base)) / Number(base)) * 100;
}

function deltaClass(delta) {
  return delta > 0 ? "bad" : delta < 0 ? "good" : "flat";
}

function shortSha(value) {
  return value ? String(value).slice(0, 10) : "—";
}

function dateLabel(value) {
  if (!value) return "unknown time";
  return new Date(value).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });
}

function runNumber(run) {
  return run.number == null ? run.key : "#" + run.number;
}

function commitLabel(run) {
  return shortSha(run.llgoCommit || run.sourceCommit || run.key);
}

function runLabel(run) {
  return commitLabel(run) + " · " + dateLabel(run.createdAt);
}

function benchmarkMap(document) {
  return new Map((document.benchmarks || []).map(function (item) { return [item.name, item]; }));
}

async function loadRun(meta) {
  if (!meta) return null;
  if (!state.runs.has(meta.key)) {
    const response = await fetch("data/" + meta.path, { cache: "no-store" });
    if (!response.ok) throw new Error("Cannot load " + meta.path);
    state.runs.set(meta.key, await response.json());
  }
  return state.runs.get(meta.key);
}

function findMeta(key) {
  return state.index.runs.find(function (run) { return run.key === key; });
}

function selection() {
  const baselineMeta = findMeta(baselineSelect.value);
  const newerMeta = findMeta(newerSelect.value);
  return { baselineMeta: baselineMeta, newerMeta: newerMeta };
}

function fillRunSelects(runs) {
  function options() {
    return runs.map(function (run) {
      return '<option value="' + escapeHtml(run.key) + '">' + escapeHtml(runLabel(run)) + "</option>";
    }).join("");
  }
  baselineSelect.innerHTML = options();
  newerSelect.innerHTML = options();
  baselineSelect.value = runs.length > 1 ? runs[1].key : runs[0].key;
  newerSelect.value = runs[0].key;
}

function renderRunMeta(baseline, newer) {
  const item = function (label, run, extra) {
    if (!run) return "";
    const workflow = run.workflowUrl
      ? '<a href="' + escapeHtml(run.workflowUrl) + '">workflow ' + escapeHtml(runNumber(run)) + "</a>"
      : "run " + escapeHtml(runNumber(run));
    return '<div><span class="label">' + label + "</span><strong><code>" + escapeHtml(commitLabel(run)) + "</code></strong>" +
      '<span class="meta-detail">' + escapeHtml(dateLabel(run.createdAt)) + (extra ? " · " + extra : "") + "</span>" +
      '<span class="meta-detail">' + workflow + "</span></div>";
  };
  document.querySelector("#run-meta").innerHTML =
    item("A · baseline", baseline, baseline ? escapeHtml(baseline.ref || "—") : "") +
    item("B · selected", newer, newer ? escapeHtml(newer.ref || "—") : "") +
    '<div><span class="label">Toolchain</span><strong>' + escapeHtml(newer && newer.goVersion || "—") + " / LLVM " + escapeHtml(newer && newer.llvmVersion || "—") + "</strong>" +
      '<span class="meta-detail">Each LLGo cell remains relative to Go from the same commit.</span></div>';
}

function filteredRuns() {
  const query = state.query.trim().toLowerCase();
  if (!query) return state.index.runs;
  return state.index.runs.filter(function (run) {
    return [commitLabel(run), run.llgoCommit, run.sourceCommit, run.ref, run.createdAt, run.key]
      .some(function (value) { return String(value || "").toLowerCase().includes(query); });
  });
}

function cellHtml(benchmark, config, baselineBenchmark, showComparison) {
  if (!benchmark || !benchmark.values || benchmark.values[config] == null) return '<td class="matrix-cell missing">—</td>';
  const value = Number(benchmark.values[config]);
  const goValue = Number(benchmark.values.Go);
  const relative = config === "Go"
    ? '<span class="flat reference">reference</span>'
    : '<span class="' + deltaClass(percentDelta(value, goValue)) + '">' + formatPercent(percentDelta(value, goValue), 1) + " vs Go</span>";
  const oldValue = baselineBenchmark && baselineBenchmark.values ? Number(baselineBenchmark.values[config]) : NaN;
  const comparison = showComparison && Number.isFinite(oldValue)
    ? '<span class="selected-delta ' + deltaClass(percentDelta(value, oldValue)) + '">Δ A ' + formatPercent(percentDelta(value, oldValue), 1) + "</span>"
    : "";
  return '<td class="matrix-cell"><strong>' + formatBytes(value) + "</strong><span class=\"go-delta\">" + relative + "</span>" + comparison + "</td>";
}

function pageNumbers(page, pageCount) {
  const values = new Set([1, pageCount, page - 1, page, page + 1]);
  return Array.from(values).filter(function (value) { return value >= 1 && value <= pageCount; }).sort(function (a, b) { return a - b; });
}

function renderPagination(runCount) {
  const pageCount = Math.max(1, Math.ceil(runCount / state.pageSize));
  state.page = Math.min(state.page, pageCount);
  const numbers = pageNumbers(state.page, pageCount);
  let previous = 0;
  const pageButtons = numbers.map(function (number) {
    const gap = number - previous > 1 ? '<span class="page-gap">…</span>' : "";
    previous = number;
    return gap + '<button type="button" data-page="' + number + '" class="' + (number === state.page ? "active" : "") + '" aria-current="' + (number === state.page ? "page" : "false") + '">' + number + "</button>";
  }).join("");
  pagination.innerHTML = '<button type="button" data-page="' + Math.max(1, state.page - 1) + '" ' + (state.page === 1 ? "disabled" : "") + ">Previous</button>" +
    pageButtons + '<button type="button" data-page="' + Math.min(pageCount, state.page + 1) + '" ' + (state.page === pageCount ? "disabled" : "") + ">Next</button>";
}

async function renderComparison() {
  const selected = selection();
  const baseline = await loadRun(selected.baselineMeta);
  const newer = await loadRun(selected.newerMeta);
  renderRunMeta(selected.baselineMeta, selected.newerMeta);

  const runs = filteredRuns();
  renderPagination(runs.length);
  const start = (state.page - 1) * state.pageSize;
  const pageRuns = runs.slice(start, start + state.pageSize);
  const documents = await Promise.all(pageRuns.map(loadRun));
  const baselineByName = benchmarkMap(baseline || {});
  const columns = state.benchmarkNames.length ? state.benchmarkNames : [];
  const span = columns.length * configs.length;
  const headerGroups = columns.map(function (name) {
    return '<th scope="colgroup" colspan="' + configs.length + '">' + escapeHtml(name) + "</th>";
  }).join("");
  const headerModes = columns.map(function () {
    return configs.map(function (config) {
      return '<th scope="col" title="' + escapeHtml(configLabels[config]) + '">' + escapeHtml(compactConfigLabels[config]) + "</th>";
    }).join("");
  }).join("");

  const rows = documents.map(function (document, index) {
    const meta = pageRuns[index];
    const byName = benchmarkMap(document || {});
    const isBaseline = selected.baselineMeta && meta.key === selected.baselineMeta.key;
    const isNewer = selected.newerMeta && meta.key === selected.newerMeta.key;
    const rowClass = (isBaseline ? " baseline-row" : "") + (isNewer ? " selected-row" : "");
    const roleButtons = '<div class="commit-picks"><button type="button" data-select-role="baseline" data-run-key="' + escapeHtml(meta.key) + '" class="' + (isBaseline ? "active" : "") + '" aria-label="Set ' + escapeHtml(commitLabel(meta)) + ' as baseline">A</button>' +
      '<button type="button" data-select-role="newer" data-run-key="' + escapeHtml(meta.key) + '" class="' + (isNewer ? "active" : "") + '" aria-label="Set ' + escapeHtml(commitLabel(meta)) + ' as selected commit">B</button></div>';
    const values = columns.map(function (name) {
      const benchmark = byName.get(name);
      const baselineBenchmark = baselineByName.get(name);
      return configs.map(function (config) {
        return cellHtml(benchmark, config, baselineBenchmark, isNewer && !isBaseline);
      }).join("");
    }).join("");
    const workflow = meta.workflowUrl ? '<a href="' + escapeHtml(meta.workflowUrl) + '"><code>' + escapeHtml(commitLabel(meta)) + "</code></a>" : '<code>' + escapeHtml(commitLabel(meta)) + "</code>";
    return '<tr class="' + rowClass.trim() + '"><td class="sticky pick-cell">' + roleButtons + '</td><th scope="row" class="sticky commit-cell">' + workflow + "</th>" +
      '<td class="sticky date-cell">' + escapeHtml(dateLabel(meta.createdAt)) + '</td><td class="sticky branch-cell">' + escapeHtml(meta.ref || "—") + "</td>" + values + "</tr>";
  }).join("");

  comparisonGrid.style.minWidth = (560 + span * 124) + "px";
  comparisonGrid.innerHTML = '<thead><tr><th class="sticky pick-cell" rowspan="2">Pick</th><th class="sticky commit-cell" rowspan="2">Commit</th><th class="sticky date-cell" rowspan="2">Created</th><th class="sticky branch-cell" rowspan="2">Branch</th>' + headerGroups + '</tr><tr>' + headerModes + "</tr></thead><tbody>" +
    (rows || '<tr><td colspan="' + (4 + span) + '" class="empty-state">No commits match this filter.</td></tr>') + "</tbody>";
  document.querySelector("#commit-count").textContent = runs.length + " commit" + (runs.length === 1 ? "" : "s") + " · showing " + (runs.length ? (start + 1) + "–" + Math.min(start + state.pageSize, runs.length) : "0");
  document.querySelector("#table-note").textContent = "A/B selections persist while you page or filter commits; use the horizontal scrollbar for benchmark columns.";
}

function renderChoiceControls() {
  const benchmarks = document.querySelector("#benchmark-filter");
  benchmarks.innerHTML = state.benchmarkNames.map(function (name) {
    return '<button type="button" class="choice-button ' + (state.activeBenchmarks.has(name) ? "active" : "") + '" data-benchmark="' + escapeHtml(name) + '" aria-pressed="' + state.activeBenchmarks.has(name) + '">' + escapeHtml(name) + "</button>";
  }).join("");
  const configFilter = document.querySelector("#config-filter");
  configFilter.innerHTML = configs.map(function (config, index) {
    return '<button type="button" class="choice-button config-choice ' + (state.activeConfigs.has(config) ? "active" : "") + '" style="--series:' + seriesColors[index] + '" data-config="' + escapeHtml(config) + '" aria-pressed="' + state.activeConfigs.has(config) + '">' + escapeHtml(compactConfigLabels[config]) + "</button>";
  }).join("");
}

function metricValue(documents, benchmarkName, config, metric) {
  let previous = null;
  return documents.map(function (document, index) {
    const benchmark = benchmarkMap(document).get(benchmarkName);
    const value = benchmark && benchmark.values ? Number(benchmark.values[config]) : NaN;
    const goValue = benchmark && benchmark.values ? Number(benchmark.values.Go) : NaN;
    let plotted = value;
    if (metric === "vs-go") plotted = config === "Go" ? 0 : percentDelta(value, goValue);
    if (metric === "commit-delta") {
      plotted = previous == null ? NaN : percentDelta(value, previous);
      previous = Number.isFinite(value) ? value : previous;
    }
    return { index: index, value: Number(plotted), document: document, raw: value, go: goValue };
  }).filter(function (point) { return Number.isFinite(point.value); });
}

function chartMetricLabel(metric) {
  if (metric === "vs-go") return "vs Go (%)";
  if (metric === "commit-delta") return "change from previous commit (%)";
  return "binary size";
}

function chartFormat(value, metric) {
  return metric === "absolute" ? formatBytes(value) : formatPercent(value, 1);
}

function chartPath(points, x, y) {
  return points.map(function (point, index) { return (index === 0 ? "M" : "L") + x(point.index).toFixed(2) + " " + y(point.value).toFixed(2); }).join(" ");
}

function runValue(document, benchmarkName, config) {
  const benchmark = benchmarkMap(document || {}).get(benchmarkName);
  return benchmark && benchmark.values ? Number(benchmark.values[config]) : NaN;
}

function renderInspector(baseline, newer) {
  const name = Array.from(state.activeBenchmarks)[0];
  const config = Array.from(state.activeConfigs)[0];
  const inspector = document.querySelector("#history-inspector");
  if (!name || !config || !newer) {
    inspector.innerHTML = '<p class="muted">Select at least one benchmark and build mode to inspect a series.</p>';
    return;
  }
  const newerValue = runValue(newer, name, config);
  const newerGo = runValue(newer, name, "Go");
  const baselineValue = runValue(baseline, name, config);
  const relative = config === "Go" ? 0 : percentDelta(newerValue, newerGo);
  const comparison = percentDelta(newerValue, baselineValue);
  inspector.innerHTML = '<p class="eyebrow">Selected series</p><h3>' + escapeHtml(name) + " · " + escapeHtml(compactConfigLabels[config]) + '</h3><strong class="inspector-value">' + formatBytes(newerValue) + "</strong>" +
    '<p class="inspector-delta ' + deltaClass(relative) + '">' + (config === "Go" ? "Go reference" : formatPercent(relative, 1) + " vs Go") + "</p>" +
    '<dl><div><dt>A → B</dt><dd class="' + deltaClass(comparison) + '">' + formatPercent(comparison, 1) + "</dd></div><div><dt>Baseline</dt><dd><code>" + escapeHtml(commitLabel(baseline.run || {})) + "</code></dd></div><div><dt>Selected</dt><dd><code>" + escapeHtml(commitLabel(newer.run || {})) + "</code></dd></div></dl>";
}

async function renderHistory() {
  const range = Number(historyRange.value);
  const metas = (range ? state.index.runs.slice(0, range) : state.index.runs).slice().reverse();
  const documents = await Promise.all(metas.map(loadRun));
  const metric = historyMetric.value;
  const series = [];
  Array.from(state.activeBenchmarks).forEach(function (name, benchmarkIndex) {
    Array.from(state.activeConfigs).forEach(function (config) {
      const points = metricValue(documents, name, config, metric);
      if (points.length) series.push({ name: name, config: config, benchmarkIndex: benchmarkIndex, points: points });
    });
  });
  const chart = document.querySelector("#history-chart");
  const selected = selection();
  const baseline = await loadRun(selected.baselineMeta);
  const newer = await loadRun(selected.newerMeta);
  renderInspector(baseline, newer);
  if (!series.length || !documents.length) {
    chart.innerHTML = '<p class="muted">No matching history is available for this selection.</p>';
    return;
  }
  const values = series.flatMap(function (item) { return item.points.map(function (point) { return point.value; }); });
  const width = 1080;
  const height = 380;
  const left = 72;
  const right = 22;
  const top = 30;
  const bottom = 58;
  const minimum = Math.min.apply(null, values);
  const maximum = Math.max.apply(null, values);
  const spread = maximum === minimum ? Math.max(1, Math.abs(maximum) * 0.1) : maximum - minimum;
  const yMin = metric === "absolute" ? Math.max(0, minimum - spread * 0.08) : minimum - spread * 0.12;
  const yMax = maximum + spread * 0.12;
  const x = function (index) { return documents.length === 1 ? (left + width - right) / 2 : left + index * (width - left - right) / (documents.length - 1); };
  const y = function (value) { return top + (yMax - value) * (height - top - bottom) / (yMax - yMin); };
  const grid = [0, 0.25, 0.5, 0.75, 1].map(function (ratio) {
    const value = yMin + (yMax - yMin) * ratio;
    const position = y(value);
    return '<line class="chart-grid-line" x1="' + left + '" x2="' + (width - right) + '" y1="' + position + '" y2="' + position + '"></line><text class="chart-axis-label" x="3" y="' + (position + 3) + '">' + escapeHtml(chartFormat(value, metric)) + "</text>";
  }).join("");
  const markers = [[selected.baselineMeta, "A"], [selected.newerMeta, "B"]].map(function (item) {
    const index = metas.findIndex(function (meta) { return item[0] && meta.key === item[0].key; });
    if (index < 0) return "";
    const position = x(index);
    return '<line class="selection-marker" x1="' + position + '" x2="' + position + '" y1="' + top + '" y2="' + (height - bottom) + '"></line><text class="marker-label" text-anchor="middle" x="' + position + '" y="18">' + item[1] + "</text>";
  }).join("");
  const lines = series.map(function (item) {
    const configIndex = configs.indexOf(item.config);
    const color = seriesColors[configIndex];
    const dash = seriesDashes[item.benchmarkIndex % seriesDashes.length];
    const label = item.name + " · " + compactConfigLabels[item.config];
    return '<path class="history-series" d="' + chartPath(item.points, x, y) + '" fill="none" stroke="' + color + '" stroke-dasharray="' + dash + '"></path>' + item.points.map(function (point) {
      return '<circle cx="' + x(point.index) + '" cy="' + y(point.value) + '" r="3.4" fill="' + color + '"><title>' + escapeHtml(label + " · " + commitLabel(point.document.run) + ": " + chartFormat(point.value, metric)) + "</title></circle>";
    }).join("");
  }).join("");
  const labels = documents.map(function (document, index) {
    if (documents.length > 12 && index % Math.ceil(documents.length / 10) !== 0 && index !== documents.length - 1) return "";
    return '<text class="chart-axis-label" text-anchor="middle" x="' + x(index) + '" y="' + (height - 22) + '">' + escapeHtml(commitLabel(document.run)) + "</text>";
  }).join("");
  const legend = series.map(function (item) {
    const configIndex = configs.indexOf(item.config);
    return '<span class="history-legend-item"><i style="--series:' + seriesColors[configIndex] + '; --dash:' + seriesDashes[item.benchmarkIndex % seriesDashes.length] + '"></i>' + escapeHtml(item.name + " · " + compactConfigLabels[item.config]) + "</span>";
  }).join("");
  chart.innerHTML = '<div class="chart-title"><span>' + escapeHtml(chartMetricLabel(metric)) + '</span><span>' + documents.length + " commits</span></div><svg viewBox=\"0 0 " + width + " " + height + '\" role="img" aria-label="Selected binary-size history">' + grid + markers + lines + labels + '</svg><div class="history-legend">' + legend + "</div>";
}

async function refresh() {
  try {
    await Promise.all([renderComparison(), renderHistory()]);
    status.textContent = state.index.runs.length + " published commit" + (state.index.runs.length === 1 ? "" : "s");
    status.className = "status";
  } catch (error) {
    status.textContent = error.message;
    status.className = "status error";
  }
}

function attachEvents() {
  newerSelect.addEventListener("change", refresh);
  baselineSelect.addEventListener("change", function () {
    if (baselineSelect.value === newerSelect.value && state.index.runs.length > 1) newerSelect.value = state.index.runs[0].key === baselineSelect.value ? state.index.runs[1].key : state.index.runs[0].key;
    refresh();
  });
  filterInput.addEventListener("input", function () { state.query = filterInput.value; state.page = 1; renderComparison(); });
  pageSizeSelect.addEventListener("change", function () { state.pageSize = Number(pageSizeSelect.value); state.page = 1; renderComparison(); });
  pagination.addEventListener("click", function (event) {
    const button = event.target.closest("button[data-page]");
    if (!button || button.disabled) return;
    state.page = Number(button.dataset.page);
    renderComparison();
  });
  comparisonGrid.addEventListener("click", function (event) {
    const button = event.target.closest("button[data-select-role]");
    if (!button) return;
    const role = button.dataset.selectRole;
    const key = button.dataset.runKey;
    if (role === "baseline") baselineSelect.value = key;
    else newerSelect.value = key;
    if (baselineSelect.value === newerSelect.value && state.index.runs.length > 1) {
      const alternative = state.index.runs.find(function (run) { return run.key !== key; });
      if (role === "baseline") newerSelect.value = alternative.key;
      else baselineSelect.value = alternative.key;
    }
    refresh();
  });
  document.querySelector("#benchmark-filter").addEventListener("click", function (event) {
    const button = event.target.closest("button[data-benchmark]");
    if (!button) return;
    const name = button.dataset.benchmark;
    if (state.activeBenchmarks.has(name) && state.activeBenchmarks.size > 1) state.activeBenchmarks.delete(name);
    else state.activeBenchmarks.add(name);
    renderChoiceControls();
    renderHistory();
  });
  document.querySelector("#config-filter").addEventListener("click", function (event) {
    const button = event.target.closest("button[data-config]");
    if (!button) return;
    const config = button.dataset.config;
    if (state.activeConfigs.has(config) && state.activeConfigs.size > 1) state.activeConfigs.delete(config);
    else state.activeConfigs.add(config);
    renderChoiceControls();
    renderHistory();
  });
  historyMetric.addEventListener("change", renderHistory);
  historyRange.addEventListener("change", renderHistory);
}

async function main() {
  try {
    const response = await fetch("data/index.json", { cache: "no-store" });
    if (!response.ok) throw new Error("No published benchmark results yet");
    state.index = await response.json();
    state.index.runs = (state.index.runs || []).slice().sort(function (a, b) { return String(b.createdAt).localeCompare(String(a.createdAt)); });
    if (!state.index.runs.length) throw new Error("No published benchmark results yet");
    const latest = await loadRun(state.index.runs[0]);
    state.benchmarkNames = Array.from(benchmarkMap(latest).keys()).sort();
    state.activeBenchmarks = new Set(state.benchmarkNames.slice(0, Math.min(3, state.benchmarkNames.length)));
    state.activeConfigs = new Set(configs);
    fillRunSelects(state.index.runs);
    renderChoiceControls();
    attachEvents();
    await refresh();
  } catch (error) {
    status.textContent = error.message;
    status.className = "status error";
  }
}

main();
