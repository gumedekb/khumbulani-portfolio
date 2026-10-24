export type ProjectLink = { label: string; url: string };

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  /** Display date, e.g. "Aug 2026". Omit when unknown. */
  date?: string;
  description: string;
  features: string[];
  tags: string[];
  image: string;
  /**
   * When set, `image` is a logo mark rendered centered on this brand color
   * instead of a full-bleed image.
   */
  logoBg?: string;
  /** Padding around the logo as a % of the tile (default 22). Use 0 for logos with built-in padding. */
  logoInset?: number;
  /** Two colors for the project's banner gradient. */
  gradient: [string, string];
  /** Optional status (e.g. "Obsolete") — the project is shown as no longer live. */
  status?: string;
  featured?: boolean;
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "snaccchat",
    gradient: ["#4f6bed", "#7c3aed"],
    title: "Snaccchat",
    subtitle: "Real-time chat app & security case study",
    date: "Aug 2026",
    description:
      "A real-time messaging app with direct & group chat, presence, typing indicators and read receipts — built as a security case study, taking a deliberately vulnerable build and hardening it into a secure production version.",
    features: [
      "Real-time DMs & group chat over WebSocket/STOMP",
      "Presence, typing indicators & read receipts",
      "Pentested & hardened: AES-encrypted messages, JWT auth",
    ],
    tags: ["React 19", "Spring Boot", "Java 21", "WebSocket", "PostgreSQL", "JWT", "Pentesting"],
    image: "/img/snaccchat.svg",
    logoBg: "#4f6bed",
    featured: true,
    links: [
      { label: "Live demo", url: "https://snaccchat-app.vercel.app/" },
      { label: "Source", url: "https://github.com/gumedekb/snaccchat-app" },
      { label: "Security diff", url: "https://github.com/gumedekb/snaccchat-app/compare/vulnerable...main" },
    ],
  },
  {
    slug: "tech-brief",
    gradient: ["#14b8a6", "#0284c7"],
    title: "Tech Brief",
    subtitle: "AI career intelligence tool",
    date: "Jul 2026",
    description:
      "A web app for job seekers: paste a job description and instantly see how well your CV matches it — with a score, matched and missing skills, and AI-written cover letters and CV suggestions.",
    features: [
      "CV-vs-job match scoring & gap analysis",
      "Company intel & personal skills radar",
      "AI cover letters & CV tailoring",
    ],
    tags: ["Next.js", "React", "TypeScript", "Supabase", "Gemini AI"],
    image: "/img/tech-brief.svg",
    logoBg: "#2bd4c8",
    logoInset: 0,
    featured: true,
    links: [
      { label: "Live site", url: "https://tech-brief-flax.vercel.app/" },
      { label: "Source", url: "https://github.com/gumedekb/tech-brief" },
    ],
  },
  {
    slug: "tradescope",
    gradient: ["#1e1b4b", "#2563eb"],
    title: "TradeScope",
    subtitle: "Trading analytics platform",
    date: "Sep 2025",
    description:
      "Helps traders review their performance by syncing data from MetaTrader 5, replaying past trades on a chart, and journaling notes linked directly to specific trades.",
    features: [
      "Interactive performance dashboard",
      "Animated candlestick trade replay",
      "Rich-text journaling + MT5 sync",
    ],
    tags: ["Electron", "React", "TypeScript", "Plotly.js", "SQLite", "MetaTrader 5", "Tailwind CSS"],
    image: "/img/project-img2.png",
    featured: true,
    links: [
      { label: "Live site", url: "https://tradescope-eight.vercel.app/login" },
      { label: "Source", url: "https://github.com/gumedekb/tradescope" },
    ],
  },
  {
    slug: "daily-diary",
    gradient: ["#f97316", "#b91c1c"],
    title: "Daily Diary",
    subtitle: "Penetration testing & security hardening",
    description:
      "A full-stack diary app I built, then penetration-tested and fully hardened — turning a vulnerable build into a secure one.",
    features: [
      "14 vulnerabilities found (3 Critical, 6 High)",
      "Fixed IDOR & broken access control",
      "Hardened, remediated production build",
    ],
    tags: ["Spring Boot", "React", "PostgreSQL", "Docker", "Pentesting", "OWASP"],
    image: "/img/daily-diary-app.webp",
    links: [
      { label: "Secure version", url: "https://daily-diary-app-secure.vercel.app" },
      { label: "Vulnerable repo", url: "https://github.com/gumedekb/daily-diary-app" },
    ],
  },
  {
    slug: "fifascope",
    gradient: ["#a16207", "#1c1917"],
    title: "FifaScope",
    subtitle: "Football prediction dashboard",
    description:
      "A full-stack football match prediction dashboard that blends statistical machine learning with Google Gemini for intelligent, explainable match analysis.",
    features: [
      "ML-powered match outcome predictions",
      "AI match analysis & insights via Gemini",
      "Interactive, data-rich stats dashboard",
    ],
    tags: ["React", "FastAPI", "Python", "Machine Learning", "Pandas", "Gemini AI", "Tailwind CSS"],
    image: "/img/project-img1.webp",
    status: "Obsolete",
    links: [
      { label: "Live site", url: "https://fifascope-eamk.vercel.app/" },
      { label: "Source", url: "https://github.com/gumedekb/fifascope" },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
