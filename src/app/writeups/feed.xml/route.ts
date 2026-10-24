import { getWriteups } from "@/lib/writeups";
import { SITE } from "@/lib/site";

// Generated once at build time.
export const dynamic = "force-static";

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export async function GET() {
  const writeups = await getWriteups();

  const items = writeups
    .map((w) => {
      const url = `${SITE.url}/writeups/${w.slug}`;
      return `    <item>
      <title>${escape(w.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${new Date(`${w.date}T00:00:00Z`).toUTCString()}</pubDate>
      <description>${escape(w.summary)}</description>
${w.tags.map((t) => `      <category>${escape(t)}</category>`).join("\n")}
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(`${SITE.name} — Writeups`)}</title>
    <link>${SITE.url}/writeups</link>
    <atom:link href="${SITE.url}/writeups/feed.xml" rel="self" type="application/rss+xml" />
    <description>Writeups on full-stack development and web application security.</description>
    <language>en</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
