// Deletes demos older than `expireAfterDays` (see demos.json) and registers new ones.
// Run daily by .github/workflows/expire-demos.yml; safe to run by hand: node scripts/expire-demos.mjs
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const manifestPath = path.join(root, "demos.json");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const today = new Date().toISOString().slice(0, 10);
const dayMs = 86_400_000;
const slugRe = /^[a-z0-9][a-z0-9-]*$/;

const folders = fs
  .readdirSync(path.join(root, "demos"), { withFileTypes: true })
  .filter((d) => d.isDirectory() && fs.existsSync(path.join(root, "demos", d.name, "page.tsx")))
  .map((d) => d.name);

for (const slug of folders) {
  if (!manifest.demos[slug]) {
    manifest.demos[slug] = { created: today };
    console.log(`registered ${slug} (created ${today})`);
  }
}

for (const [slug, entry] of Object.entries(manifest.demos)) {
  if (!slugRe.test(slug)) continue;
  const expired = !entry.keep && Date.now() >= Date.parse(`${entry.created}T00:00:00Z`) + manifest.expireAfterDays * dayMs;
  if (!expired && folders.includes(slug)) continue;
  for (const dir of [path.join(root, "demos", slug), path.join(root, "public", slug)]) {
    if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true, force: true });
  }
  delete manifest.demos[slug];
  console.log(expired ? `deleted ${slug} (created ${entry.created})` : `removed ${slug} from manifest (folder gone)`);
}

manifest.demos = Object.fromEntries(Object.entries(manifest.demos).sort(([a], [b]) => a.localeCompare(b)));
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
