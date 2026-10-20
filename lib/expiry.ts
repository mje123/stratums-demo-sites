import manifest from "@/demos.json";

// demos.json records when each demo was made. Demos expire `expireAfterDays` after
// that date unless marked `keep`. scripts/expire-demos.mjs deletes expired folders daily;
// this check makes an expired URL 404 right away, even before that cleanup runs.
const demos: Record<string, { created: string; keep?: boolean }> = manifest.demos;

export function isExpired(slug: string, now = new Date()) {
  const entry = demos[slug];
  if (!entry || entry.keep) return false;
  const expires = Date.parse(`${entry.created}T00:00:00Z`) + manifest.expireAfterDays * 86_400_000;
  return now.getTime() >= expires;
}
