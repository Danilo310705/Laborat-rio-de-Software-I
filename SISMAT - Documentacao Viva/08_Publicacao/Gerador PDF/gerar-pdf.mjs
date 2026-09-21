import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { fileURLToPath, pathToFileURL } from "node:url";

const argv = process.argv.slice(2);

function argument(name, fallback = "") {
  const position = argv.indexOf(`--${name}`);
  return position >= 0 && argv[position + 1] ? argv[position + 1] : fallback;
}

function fail(message) {
  console.error(`ERRO: ${message}`);
  process.exit(1);
}

const vault = path.resolve(argument("vault"));
const sourceFile = path.resolve(argument("source"));
const outputFile = path.resolve(argument("output"));
const generatorDir = path.dirname(fileURLToPath(import.meta.url));
const cssFile = path.join(generatorDir, "estilo-overleaf.css");
const vendorDir = path.join(generatorDir, "vendor");
const logoFile = path.join(generatorDir, "assets", "logo-unipar.png");
const tempDir = path.join(vault, "tmp", "pdfs");
const tempHtml = path.join(tempDir, "SISMAT-publicacao-compilada.html");

for (const [label, file] of [
  ["vault", vault],
  ["documento de publicação", sourceFile],
  ["folha de estilos", cssFile],
  ["marca institucional da UNIPAR", logoFile],
  ["Marked", path.join(vendorDir, "marked.umd.js")],
  ["Mermaid", path.join(vendorDir, "mermaid.min.js")],
  ["Paged.js", path.join(vendorDir, "paged.polyfill.js")],
]) {
  if (!fs.existsSync(file)) fail(`${label} não encontrado: ${file}`);
}

fs.mkdirSync(path.dirname(outputFile), { recursive: true });
fs.mkdirSync(tempDir, { recursive: true });

function normalizeSlashes(value) {
  return value.replace(/\\/g, "/");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function cleanScalar(value) {
  const trimmed = value.trim();
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) ||
      (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1);
  }
  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    return trimmed.slice(1, -1).split(",").map((item) => cleanScalar(item)).filter(Boolean);
  }
  return trimmed;
}

function splitFrontMatter(markdown) {
  const match = markdown.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?/);
  if (!match) return { metadata: {}, body: markdown };

  const metadata = {};
  let activeList = null;
  for (const line of match[1].split(/\r?\n/)) {
    const listItem = line.match(/^\s+-\s+(.+)$/);
    if (listItem && activeList) {
      metadata[activeList].push(cleanScalar(listItem[1]));
      continue;
    }

    const property = line.match(/^([A-Za-zÀ-ÿ0-9_-]+):\s*(.*)$/);
    if (!property) continue;
    const [, key, rawValue] = property;
    if (!rawValue.trim()) {
      metadata[key] = [];
      activeList = key;
    } else {
      metadata[key] = cleanScalar(rawValue);
      activeList = null;
    }
  }

  return { metadata, body: markdown.slice(match[0].length) };
}

function slug(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "secao";
}

const allFiles = [];

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if ([".git", "node_modules", "output", "tmp"].includes(entry.name)) continue;
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(absolute);
    else allFiles.push(absolute);
  }
}

walk(vault);

const exactIndex = new Map();
const basenameIndex = new Map();
for (const file of allFiles) {
  const relative = normalizeSlashes(path.relative(vault, file));
  exactIndex.set(relative.toLowerCase(), file);
  const withoutExtension = relative.replace(/\.[^.]+$/, "");
  exactIndex.set(withoutExtension.toLowerCase(), file);
  const base = path.basename(file, path.extname(file)).toLowerCase();
  if (!basenameIndex.has(base)) basenameIndex.set(base, file);
}

function parseWikiTarget(raw) {
  const aliasParts = raw.split(/\\?\|/);
  const destination = aliasParts.shift().trim();
  const alias = aliasParts.join("|").trim();
  const hashPosition = destination.indexOf("#");
  return {
    filePart: (hashPosition >= 0 ? destination.slice(0, hashPosition) : destination).trim(),
    fragment: hashPosition >= 0 ? destination.slice(hashPosition + 1).trim() : "",
    alias,
  };
}

