// Builds a relative-path, memory-routed copy of the site for static hosts that
// cannot serve SPA routes (shared preview pages). Output: dist/preview
import { execSync } from "node:child_process";
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative, resolve } from "node:path";

const out = resolve("dist/preview");
execSync("pnpm exec vite build --config vite.preview.config.ts", {
  stdio: "inherit",
  env: { ...process.env, VITE_PREVIEW: "1" },
});

const walk = dir =>
  readdirSync(dir).flatMap(name => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });

const rewrite = (file, pairs) => {
  let text = readFileSync(file, "utf8");
  const before = text;
  for (const [from, to] of pairs) text = text.split(from).join(to);
  if (text !== before) writeFileSync(file, text);
};

rewrite(join(out, "index.html"), [
  ['href="/', 'href="./'],
  ['src="/', 'src="./'],
  ['content="/site-assets', 'content="./site-assets'],
]);
rewrite(join(out, "fonts", "fonts.css"), [["url(/fonts/", "url(./"]]);
for (const file of walk(join(out, "assets")).filter(f => f.endsWith(".js"))) {
  rewrite(file, [
    ['"/manus-storage/', '"./manus-storage/'],
    ['"/site-assets/', '"./site-assets/'],
    ['"/assets/logo.png', '"./assets/logo.png'],
  ]);
}

// Fragment page for hosts that wrap the page in their own document skeleton.
const html = readFileSync(join(out, "index.html"), "utf8");
const head = [
  ...html.matchAll(
    /<(?:link|script)[^>]*(?:href|src)="\.\/[^"]+"[^>]*>(?:<\/script>)?/g
  ),
].map(m => m[0]);
const fragment = [
  "<title>Semanoor Website Preview</title>",
  '<meta name="description" content="Private preview of the redesigned Semanoor website, Arabic and English." />',
  ...head,
  "<style>:root{color-scheme:dark;background:#0c1a38}body{margin:0}</style>",
  '<div id="root"></div>',
].join("\n");
writeFileSync(join(out, "page.html"), fragment);

const files = walk(out)
  .map(f => relative(out, f))
  .filter(
    f =>
      !["index.html", "page.html", "files.json", ".gitkeep"].includes(f) &&
      !/manus-storage\/client-\d+_/.test(f)
  );
writeFileSync(join(out, "files.json"), JSON.stringify(files));
const bytes = files.reduce((n, f) => n + statSync(join(out, f)).size, 0);
console.log(
  `preview ready: ${files.length} files, ${(bytes / 1e6).toFixed(1)} MB`
);
