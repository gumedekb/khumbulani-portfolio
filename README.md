# Khumbulani Gumede — Portfolio & Writeups

Personal site of Khumbulani Gumede: full-stack projects plus security writeups on building, pentesting and hardening them.

Live at [khumbulani.vercel.app](https://khumbulani.vercel.app).

Built with Next.js (App Router), React, TypeScript, Tailwind CSS and MDX.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

The contact form sends email through [EmailJS](https://www.emailjs.com). Put these in `.env.local` (and in the Vercel project settings):

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | Notification sent to my inbox |
| `NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID` | Optional thank-you auto-reply to the visitor |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key |

Without them, the form falls back to opening the visitor's email client.

## Content

| What | Where |
| --- | --- |
| Projects | `src/lib/projects.ts` |
| Education, skills, certifications | `src/lib/resume.ts` |
| Contact details, navigation | `src/lib/site.ts` |
| Writeups | `src/content/writeups/*.mdx` |

### Writing a writeup

Add an `.mdx` file to `src/content/writeups/`. The file name becomes the URL (`/writeups/<file-name>`). Start it with its metadata:

```mdx
export const metadata = {
  title: "My writeup",
  summary: "One or two sentences shown on cards and in search results.",
  date: "2026-10-24",
  tags: ["Pentesting"],
  project: "snaccchat", // optional: links the writeup and the project page
  draft: true,          // optional: shown in `npm run dev` only
};

Your content in Markdown…
```

Besides normal Markdown (tables, code blocks with syntax highlighting and `title="File.java"`), these components are available without importing them:

- `<Callout type="info | warning | success" title="…">…</Callout>`
- `<Finding title="…" severity="critical | high | medium | low" fix={<>…</>}>…</Finding>`
- `<StatGrid><Stat value="14" label="Vulnerabilities" tone="critical" /></StatGrid>`
- `<SeverityBadge level="high" />`

Drafts are hidden from production builds. To preview them in a production build, run `SHOW_DRAFTS=1 npm run build`.

The writeups also publish an RSS feed at `/writeups/feed.xml`.
