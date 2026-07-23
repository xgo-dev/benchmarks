const state = { index: null, runs: new Map() };
const newerSelect = document.querySelector("#newer-run");
const baselineSelect = document.querySelector("#baseline-run");
const status = document.querySelector("#status");

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

const seriesColors = ["#315efb", "#7c3aed", "#d97706", "#0f766e", "#c92a2a"];

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

function deltaClass(delta) {
  return delta > 0 ? "bad" : delta < 0 ? "good" : "flat";
}

function percentDelta(value, base) {
  if (!Number.isFinite(Number(value)) || !Number.isFinite(Number(base)) || Number(base) === 0) return null;
  return ((Number(value) - Number(base)) / Number(base)) * 100;
}

function formatDelta(delta, label, prominent) {
  if (!Number.isFinite(delta)) return "";
  const sign = delta > 0 ? "+" : "";
  const className = deltaClass(delta);
  if (prominent) {
    return '<span class="percent-delta ' + className + '">' + sign + delta.toFixed(3) + '%</span><span class="delta-label">' + escapeHtml(label) + "</span>";
  }
  return '<span class="baseline-delta ' + className + '">' + sign + delta.toFixed(3) + "% " + escapeHtml(label) + "</span>";
}

function shortSha(value) {
  return value ? value.slice(0, 10) : "—";
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

async function loadRun(meta) {
  if (!state.runs.has(meta.key)) {
    const response = await fetch("data/" + meta.path, { cache: "no-store" });
    if (!response.ok) throw new Error("Cannot load " + meta.path);
    state.runs.set(meta.key, await response.json());
  }
  return state.runs.get(meta.key);
}

function fillSelects(runs) {
  newerSelect.replaceChildren(...runs.map(function (run) {
    const option = document.createElement("option");
    option.value = run.key;
    option.textContent = runLabel(run);
    return option;
  }));
  baselineSelect.replaceChildren();
  const none = document.createElement("option");
  none.value = "";
  none.textContent = "No baseline";
  baselineSelect.appendChild(none);
  for (const run of runs) {
    const option = document.createElement("option");
    option.value = run.key;
    option.textContent = runLabel(run);
    baselineSelect.appendChild(option);
  }
  newerSelect.selectedIndex = 0;
  baselineSelect.value = runs.length > 1 ? runs[1].key : "";
}

function renderMeta(newer, baseline) {
  const run = newer.run;
  const workflow = run.workflowUrl
    ? '<a href="' + escapeHtml(run.workflowUrl) + '">workflow ' + escapeHtml(runNumber(run)) + "</a>"
    : "run " + escapeHtml(runNumber(run));
  document.querySelector("#run-meta").innerHTML =
    '<div><span class="label">Newer</span><strong>' + escapeHtml(dateLabel(run.createdAt)) + "</strong></div>" +
    '<div><span class="label">LLGo</span><code>' + escapeHtml(shortSha(run.llgoCommit)) + "</code></div>" +
    '<div><span class="label">Toolchain</span>' + escapeHtml(run.goVersion || "—") + " / LLVM " + escapeHtml(run.llvmVersion || "—") + "</div>" +
    '<div><span class="label">Link</span>' + workflow + "</div>" +
    '<div><span class="label">Baseline</span>' + (baseline ? escapeHtml(dateLabel(baseline.run.createdAt)) : "none") + "</div>";
}

function benchmarkMap(document) {
  return new Map((document.benchmarks || []).map(function (item) { return [item.name, item]; }));
}

function comparisonCell(benchmark, config, otherBenchmark) {
  if (!benchmark || !benchmark.values || benchmark.values[config] == null) {
    return '<td class="comparison-cell">—</td>';
  }
  const value = benchmark.values[config];
  const goValue = benchmark.values.Go;
  const relative = config === "Go"
    ? '<span class="flat reference">reference</span>'
    : formatDelta(percentDelta(value, goValue), "vs Go", true);
  const previous = otherBenchmark && otherBenchmark.values && otherBenchmark.values[config] != null
    ? formatDelta(percentDelta(value, otherBenchmark.values[config]), "vs old", false)
    : "";
  return '<td class="comparison-cell"><strong class="size-value">' + formatBytes(value) + "</strong>" +
    '<div class="relative-delta">' + relative + "</div>" + (previous ? '<div class="previous-delta">' + previous + "</div>" : "") + "</td>";
}

function renderComparison(newer, baseline) {
  const grid = document.querySelector("#comparison-grid");
  const newerByName = benchmarkMap(newer);
  const baselineByName = baseline ? benchmarkMap(baseline) : new Map();
  const benchmarkNames = Array.from(new Set(Array.from(newerByName.keys()).concat(Array.from(baselineByName.keys())))).sort();

  const newerHeading = "Newer · " + commitLabel(newer.run);
  const baselineHeading = baseline ? "Older · " + commitLabel(baseline.run) : "Older";
  grid.innerHTML = benchmarkNames.map(function (name) {
    const newerBenchmark = newerByName.get(name);
    const baselineBenchmark = baselineByName.get(name);
    const rows = configs.map(function (config) {
      const label = configLabels[config] || config;
      return "<tr><th class=\"config-mode\" scope=\"row\"><abbr title=\"" + escapeHtml(label) + "\">" +
        escapeHtml(compactConfigLabels[config] || label) + "</abbr></th>" +
        comparisonCell(baselineBenchmark, config, null) +
        comparisonCell(newerBenchmark, config, baselineBenchmark) + "</tr>";
    }).join("");
    return '<article class="benchmark-card"><h3>' + escapeHtml(name) + "</h3><table><thead><tr><th>Mode</th><th>" +
      escapeHtml(baselineHeading) + "</th><th>" + escapeHtml(newerHeading) + "</th></tr></thead><tbody>" + rows + "</tbody></table></article>";
  }).join("");
  document.querySelector("#table-note").textContent = baseline
    ? "Older results are on the left. Newer LLGo results show the prominent difference from Go and the smaller difference from the selected older run."
    : "Each LLGo result shows its difference from Go in the same run.";
}

function renderHistoryTable(runs) {
  const body = document.querySelector("#history-body");
  body.replaceChildren();
  for (const run of runs) {
    const row = document.createElement("tr");
    row.innerHTML =
      "<td><code>" + (run.workflowUrl ? '<a href="' + escapeHtml(run.workflowUrl) + '">' : "") + escapeHtml(commitLabel(run)) + (run.workflowUrl ? "</a>" : "") + "</td>" +
      "<td>" + escapeHtml(dateLabel(run.createdAt)) + "</td>" +
      "<td>" + escapeHtml(run.goVersion || "—") + "</td>" +
      "<td>" + escapeHtml(run.llvmVersion || "—") + "</td>" +
      "<td>" + escapeHtml(run.ref || "—") + "</td>";
    body.appendChild(row);
  }
}

function chartPath(points, x, y) {
  return points.map(function (point, index) {
    return (index === 0 ? "M" : "L") + x(point.index).toFixed(2) + " " + y(point.value).toFixed(2);
  }).join(" ");
}

function renderHistoryChart(name, documents) {
  const values = [];
  for (const document of documents) {
    const benchmark = benchmarkMap(document).get(name);
    if (!benchmark) continue;
    for (const config of configs) {
      if (Number.isFinite(Number(benchmark.values[config]))) values.push(Number(benchmark.values[config]));
    }
  }
  if (!values.length) return "";
  const width = 700;
  const height = 260;
  const left = 62;
  const right = 14;
  const top = 18;
  const bottom = 42;
  const minimum = Math.min.apply(null, values);
  const maximum = Math.max.apply(null, values);
  const range = maximum === minimum ? Math.max(1, maximum * 0.05) : maximum - minimum;
  const yMin = Math.max(0, minimum - range * 0.08);
  const yMax = maximum + range * 0.08;
  const x = function (index) { return documents.length === 1 ? (left + width - right) / 2 : left + index * (width - left - right) / (documents.length - 1); };
  const y = function (value) { return top + (yMax - value) * (height - top - bottom) / (yMax - yMin); };
  const grid = [0, 0.5, 1].map(function (ratio) {
    const value = yMin + (yMax - yMin) * ratio;
    const position = y(value);
    return '<line class="chart-grid-line" x1="' + left + '" x2="' + (width - right) + '" y1="' + position + '" y2="' + position + '"></line>' +
      '<text class="chart-axis-label" x="0" y="' + (position + 3) + '">' + escapeHtml(formatBytes(value)) + "</text>";
  }).join("");
  const series = configs.map(function (config, configIndex) {
    const points = [];
    documents.forEach(function (document, index) {
      const benchmark = benchmarkMap(document).get(name);
      const value = benchmark && benchmark.values ? Number(benchmark.values[config]) : NaN;
      if (Number.isFinite(value)) points.push({ index: index, value: value, document: document });
    });
    if (!points.length) return "";
    const color = seriesColors[configIndex % seriesColors.length];
    return '<path d="' + chartPath(points, x, y) + '" fill="none" stroke="' + color + '" stroke-width="2.5"></path>' + points.map(function (point) {
      return '<circle cx="' + x(point.index) + '" cy="' + y(point.value) + '" r="3.5" fill="' + color + '"><title>' +
        escapeHtml(name + " · " + config + " · " + commitLabel(point.document.run) + ": " + formatBytes(point.value)) + "</title></circle>";
    }).join("");
  }).join("");
  const labels = documents.map(function (document, index) {
    return '<text class="chart-axis-label" text-anchor="middle" x="' + x(index) + '" y="' + (height - 14) + '">' + escapeHtml(commitLabel(document.run)) + "</text>";
  }).join("");
  const legend = configs.map(function (config, index) {
    return '<span style="--series:' + seriesColors[index % seriesColors.length] + '">' + escapeHtml(configLabels[config] || config) + "</span>";
  }).join("");
  return '<article class="chart-card"><h3>' + escapeHtml(name) + "</h3><svg viewBox=\"0 0 " + width + " " + height + '\" role="img" aria-label="Binary-size history for ' + escapeHtml(name) + '">' + grid + series + labels + "</svg><div class=\"chart-legend\">" + legend + "</div></article>";
}

async function renderHistoryCharts(runs) {
  const container = document.querySelector("#history-charts");
  const documents = await Promise.all(runs.slice().reverse().map(loadRun));
  const names = Array.from(new Set(documents.flatMap(function (document) {
    return (document.benchmarks || []).map(function (benchmark) { return benchmark.name; });
  }))).sort();
  container.innerHTML = names.map(function (name) { return renderHistoryChart(name, documents); }).join("") || '<p class="muted">No benchmark history is available yet.</p>';
}

async function update() {
  try {
    const newerMeta = state.index.runs.find(function (run) { return run.key === newerSelect.value; });
    const baselineMeta = state.index.runs.find(function (run) { return run.key === baselineSelect.value; });
    const newer = await loadRun(newerMeta);
    const baseline = baselineMeta && baselineMeta.key !== newerMeta.key ? await loadRun(baselineMeta) : null;
    renderMeta(newer, baseline);
    renderComparison(newer, baseline);
    status.textContent = state.index.runs.length + " run" + (state.index.runs.length === 1 ? "" : "s") + " published";
  } catch (error) {
    status.textContent = error.message;
    status.className = "status error";
  }
}

async function main() {
  try {
    const response = await fetch("data/index.json", { cache: "no-store" });
    if (!response.ok) throw new Error("No published benchmark results yet");
    state.index = await response.json();
    const runs = state.index.runs || [];
    if (!runs.length) throw new Error("No published benchmark results yet");
    fillSelects(runs);
    renderHistoryTable(runs);
    newerSelect.addEventListener("change", update);
    baselineSelect.addEventListener("change", update);
    await Promise.all([update(), renderHistoryCharts(runs)]);
  } catch (error) {
    status.textContent = error.message;
    status.className = "status error";
  }
}

main();
