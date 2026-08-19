const compatibilityState = {
  index: null,
  document: null,
  runs: new Map(),
};

const compatibilityDom = {
  status: document.querySelector("#compatibility-status"),
  release: document.querySelector("#compatibility-release"),
  go: document.querySelector("#compatibility-go"),
  environment: document.querySelector("#compatibility-environment"),
  run: document.querySelector("#compatibility-run"),
  filter: document.querySelector("#compatibility-filter"),
  meta: document.querySelector("#compatibility-meta"),
  workflow: document.querySelector("#compatibility-workflow"),
  raw: document.querySelector("#compatibility-raw"),
  projects: document.querySelector("#compatibility-projects"),
  packages: document.querySelector("#compatibility-packages"),
  compiled: document.querySelector("#compatibility-compiled"),
  tests: document.querySelector("#compatibility-tests"),
  table: document.querySelector("#compatibility-table"),
};

function compatibilityEscape(value) {
  return String(value == null ? "" : value).replace(/[&<>"']/g, function (character) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character];
  });
}

function compatibilityDate(value) {
  if (!value) return "unknown time";
  return new Date(value).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });
}

function compatibilitySafeUrl(value) {
  const url = String(value || "");
  return /^https:\/\/github\.com\/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+\/(?:actions\/runs\/[0-9]+|releases\/tag\/.+)$/.test(url) ? url : "";
}

function compatibilityProjectUrl(value) {
  const url = String(value || "");
  return /^https:\/\/github\.com\/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+\/?$/.test(url) ? url : "";
}

function compatibilitySetLink(element, href) {
  if (!href) {
    element.hidden = true;
    element.removeAttribute("href");
    return;
  }
  element.hidden = false;
  element.href = href;
}

function compatibilityReleaseLink(run) {
  const repository = String(run.llgoRepository || "xgo-dev/llgo");
  const tag = String(run.llgoTag || "");
  if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repository) || !tag) return "";
  return "https://github.com/" + repository + "/releases/tag/" + encodeURIComponent(tag);
}

function compatibilityRunUrl(meta, path) {
  const version = [meta.id || meta.key, meta.attempt || 1, meta.createdAt || ""].join("-");
  return "data/" + path + "?v=" + encodeURIComponent(version);
}

async function compatibilityLoadRun(meta) {
  if (!compatibilityState.runs.has(meta.key)) {
    compatibilityState.runs.set(meta.key, (async function () {
      const response = await fetch(compatibilityRunUrl(meta, meta.path));
      if (!response.ok) throw new Error("Cannot load " + meta.path);
      return response.json();
    })());
  }
  return compatibilityState.runs.get(meta.key);
}

function compatibilityPill(label, kind) {
  return '<span class="compatibility-pill ' + compatibilityEscape(kind) + '">' + compatibilityEscape(label) + "</span>";
}

function compatibilityBuild(result) {
  return result && result.build === "pass"
    ? compatibilityPill("Compiled", "compatible")
    : compatibilityPill("Compile failed", "compile-gap");
}

function compatibilityTest(result) {
  if (!result || result.test === "not-run") return '<span class="missing">—</span>';
  if (result.test === "pass") return compatibilityPill("Passed", "compatible");
  if (result.test === "skip") return compatibilityPill("Skipped", "baseline-failure");
  return compatibilityPill(result.test === "runner-error" ? "Runner error" : "Failed", "test-failure");
}

function compatibilityBaseline(result) {
  if (!result || result.build !== "pass") return compatibilityBuild(result);
  return compatibilityTest(result) + compatibilityCases(result);
}

function compatibilityClassification(value) {
  const labels = {
    "compatible": "Compatible",
    "compile-gap": "Compile gap",
    "test-failure": "Test failure",
    "baseline-failure": "Baseline failure",
  };
  return compatibilityPill(labels[value] || value, value);
}

function compatibilityCases(result) {
  if (!result || result.test === "not-run") return '<span class="missing">—</span>';
  const main = '<strong>' + compatibilityEscape(result.passed + " / " + result.total) + "</strong>";
  const secondary = result.skipped ? '<span class="secondary-value">' + compatibilityEscape(result.skipped + " skipped") + "</span>" : "";
  return main + secondary;
}

function compatibilityFailures(result) {
  const failures = (result && result.failedTests) || [];
  if (!failures.length) return "";
  return '<details class="compatibility-failures"><summary>' + failures.length + (failures.length === 1 ? " failed test" : " failed tests") + "</summary><ul>" +
    failures.map(function (failure) { return "<li><code>" + compatibilityEscape(failure.name) + "</code></li>"; }).join("") +
    "</ul></details>";
}

function compatibilityVisible(packageResult) {
  const filter = compatibilityDom.filter.value;
  if (filter === "gaps") return packageResult.classification !== "compatible";
  if (filter === "compatible") return packageResult.classification === "compatible";
  return true;
}

