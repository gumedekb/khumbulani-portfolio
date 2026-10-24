import fs from "node:fs/promises";
import path from "node:path";
import GithubSlugger from "github-slugger";

/**
 * Writeups are MDX files in src/content/writeups. Each one exports its
 * metadata, e.g.
 *
 *   export const metadata = {
 *     title: "…",
 *     summary: "…",
 *     date: "2026-10-24",
 *     tags: ["Pentesting"],
 *     project: "daily-diary", // optional: slug from src/lib/projects.ts
 *     draft: true,            // optional: only shown in `npm run dev`
 *   };
 *
 * Adding a writeup is just dropping a new .mdx file into that folder.
 */
export type WriteupMeta = {
  title: string;
  summary: string;
  date: string;
  tags: string[];
  project?: string;
  draft?: boolean;
};

export type Heading = { id: string; text: string };

export type Writeup = WriteupMeta & {
  slug: string;
  readingMinutes: number;
  headings: Heading[];
};

const DIR = path.join(process.cwd(), "src/content/writeups");

// Drafts are visible while developing (`npm run dev`) but not in production,
// unless the build is run with SHOW_DRAFTS=1 to preview them.
const SHOW_DRAFTS = process.env.NODE_ENV !== "production" || process.env.SHOW_DRAFTS === "1";

function readingMinutes(source: string) {
  const words = source
    .replace(/export const metadata[\s\S]*?};/, "")
    .replace(/<[^>]+>/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

/** `## Heading` lines outside code fences, with the ids rehype-slug gives them. */
function extractHeadings(source: string): Heading[] {
  const slugger = new GithubSlugger();
  const headings: Heading[] = [];
  let inFence = false;
  for (const line of source.split("\n")) {
    if (line.trimStart().startsWith("```")) inFence = !inFence;
    if (inFence) continue;
    const match = /^##\s+(.+?)\s*$/.exec(line);
    if (!match) continue;
    const text = match[1].replace(/`([^`]+)`/g, "$1").replace(/\*\*?([^*]+)\*\*?/g, "$1");
    headings.push({ id: slugger.slug(text), text });
  }
  return headings;
}

async function load(slug: string): Promise<Writeup> {
  const { metadata } = (await import(`@/content/writeups/${slug}.mdx`)) as { metadata: WriteupMeta };
  const source = await fs.readFile(path.join(DIR, `${slug}.mdx`), "utf8");
  return { ...metadata, slug, readingMinutes: readingMinutes(source), headings: extractHeadings(source) };
}

/** All visible writeups, newest first. */
export async function getWriteups(): Promise<Writeup[]> {
  const files = (await fs.readdir(DIR)).filter((f) => f.endsWith(".mdx"));
  const all = await Promise.all(files.map((f) => load(f.replace(/\.mdx$/, ""))));
  return all
    .filter((w) => SHOW_DRAFTS || !w.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export async function getWriteup(slug: string): Promise<Writeup | undefined> {
  return (await getWriteups()).find((w) => w.slug === slug);
}

export async function getWriteupForProject(projectSlug: string): Promise<Writeup | undefined> {
  return (await getWriteups()).find((w) => w.project === projectSlug);
}

/** "2026-10-24" -> "24 Oct 2026" (fixed locale/time zone so builds are deterministic). */
export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
