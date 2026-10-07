// Bring Music Prism's room up to date with the app's own marketing sources.
//
//   node scripts/sync-musicprism.mjs [path to the MusicPrism repo]
//
// The app repo (default ~/dev/MusicPrism/musicprism) captures every screenshot
// from a real build (capture-shots.sh) and draws every chord diagram with the
// app's own renderers (generate-figures.mjs). This copies the results in:
//
//   - each capture, light and dark: the 1600px copy hangs on the wall, the
//     full 2480px copy is fetched only when the viewer opens it
//   - the two printed sheets, converted from the masters' PNGs
//   - the diagram blocks between GENERATED markers in its marketing/site/index.html,
//     as includes under src/_includes/musicprism/
//   - the latest release's version and size, for the closing wall
//
// Run it after the app repo reshoots its plates or ships a release, then rebuild.
// Nothing here edits a capture or a diagram; the wall drawing is only reordered
// so each row mixes fretboards and keyboards.

import { execFileSync } from "node:child_process";
import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const app = process.argv[2] || join(homedir(), "dev/MusicPrism/musicprism");
const site = join(app, "marketing/site");
const masters = join(app, "marketing/website-workspace/masters");
const here = new URL("..", import.meta.url).pathname;
const img = join(here, "src/assets/img");
const includes = join(here, "src/_includes/musicprism");
const shown = (p) => p.replace(homedir(), "~");

if (!existsSync(join(site, "index.html"))) {
  console.error(`No Music Prism site at ${site}`);
  process.exit(1);
}

const release = JSON.parse(readFileSync(join(app, "releases.json"), "utf8")).releases.at(-1);

const sidecar = (file, from, how) =>
  writeFileSync(`${file}.json`, JSON.stringify({
    prompt: `Origin: real capture from Music Prism ${release.version}, ${how} ${shown(from)}. Not generated.`,
    createdAt: statSync(from).mtime.toISOString(),
  }, null, 2) + "\n");

// Captures: base frames and the frames the plates cycle through.
const shots = [
  "inversions-guitar", "inversions-piano",
  ...["guitar", "piano"].flatMap((i) =>
    ["major", "maj7", "minor", "m7", "dim", "dom7", "sus2", "sus4"].map((q) => `quality-${i}-${q}`)),
  "identify-complex", "identify-door",
  "caged", "caged-C", "caged-A", "caged-G", "caged-E", "caged-D",
  "progression-blues", "progression-doowop",
  "scales", "scales-triad", "scales-pent",
  "keys-nashville",
];
let copied = 0;
for (const name of shots) {
  for (const theme of ["", "-dark"]) {
    const pairs = [
      [`${name}${theme}-1600.webp`, `musicprism-${name}${theme}.webp`],
      [`${name}${theme}.webp`, `musicprism-${name}${theme}-full.webp`],
    ];
    for (const [from, to] of pairs) {
      const src = join(site, "images", from);
      copyFileSync(src, join(img, to));
      sidecar(join(img, to), src, "copied from");
      copied++;
    }
  }
}

// Printed sheets: paper, so one version for both themes.
for (const sheet of ["printed-guitar", "printed-piano"]) {
  const src = join(masters, `${sheet}.png`);
  const wall = join(img, `musicprism-${sheet}.webp`);
  const full = join(img, `musicprism-${sheet}-full.webp`);
  execFileSync("cwebp", ["-quiet", "-q", "82", "-resize", "900", "0", src, "-o", wall]);
  execFileSync("cwebp", ["-quiet", "-q", "86", src, "-o", full]);
  sidecar(wall, src, "a sheet printed from the app, converted at 900px from");
  sidecar(full, src, "a sheet printed from the app, converted at full resolution from");
  copied += 2;
}

// Diagram blocks, verbatim except for the wall drawing's order.
const page = readFileSync(join(site, "index.html"), "utf8");
const blocks = {};
for (const m of page.matchAll(/<!-- GENERATED:([\w-]+) [^>]*-->\n?([\s\S]*?)<!-- \/GENERATED:\1 -->/g)) {
  if (m[1] !== "tokens") blocks[m[1]] = m[2].trim();
}

// The app's own sheet runs every guitar chord, then every keyboard, then the
// smaller fretboards. On a wall cropped to a few rows that is all guitar, so
// deal them out two fretboards, a keyboard, two fretboards, and renumber the
// ink-in order to match.
{
  const figs = blocks["hero-sheet"].match(/<figure[\s\S]*?<\/figure>/g);
  const keys = figs.filter((f) => f.includes("fig-keys"));
  const wide = figs.filter((f) => !f.includes("fig-keys") && f.includes("--w:180"));
  const narrow = figs.filter((f) => !f.includes("fig-keys") && !f.includes("--w:180"));
  const dealt = [];
  while (keys.length || wide.length || narrow.length) {
    for (const f of [wide.shift(), narrow.shift(), keys.shift(), wide.shift(), narrow.shift()]) if (f) dealt.push(f);
  }
  blocks["hero-sheet"] = blocks["hero-sheet"].replace(
    /<figure[\s\S]*<\/figure>/,
    dealt.map((f, i) => f.replace(/--i:\d+/, `--i:${i}`)).join("\n"));
}

mkdirSync(includes, { recursive: true });
const stamp = `Drawn by Music Prism's own renderers (marketing/website-workspace/generate-figures.mjs), copied by scripts/sync-musicprism.mjs from ${shown(join(site, "index.html"))}. Re-run the script; don't edit by hand.`;
for (const [name, html] of Object.entries(blocks)) {
  writeFileSync(join(includes, `${name}.html`), `{# ${stamp} #}\n${html}\n`);
}

// The release on the closing wall.
const data = join(here, "src/musicprism/musicprism.json");
const room = JSON.parse(readFileSync(data, "utf8"));
room.release = { version: release.version, megabytes: (release.dmg_size / 1e6).toFixed(1) };
writeFileSync(data, JSON.stringify(room, null, 2) + "\n");

console.log(`Music Prism ${release.version}: ${copied} images, ${Object.keys(blocks).length} diagram blocks.`);