function compatibilityRenderTable(document) {
  const bodies = (document.projects || []).map(function (project) {
    const packages = (project.packages || []).filter(compatibilityVisible);
    if (!packages.length) return "";
    const url = compatibilityProjectUrl(project.url);
    const projectName = url
      ? '<a href="' + compatibilityEscape(url) + '">' + compatibilityEscape(project.name) + "</a>"
      : compatibilityEscape(project.name);
    const rows = packages.map(function (packageResult) {
      const go = packageResult.Go || {};
      const llgo = packageResult.LLGo || {};
      return "<tr>" +
        '<th class="compatibility-package-cell" scope="row"><code>' + compatibilityEscape(packageResult.importPath) + "</code>" +
        '<span class="secondary-value">' + compatibilityEscape(packageResult.version) + "</span></th>" +
        "<td>" + compatibilityBaseline(go) + "</td>" +
        "<td>" + compatibilityBuild(llgo) + "</td>" +
        "<td>" + compatibilityTest(llgo) + "</td>" +
        "<td>" + compatibilityCases(llgo) + "</td>" +
        "<td>" + compatibilityClassification(packageResult.classification) + compatibilityFailures(llgo) + "</td>" +
        "</tr>";
    }).join("");
    const versions = (project.versions || []).join(", ");
    return '<tbody class="compatibility-project-group"><tr class="compatibility-project-heading"><th colspan="6" scope="rowgroup">' +
      '<span class="compatibility-project-name">' + projectName + "</span>" +
      '<span class="compatibility-project-version">' + compatibilityEscape(versions) + " · " + packages.length + (packages.length === 1 ? " package" : " packages") + "</span>" +
      "</th></tr>" + rows + "</tbody>";
  }).join("");

  compatibilityDom.table.innerHTML =
    "<thead><tr><th>Package</th><th>Go baseline</th><th>LLGo build</th><th>LLGo tests</th><th>Passed tests</th><th>Result</th></tr></thead>" +
    (bodies || '<tbody><tr><td class="empty-state" colspan="6">No packages match this filter.</td></tr></tbody>');
}

function compatibilityRenderSummary(document) {
  const summary = document.summary || {};
  compatibilityDom.projects.textContent = (summary.projectsCompatible || 0) + " / " + (summary.projectsTotal || 0);
  compatibilityDom.packages.textContent = (summary.packagesCompatible || 0) + " / " + (summary.packagesTotal || 0);
  compatibilityDom.compiled.textContent = (summary.packagesCompiled || 0) + " / " + (summary.packagesTotal || 0);
  compatibilityDom.tests.textContent = (summary.testsPassed || 0) + " / " + (summary.testsTotal || 0);
}

async function compatibilityRender(meta) {
  compatibilityDom.status.classList.remove("error");
  compatibilityDom.status.textContent = "Loading " + (meta.llgoTag || meta.key) + "…";
  const document = await compatibilityLoadRun(meta);
  compatibilityState.document = document;
  const run = document.run || {};
  const tag = run.llgoTag || meta.llgoTag || "—";
  const releaseUrl = compatibilitySafeUrl(compatibilityReleaseLink(run));
  compatibilityDom.release.innerHTML = releaseUrl
    ? '<a href="' + compatibilityEscape(releaseUrl) + '">' + compatibilityEscape(tag) + "</a>"
    : compatibilityEscape(tag);
  compatibilityDom.go.textContent = run.goVersion ? "Go " + run.goVersion : "—";
  compatibilityDom.environment.textContent = [run.cpu, [run.runnerOS, run.runnerArch].filter(Boolean).join("/")].filter(Boolean).join(" · ") || "—";
  compatibilityDom.meta.textContent = "Published " + compatibilityDate(run.createdAt);
  compatibilitySetLink(compatibilityDom.workflow, compatibilitySafeUrl(run.workflowUrl));
  compatibilitySetLink(compatibilityDom.raw, compatibilityRunUrl(meta, meta.path));
  compatibilityRenderSummary(document);
  compatibilityRenderTable(document);
  const summary = document.summary || {};
  compatibilityDom.status.textContent = (summary.projectsCompatible || 0) + "/" + (summary.projectsTotal || 0) + " projects · " + tag;
}

async function compatibilityStart() {
  try {
    const response = await fetch("data/compatibility/index.json", { cache: "no-store" });
    if (response.status === 404) {
      compatibilityDom.status.textContent = "No published results yet";
      compatibilityDom.run.innerHTML = '<option value="">Waiting for the next LLGo release</option>';
      compatibilityDom.run.disabled = true;
      compatibilityDom.table.innerHTML = '<tbody><tr><td class="empty-state">The table will appear after the first compatibility run.</td></tr></tbody>';
      return;
    }
    if (!response.ok) throw new Error("Cannot load compatibility history");
    compatibilityState.index = await response.json();
    const runs = compatibilityState.index.runs || [];
    if (!runs.length) throw new Error("Compatibility history is empty");
    compatibilityDom.run.innerHTML = runs.map(function (run) {
      const label = (run.llgoTag || run.key) + " · " + compatibilityDate(run.createdAt);
      return '<option value="' + compatibilityEscape(run.key) + '">' + compatibilityEscape(label) + "</option>";
    }).join("");
    compatibilityDom.run.addEventListener("change", function () {
      const selected = runs.find(function (run) { return run.key === compatibilityDom.run.value; });
      compatibilityRender(selected).catch(compatibilityFail);
    });
    compatibilityDom.filter.addEventListener("change", function () {
      if (compatibilityState.document) compatibilityRenderTable(compatibilityState.document);
    });
    await compatibilityRender(runs[0]);
  } catch (error) {
    compatibilityFail(error);
  }
}

function compatibilityFail(error) {
  compatibilityDom.status.classList.add("error");
  compatibilityDom.status.textContent = error && error.message ? error.message : "Cannot load compatibility results";
}

compatibilityStart();
