export type TimelineItem = {
  period: string;
  title: string;
  organisation: string;
  description: string;
  detail?: string;
};

export const timeline: TimelineItem[] = [
  {
    period: "2025",
    title: "B.S. in Computer Science & Information Technology",
    organisation: "University of KwaZulu-Natal, PMB",
    description:
      "Graduated May 2025 with concentrations in Computer Systems and Artificial Intelligence.",
    detail:
      "Coursework: Data Structures & Algorithms, Machine Learning, AI, NLP, Database Systems, Software Design, OOP, Theory of Computation, Graphics & Modelling.",
  },
  {
    period: "Jul – Dec 2024",
    title: "Demonstrator — Data Structures & Algorithms (Comp201)",
    organisation: "University of KwaZulu-Natal",
    description:
      "Supported a class of 60 students through Java-based practicals, with one-on-one help on assignments, test preparation and exam revision.",
  },
];

export const skillGroups: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["Java", "Python", "TypeScript", "JavaScript", "SQL"] },
  { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { label: "Backend", items: ["Spring Boot", "FastAPI", "Django", "Next.js API routes"] },
  { label: "Databases", items: ["PostgreSQL", "MySQL", "SQLite", "Supabase"] },
  { label: "Data & AI", items: ["Scikit-learn", "XGBoost", "OpenAI / Gemini APIs"] },
  {
    label: "Security",
    items: [
      "Web app pentesting",
      "Red teaming",
      "SOC analysis / SIEM",
      "Incident response",
      "DevSecOps",
    ],
  },
  { label: "Tools", items: ["Git", "Docker", "Linux", "REST API design", "MVC", "Agile"] },
];

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  duration: string;
  file: string;
};

export const certifications: Certification[] = [
  {
    title: "Offensive Pentesting",
    issuer: "TryHackMe",
    date: "Jun 2026",
    duration: "32h",
    file: "/certificates/THM-OQXJQHRPTF.pdf",
  },
  {
    title: "SOC Level 1",
    issuer: "TryHackMe",
    date: "May 2026",
    duration: "65h 29m",
    file: "/certificates/THM-HBOYS68MOX.pdf",
  },
  {
    title: "DevSecOps",
    issuer: "TryHackMe",
    date: "Mar 2026",
    duration: "26h 45m",
    file: "/certificates/THM-3ZQ1HYBBFY.pdf",
  },
  {
    title: "Web Application Red Teaming",
    issuer: "TryHackMe",
    date: "Feb 2026",
    duration: "24h 30m",
    file: "/certificates/THM-U4OOWVKSK1.pdf",
  },
  {
    title: "Web Application Pentesting",
    issuer: "TryHackMe",
    date: "Dec 2025",
    duration: "31h 53m",
    file: "/certificates/THM-JKNPNZB9MP.pdf",
  },
];

/** Total hours across all certifications, parsed from strings like "65h 29m". */
export const totalTrainingHours = Math.floor(
  certifications.reduce((sum, { duration }) => {
    const h = Number(duration.match(/(\d+)h/)?.[1] ?? 0);
    const m = Number(duration.match(/(\d+)m/)?.[1] ?? 0);
    return sum + h + m / 60;
  }, 0)
);

export type FocusArea = {
  key: "fullstack" | "security" | "data";
  title: string;
  description: string;
  skills: string[];
};

export const focusAreas: FocusArea[] = [
  {
    key: "fullstack",
    title: "Full-stack development",
    description:
      "End-to-end web applications, from database design and REST APIs to polished, responsive interfaces.",
    skills: ["React", "Next.js", "TypeScript", "Spring Boot", "FastAPI", "PostgreSQL"],
  },
  {
    key: "security",
    title: "Cybersecurity",
    description:
      "Web application pentesting, red teaming, SOC analysis and DevSecOps. I attack my own builds, then harden them.",
    skills: ["Pentesting", "Red teaming", "SOC / SIEM", "DevSecOps", "OWASP Top 10"],
  },
  {
    key: "data",
    title: "Data & AI",
    description:
      "Machine learning models and AI APIs that turn data into predictions, analysis and genuinely useful features.",
    skills: ["Scikit-learn", "XGBoost", "Pandas", "Gemini / OpenAI"],
  },
];
