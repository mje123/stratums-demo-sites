# Stratum Demos

One Next.js project that hosts many client demo sites, each at its own URL.

## Add a new demo

1. Create a folder in `demos/`. **The folder name is the URL.**
2. Put a `page.tsx` inside it that exports a default React component.

```
demos/acme-corp/page.tsx   →   yourdomain.com/acme-corp
```

```tsx
// demos/acme-corp/page.tsx
export const metadata = { title: "Acme Corp" }; // optional: browser tab title

export default function AcmeCorp() {
  return <div style={{ background: "navy", color: "white" }}>Hello Acme</div>;
}
```

3. Commit and push. Vercel redeploys and the demo is live.

Each demo is fully independent: its own layout, colors, fonts and content.
You can add extra files (components, CSS modules, etc.) inside the demo's
folder and import them from its `page.tsx`. Images go in `public/` (for example
`public/acme-corp/logo.png` → `/acme-corp/logo.png`).

Folder names should be URL-friendly: lowercase, with hyphens, no spaces.

## Demos expire after 30 days

`demos.json` records the date each demo was created. 30 days later:

- the demo's URL returns 404 (checked hourly, no redeploy needed), and
- a daily GitHub Action (`.github/workflows/expire-demos.yml`) deletes its
  `demos/<slug>` and `public/<slug>` folders and pushes, so Vercel redeploys.

New demo folders are registered automatically on the next daily run (with that
day's date). Add an entry yourself to set the date explicitly. To keep a demo
longer, change its `created` date; to keep it forever, add `"keep": true`.
Change `expireAfterDays` to change the window for every demo. You can run the
cleanup by hand with `node scripts/expire-demos.mjs`, or from the Actions tab
("Expire old demos" → Run workflow).

## Run locally

```
npm install
npm run dev
```

Then open http://localhost:3000/demo1

## How it works

- `app/[slug]/page.tsx` is a dynamic route. At build time it finds every
  `demos/*/page.tsx` and pre-renders it.
- Unknown URLs return 404 (`app/not-found.tsx`).
- `app/page.tsx` is the minimal homepage.