function resolveTarget(filePart, currentFile) {
  if (!filePart) return currentFile;
  const normalized = normalizeSlashes(filePart).replace(/^\//, "");
  const directCandidates = [
    normalized,
    `${normalized}.md`,
    normalizeSlashes(path.relative(vault, path.resolve(path.dirname(currentFile), normalized))),
    normalizeSlashes(path.relative(vault, path.resolve(path.dirname(currentFile), `${normalized}.md`))),
  ];

  for (const candidate of directCandidates) {
    const found = exactIndex.get(candidate.toLowerCase());
    if (found) return found;
  }

  return basenameIndex.get(path.basename(normalized, path.extname(normalized)).toLowerCase()) || null;
}

function documentAnchor(file) {
  const relative = normalizeSlashes(path.relative(vault, file)).replace(/\.md$/i, "");
  return `doc-${slug(relative)}`;
}

function humanCaption(file) {
  const name = path.basename(file, path.extname(file)).replace(/_/g, " ").trim();
  const relative = normalizeSlashes(path.relative(vault, file));
  if (relative.includes("/Prototipos/")) return `Protótipo ${name}`;
  if (relative.includes("/Diagramas da Fonte/")) return name;
  return name;
}

function humanSource(file) {
  const relative = normalizeSlashes(path.relative(vault, file));
  if (relative.includes("/Prototipos/") || relative.includes("/Diagramas da Fonte/")) {
    return "SISMAT.EST.00001 (2026)";
  }
  return "Elaboração própria (2026)";
}

const includedNotes = new Set();

function renderImage(file) {
  const source = pathToFileURL(file).href;
  const caption = humanCaption(file);
  const origin = humanSource(file);
  return `<figure class="illustration" data-caption="${escapeHtml(caption)}" data-source="${escapeHtml(origin)}"><img src="${source}" alt="${escapeHtml(caption)}"></figure>`;
}

function inlineWikiToHtml(line, currentFile) {
  return line.replace(/(!?)\[\[([^\]]+)\]\]/g, (whole, isEmbed, rawTarget) => {
    const { filePart, fragment, alias } = parseWikiTarget(rawTarget);
    const resolved = resolveTarget(filePart, currentFile);
    const display = alias || fragment || (resolved ? path.basename(resolved, path.extname(resolved)) : filePart);

    if (isEmbed && resolved && !/\.md$/i.test(resolved)) return renderImage(resolved);
    if (!resolved) return escapeHtml(display);

    const href = /\.md$/i.test(resolved)
      ? `#${documentAnchor(resolved)}`
      : pathToFileURL(resolved).href;
    return `<a href="${href}">${escapeHtml(display)}</a>`;
  });
}

function processMarkdown(markdown, currentFile, headingShift = 0) {
  let body = splitFrontMatter(markdown).body;
  body = body.replace(/%%[\s\S]*?%%/g, "");
  const lines = body.split(/\r?\n/);
  const output = [];
  let inFence = false;

  for (const line of lines) {
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      output.push(line);
      continue;
    }

    if (inFence) {
      output.push(line);
      continue;
    }

    const onlyEmbed = line.match(/^\s*!\[\[([^\]]+)\]\]\s*$/);
    if (onlyEmbed) {
      const { filePart } = parseWikiTarget(onlyEmbed[1]);
      const resolved = resolveTarget(filePart, currentFile);
      if (!resolved) {
        output.push(`> [!warning] Anexo não localizado: ${filePart}`);
      } else if (/\.md$/i.test(resolved)) {
        if (includedNotes.has(resolved)) {
          output.push(`<p class="repeated-reference">Conteúdo já apresentado: <a href="#${documentAnchor(resolved)}">${escapeHtml(path.basename(resolved, ".md"))}</a>.</p>`);
        } else {
          includedNotes.add(resolved);
          const nested = fs.readFileSync(resolved, "utf8");
          output.push(`<span id="${documentAnchor(resolved)}" class="source-anchor"></span>`);
          output.push(processMarkdown(nested, resolved, headingShift + 1));
        }
      } else {
        output.push(renderImage(resolved));
      }
      continue;
    }

    const heading = line.match(/^(#{1,6})(\s+.*)$/);
    if (heading) {
      const level = Math.min(6, heading[1].length + headingShift);
      output.push(`${"#".repeat(level)}${heading[2]}`);
      continue;
    }

    output.push(inlineWikiToHtml(line, currentFile));
  }

  return output.join("\n");
}

const original = fs.readFileSync(sourceFile, "utf8");
const { metadata, body } = splitFrontMatter(original);
includedNotes.add(sourceFile);
const compiledMarkdown = processMarkdown(body, sourceFile, 0);

function arrayValue(value) {
  if (Array.isArray(value)) return value;
  if (!value) return [];
  return String(value).split(";").map((item) => item.trim()).filter(Boolean);
}

