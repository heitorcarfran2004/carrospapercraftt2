// One-off image downscaling for performance.
// Originals are backed up in /image-backup before running this.
//
//   node scripts/resize-images.mjs
//
// - Carousel images (public/carrosseis): max 800px wide
// - Hero & benefit images (src/assets):  max 1200px wide
// Aspect ratio is preserved and images are never enlarged.
import { readdir, readFile, writeFile, stat } from "node:fs/promises";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = fileURLToPath(new URL("..", import.meta.url));

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

async function resize(file, maxWidth) {
  const ext = extname(file).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) return null;

  const before = (await stat(file)).size;
  const input = await readFile(file);
  const img = sharp(input);
  const meta = await img.metadata();
  if (!meta.width || meta.width <= maxWidth) return null; // already small enough

  let pipeline = sharp(input).resize({ width: maxWidth, withoutEnlargement: true });
  pipeline =
    ext === ".png"
      ? pipeline.png({ quality: 82, compressionLevel: 9 })
      : pipeline.jpeg({ quality: 82, mozjpeg: true });

  const output = await pipeline.toBuffer();
  await writeFile(file, output);
  return { before, after: output.length, w: meta.width };
}

async function run(relDir, maxWidth) {
  const dir = join(ROOT, relDir);
  const files = await walk(dir);
  let totalBefore = 0;
  let totalAfter = 0;
  let changed = 0;
  for (const f of files) {
    const r = await resize(f, maxWidth);
    if (r) {
      totalBefore += r.before;
      totalAfter += r.after;
      changed++;
    }
  }
  const kb = (n) => (n / 1024).toFixed(0);
  console.log(
    `${relDir}: ${changed} imagens  ${kb(totalBefore)}KB -> ${kb(totalAfter)}KB ` +
      `(-${(100 - (totalAfter / totalBefore) * 100 || 0).toFixed(0)}%)`,
  );
}

await run("public/carrosseis", 800);
await run("src/assets", 1200);
console.log("Pronto.");
