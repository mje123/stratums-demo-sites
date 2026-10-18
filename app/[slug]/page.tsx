import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";

// Every folder in /demos with a page.tsx becomes a URL: /demos/acme/page.tsx -> /acme
const DEMOS_DIR = path.join(process.cwd(), "demos");

function getSlugs() {
  return fs
    .readdirSync(DEMOS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(DEMOS_DIR, d.name, "page.tsx")))
    .map((d) => d.name);
}

// Pre-render every demo at build time; any other URL returns 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return getSlugs().map((slug) => ({ slug }));
}

async function loadDemo(slug: string) {
  try {
    return await import(`@/demos/${slug}/page`);
  } catch {
    notFound();
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const demo = await loadDemo(slug);
  return demo.metadata ?? { title: slug };
}

export default async function DemoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { default: Demo } = await loadDemo(slug);
  return <Demo />;
}