const publication = {
  shortTitle: metadata.titulo_curto || "SISMAT",
  title: metadata.titulo || "SISMAT",
  subtitle: metadata.subtitulo || "Caderno do Projeto Integrador",
  institution: metadata.instituicao || "Universidade Paranaense - UNIPAR",
  course: metadata.curso || "Curso da Área de Tecnologia",
  subject: metadata.disciplina || "Laboratório de Software",
  delivery: metadata.modalidade || "Projeto Integrador",
  campus: metadata.campus || "Campus Toledo",
  city: metadata.cidade || "Toledo - PR",
  year: metadata.ano || new Date().getFullYear(),
  version: metadata.versao || "1.0",
  editionDate: metadata.data_da_edicao || new Date().toISOString().slice(0, 10),
  status: metadata.status_publicacao || metadata.status || "Em revisão",
  nature: metadata.natureza || "Projeto Integrador apresentado às disciplinas do curso como requisito parcial de avaliação interdisciplinar da Universidade Paranaense - UNIPAR, Campus Toledo.",
  authors: arrayValue(metadata.autores || metadata.responsaveis),
  disciplines: arrayValue(metadata.disciplinas),
};

function localAsset(file) {
  return pathToFileURL(file).href;
}

const stylesheet = fs.readFileSync(cssFile, "utf8").replace(/<\/style/gi, "<\\/style");
const logoAsset = localAsset(logoFile);

const html = `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(publication.shortTitle)} - ${escapeHtml(publication.subtitle)}</title>
  <script>window.PagedConfig = { auto: false };</script>
  <style>${stylesheet}</style>
  <script src="${localAsset(path.join(vendorDir, "marked.umd.js"))}"></script>
  <script src="${localAsset(path.join(vendorDir, "mermaid.min.js"))}"></script>
  <script src="${localAsset(path.join(vendorDir, "paged.polyfill.js"))}"></script>
</head>
<body>
  <section class="cover">
    <div class="cover-content">
      <header class="academic-institution">
        <img class="unipar-logo" src="${logoAsset}" alt="Universidade Paranaense - UNIPAR">
        <div class="cover-brand-copy">
          <div class="institution">${escapeHtml(publication.institution)}</div>
          <div class="course">${escapeHtml(publication.course)}</div>
          <div class="subject">${escapeHtml(publication.subject)}</div>
        </div>
      </header>
      <div class="cover-kicker">${escapeHtml(publication.delivery)} · DOCUMENTAÇÃO VIVA</div>
      <div class="cover-title-group">
        <div class="cover-code">SISTEMA DE REQUISIÇÃO DE MATERIAIS</div>
        <h1>${escapeHtml(publication.title)}</h1>
        <div class="cover-rule"></div>
        <p>${escapeHtml(publication.subtitle)}</p>
      </div>
      <div class="cover-authors">
        <span>EQUIPE</span>
        ${publication.authors.map((author) => `<strong>${escapeHtml(author)}</strong>`).join("")}
      </div>
      <footer class="cover-footer">
        <div><strong>${escapeHtml(publication.campus)}</strong><br>${escapeHtml(publication.city)} · ${escapeHtml(publication.year)}</div>
        <div class="version-badge">VERSÃO ${escapeHtml(publication.version)}</div>
      </footer>
    </div>
  </section>

  <section class="title-page">
    <header class="running-header">
      <div class="running-header-inner">
        <img src="${logoAsset}" alt="UNIPAR">
        <div class="running-header-copy">
          <strong>${escapeHtml(publication.institution)}</strong>
          <span>${escapeHtml(publication.course)} · ${escapeHtml(publication.subject)}</span>
        </div>
      </div>
    </header>
    <div class="title-authors">
      ${publication.authors.map((author) => `<strong>${escapeHtml(author)}</strong>`).join("")}
    </div>
    <div class="title-main">
      <h1>${escapeHtml(publication.title)}</h1>
      <p>${escapeHtml(publication.subtitle)}</p>
    </div>
    <div class="academic-nature">
      <p>${escapeHtml(publication.nature)}</p>
      <p><strong>Curso:</strong> ${escapeHtml(publication.course)}</p>
      <p><strong>Disciplina:</strong> ${escapeHtml(publication.subject)}</p>
      <p><strong>Modalidade:</strong> ${escapeHtml(publication.delivery)}</p>
      <p><strong>Integração curricular:</strong> ${escapeHtml(publication.disciplines.join("; "))}</p>
    </div>
    <footer class="title-footer">
      <div>${escapeHtml(publication.city)}</div>
      <div>${escapeHtml(publication.year)}</div>
    </footer>
  </section>

  <section class="front-page document-control">
    <h1>Ficha da publicação</h1>
    <p class="lead">Esta edição congela uma visão verificável da documentação viva mantida no Obsidian.</p>
    <dl class="publication-data">
      <div><dt>Projeto</dt><dd>${escapeHtml(publication.title)} - Sistema de Requisição de Materiais</dd></div>
      <div><dt>Entrega</dt><dd>${escapeHtml(publication.delivery)}</dd></div>
      <div><dt>Instituição</dt><dd>${escapeHtml(publication.institution)}</dd></div>
      <div><dt>Unidade</dt><dd>${escapeHtml(publication.campus)}</dd></div>
      <div><dt>Curso</dt><dd>${escapeHtml(publication.course)}</dd></div>
      <div><dt>Disciplina</dt><dd>${escapeHtml(publication.subject)}</dd></div>
      <div><dt>Versão</dt><dd>${escapeHtml(publication.version)}</dd></div>
      <div><dt>Data da edição</dt><dd>${escapeHtml(publication.editionDate)}</dd></div>
      <div><dt>Estado</dt><dd><span class="status-chip">${escapeHtml(publication.status)}</span></dd></div>
    </dl>
    <div class="front-block">
      <h2>Autores</h2>
      <ul>${publication.authors.map((author) => `<li>${escapeHtml(author)}</li>`).join("")}</ul>
    </div>
    <div class="front-block">
      <h2>Integração curricular</h2>
      <p>${escapeHtml(publication.disciplines.join(" · "))}</p>
    </div>
    <aside class="edition-note"><strong>Nota editorial.</strong> Itens marcados como propostos dependem de validação. A implementação não foi confrontada com código-fonte neste workspace.</aside>
  </section>

  <section class="front-page toc-page">
    <h1>Sumário</h1>
    <nav id="toc"></nav>
  </section>

  <section class="front-page figures-page" id="figures-page">
    <h1>Lista de figuras</h1>
    <nav id="list-of-figures"></nav>
  </section>

  <article id="publication-content" class="publication-content"></article>

  <script>
  (async () => {
    try {
      const source = ${JSON.stringify(compiledMarkdown)};
      const content = document.getElementById("publication-content");
      content.innerHTML = marked.parse(source, { gfm: true, breaks: false });

      const slugify = (text) => text.normalize("NFD")
        .replace(/[\\u0300-\\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "") || "secao";

      const usedIds = new Set(Array.from(document.querySelectorAll("[id]")).map((item) => item.id));
      let currentChapter = 0;
      let currentSection = 0;
      let chapterIsNumbered = false;

      for (const heading of content.querySelectorAll("h1, h2, h3, h4, h5, h6")) {
        const originalText = heading.textContent.trim();
        let candidate = slugify(originalText);
        let suffix = 2;
        while (usedIds.has(candidate)) candidate = slugify(originalText) + "-" + suffix++;
        heading.id = candidate;
        usedIds.add(candidate);

        if (heading.tagName === "H1") {
          heading.classList.add("chapter-heading");
          const unnumbered = originalText.toLocaleLowerCase("pt-BR") === "apresentação";
          chapterIsNumbered = !unnumbered;
          currentSection = 0;
          if (chapterIsNumbered) {
            currentChapter += 1;
            heading.dataset.toc = "true";
            heading.dataset.tocLevel = "1";
            heading.insertAdjacentHTML("afterbegin", '<span class="heading-number">' + currentChapter + '&nbsp;</span>');
          } else {
            heading.classList.add("unnumbered");
            heading.dataset.toc = "true";
            heading.dataset.tocLevel = "1";
          }
        } else if (heading.tagName === "H2") {
          heading.classList.add("section-heading");
          if (chapterIsNumbered) {
            currentSection += 1;
            heading.dataset.toc = "true";
            heading.dataset.tocLevel = "2";
            heading.insertAdjacentHTML("afterbegin", '<span class="heading-number">' + currentChapter + '.' + currentSection + '&nbsp;</span>');
          }
        }
      }

      for (const blockquote of content.querySelectorAll("blockquote")) {
        const first = blockquote.querySelector("p");
        if (!first) continue;
        const originalHtml = first.innerHTML;
        const match = originalHtml.match(/^\\[!([A-Za-z-]+)\\]\\s*([^\\n<]*)(?:\\n|<br\\s*\\/?\\s*>)?/);
        if (!match) continue;
        const type = match[1].toLowerCase();
        const title = match[2] || ({ warning: "Atenção", info: "Informação", note: "Nota" }[type] || "Observação");
        const remainingHtml = originalHtml.slice(match[0].length).trim();
        if (remainingHtml) first.innerHTML = remainingHtml;
        else first.remove();
        blockquote.classList.add("callout", "callout-" + type);
        blockquote.insertAdjacentHTML("afterbegin", '<div class="callout-title">' + title + '</div>');
      }

      for (const table of content.querySelectorAll("table")) {
        const columns = table.querySelectorAll("thead th").length;
        table.classList.add("columns-" + Math.min(columns, 8));
        const wrapper = document.createElement("div");
        wrapper.className = "table-wrap";
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
      }

      let diagramIndex = 0;
      for (const code of content.querySelectorAll("pre > code.language-mermaid")) {
        const pre = code.parentElement;
        const figure = document.createElement("figure");
        figure.className = "diagram illustration";
        const diagram = document.createElement("div");
        diagram.className = "mermaid";
        diagram.textContent = code.textContent;
        figure.appendChild(diagram);

        let previous = pre.previousElementSibling;
        while (previous && !/^H[1-6]$/.test(previous.tagName)) previous = previous.previousElementSibling;
        const label = previous ? previous.textContent.replace(/^\\d+(?:\\.\\d+)?\\s*/, "").trim() : "Diagrama " + (++diagramIndex);
        figure.dataset.caption = label;
        figure.dataset.source = "Elaboração própria (2026)";
        pre.replaceWith(figure);
      }

      mermaid.initialize({
        startOnLoad: false,
        securityLevel: "strict",
        theme: "base",
        fontFamily: "Cambria, Georgia, serif",
        themeVariables: {
          primaryColor: "#f2f2f2",
          primaryTextColor: "#111111",
          primaryBorderColor: "#565656",
          lineColor: "#565656",
          secondaryColor: "#f8f8f8",
          tertiaryColor: "#ffffff",
          actorBkg: "#ffffff",
          actorBorder: "#565656",
          actorTextColor: "#111111",
          signalColor: "#111111",
          signalTextColor: "#111111",
          noteBkgColor: "#fff8e8",
          noteBorderColor: "#a32638"
        },
        flowchart: { htmlLabels: true, curve: "basis" },
        sequence: { useMaxWidth: true, wrap: true, diagramMarginX: 8, diagramMarginY: 8 }
      });
      await mermaid.run({ nodes: content.querySelectorAll(".mermaid") });

      let figureNumber = 0;
      const figures = [];
      for (const figure of content.querySelectorAll("figure.illustration")) {
        figureNumber += 1;
        figure.id = "figura-" + figureNumber;
        let caption = figure.querySelector("figcaption");
        if (!caption) {
          caption = document.createElement("figcaption");
          figure.insertBefore(caption, figure.firstChild);
        }
        const captionText = figure.dataset.caption || "Ilustração " + figureNumber;
        caption.innerHTML = '<span class="figure-label">Figura ' + figureNumber + '</span><span class="figure-separator"> - </span>' + captionText;
        const source = document.createElement("div");
        source.className = "figure-source";
        source.textContent = "Fonte: " + (figure.dataset.source || "Elaboração própria (2026)") + ".";
        figure.appendChild(source);
        figures.push({ id: figure.id, text: "Figura " + figureNumber + " - " + captionText });
      }

      const tocList = document.createElement("ol");
      tocList.className = "toc-list";
      for (const heading of content.querySelectorAll('[data-toc="true"]')) {
        const item = document.createElement("li");
        item.className = "toc-level-" + heading.dataset.tocLevel;
        const link = document.createElement("a");
        link.href = "#" + heading.id;
        link.innerHTML = "<span>" + heading.textContent.trim() + "</span>";
        item.appendChild(link);
        tocList.appendChild(item);
      }
      document.getElementById("toc").appendChild(tocList);

      const figureList = document.createElement("ol");
      figureList.className = "figure-list toc-list";
      for (const figure of figures) {
        const item = document.createElement("li");
        const link = document.createElement("a");
        link.href = "#" + figure.id;
        link.innerHTML = "<span>" + figure.text + "</span>";
        item.appendChild(link);
        figureList.appendChild(item);
      }
      document.getElementById("list-of-figures").appendChild(figureList);
      if (!figures.length) document.getElementById("figures-page").remove();

      const result = await window.PagedPolyfill.preview();
      window.__PAGE_COUNT__ = result.total;
      window.__PAGED_DONE__ = true;
    } catch (error) {
      window.__BUILD_ERROR__ = error && error.stack ? error.stack : String(error);
      console.error(error);
    }
  })();
  </script>
</body>
</html>`;

fs.writeFileSync(tempHtml, html, "utf8");

function locatePlaywright() {
  const roots = [
    process.env.SISMAT_NODE_MODULES,
    path.join(generatorDir, "node_modules"),
    path.join(os.homedir(), ".cache", "codex-runtimes", "codex-primary-runtime", "dependencies", "node", "node_modules"),
  ].filter(Boolean);

  for (const root of roots) {
    const moduleFile = path.join(root, "playwright", "index.mjs");
    if (fs.existsSync(moduleFile)) return moduleFile;
  }
  return null;
}

const playwrightModule = locatePlaywright();
if (!playwrightModule) {
  fail("Playwright não encontrado. Execute 'npm install playwright' dentro da pasta do gerador.");
}

function locateInstalledBrowser() {
  const candidates = process.platform === "win32" ? [
    path.join(process.env["PROGRAMFILES(X86)"] || "C:\\Program Files (x86)", "Microsoft", "Edge", "Application", "msedge.exe"),
    path.join(process.env.PROGRAMFILES || "C:\\Program Files", "Microsoft", "Edge", "Application", "msedge.exe"),
    path.join(process.env.PROGRAMFILES || "C:\\Program Files", "Google", "Chrome", "Application", "chrome.exe"),
    path.join(process.env["PROGRAMFILES(X86)"] || "C:\\Program Files (x86)", "Google", "Chrome", "Application", "chrome.exe"),
    path.join(process.env.LOCALAPPDATA || "", "Google", "Chrome", "Application", "chrome.exe"),
    path.join(process.env.LOCALAPPDATA || "", "Microsoft", "Edge", "Application", "msedge.exe"),
  ] : [
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  ];

  return candidates.find((candidate) => candidate && fs.existsSync(candidate)) || null;
}

const { chromium } = await import(pathToFileURL(playwrightModule).href);
const installedBrowser = locateInstalledBrowser();
const launchOptions = { headless: true };
if (installedBrowser) launchOptions.executablePath = installedBrowser;
const browser = await chromium.launch(launchOptions);
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
page.on("console", (message) => {
  if (["warning", "error"].includes(message.type())) console.error(`[navegador:${message.type()}] ${message.text()}`);
});

await page.emulateMedia({ media: "print" });
await page.goto(pathToFileURL(tempHtml).href, { waitUntil: "load" });
await page.waitForFunction(() => window.__PAGED_DONE__ || window.__BUILD_ERROR__, null, { timeout: 180000 });

const browserError = await page.evaluate(() => window.__BUILD_ERROR__ || "");
if (browserError) {
  await browser.close();
  fail(`falha durante a composição:\n${browserError}`);
}

const pageCount = await page.evaluate(() => window.__PAGE_COUNT__ || document.querySelectorAll(".pagedjs_page").length);
const overflow = await page.evaluate(() => {
  const issues = [];
  for (const element of document.querySelectorAll(".pagedjs_page table, .pagedjs_page pre, .pagedjs_page svg, .pagedjs_page img")) {
    if (element.closest(".running-header")) continue;
    const rect = element.getBoundingClientRect();
    const pageArea = element.closest(".pagedjs_area");
    if (!pageArea) continue;
    const area = pageArea.getBoundingClientRect();
    if (rect.right > area.right + 2 || rect.left < area.left - 2) {
      issues.push(`${element.tagName.toLowerCase()}: ${element.textContent?.slice(0, 60) || element.getAttribute("src") || "sem identificação"}`);
    }
  }
  return issues.slice(0, 20);
});

await page.pdf({
  path: outputFile,
  format: "A4",
  printBackground: true,
  preferCSSPageSize: true,
  displayHeaderFooter: false,
  tagged: true,
  outline: true,
});

await browser.close();

console.log(`PDF gerado: ${outputFile}`);
console.log(`Páginas: ${pageCount}`);
console.log(`Notas incorporadas: ${includedNotes.size}`);
if (overflow.length) {
  console.warn(`Avisos de largura (${overflow.length}):`);
  for (const issue of overflow) console.warn(`- ${issue}`);
} else {
  console.log("Validação de largura: sem estouros detectados.");
}
