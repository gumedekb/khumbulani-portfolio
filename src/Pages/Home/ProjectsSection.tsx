import React, { useEffect, useState } from "react";

type ProjectLink = { label: string; url: string };

type Project = {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  tags: string[];
  imgUrl: string;
  links: ProjectLink[];
  // When true, imgUrl is a logo mark rendered centered on a brand color
  // instead of a full-bleed screenshot.
  logo?: boolean;
  logoBg?: string;
  // Optional status banner (e.g. "Obsolete", "Archived"). When set, a red
  // badge is shown on the card + modal and the media is dimmed to signal the
  // project is no longer live.
  status?: string;
};

const ExternalLinkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="6" y1="6" x2="18" y2="18" />
    <line x1="18" y1="6" x2="6" y2="18" />
  </svg>
);

const ProjectMedia: React.FC<{ project: Project; className: string; imgClassName?: string }> = ({ project, className, imgClassName }) => (
  <div
    className={`${className} flex items-center justify-center`}
    style={project.logo ? { backgroundColor: project.logoBg } : undefined}
  >
    <img
      src={project.imgUrl}
      alt={project.title}
      className={project.logo ? imgClassName ?? "w-[110px] h-[110px] object-contain" : "w-full h-full object-cover"}
    />
  </div>
);

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Snaccchat",
      subtitle: "Real-Time Chat App & Security Case Study",
      description:
        "A real-time messaging app with direct & group chat, presence, typing indicators and read receipts \u2014 built as a security case study, taking a deliberately vulnerable build and hardening it into a secure production version.",
      features: [
        "Real-time DMs & group chat over WebSocket/STOMP",
        "Presence, typing indicators & read receipts",
        "Pentested & hardened: AES-encrypted messages, JWT auth",
      ],
      tags: ["React 19", "Spring Boot", "Java 21", "WebSocket", "PostgreSQL", "JWT", "Pentesting"],
      imgUrl: "/img/snaccchat.svg",
      logo: true,
      logoBg: "#4f6bed",
      links: [
        { label: "Live Demo", url: "https://snaccchat-app.vercel.app/" },
        { label: "GitHub Repo", url: "https://github.com/gumedekb/snaccchat-app" },
        { label: "Security Diff", url: "https://github.com/gumedekb/snaccchat-app/compare/vulnerable...main" },
      ],
    },
    {
      title: "FifaScope",
      subtitle: "Football Prediction Dashboard",
      description:
        "A full-stack football match prediction dashboard that blends statistical machine learning with Google Gemini for intelligent, explainable match analysis.",
      features: [
        "ML-powered match outcome predictions",
        "AI match analysis & insights via Gemini",
        "Interactive, data-rich stats dashboard",
      ],
      tags: ["React", "FastAPI", "Python", "Machine Learning", "Pandas", "Gemini AI", "Tailwind CSS"],
      imgUrl: "/img/project-img1.webp",
      status: "Obsolete",
      links: [
        { label: "Live Site", url: "https://fifascope-eamk.vercel.app/" },
        { label: "GitHub Repo", url: "https://github.com/gumedekb/fifascope" },
      ],
    },
    {
      title: "TradeScope",
      subtitle: "Trading Analytics Platform",
      description:
        "A desktop trading-analytics platform for reviewing performance, replaying trades, and journaling — with live MetaTrader 5 integration.",
      features: [
        "Interactive performance dashboard",
        "Animated candlestick trade replay",
        "Rich-text journaling + MT5 sync",
      ],
      tags: ["Electron", "React", "TypeScript", "Plotly.js", "SQLite", "MetaTrader 5", "Tailwind CSS"],
      imgUrl: "/img/project-img2.png",
      links: [
        { label: "Live Site", url: "https://tradescope-eight.vercel.app/login" },
        { label: "GitHub Repo", url: "https://github.com/gumedekb/tradescope" },
      ],
    },
    {
      title: "Daily Diary App",
      subtitle: "Penetration Testing & Security Hardening",
      description:
        "A full-stack diary app I built, then penetration-tested and fully hardened — turning a vulnerable build into a secure one.",
      features: [
        "14 vulnerabilities found (3 Critical, 6 High)",
        "Fixed IDOR & broken access control",
        "Hardened, remediated production build",
      ],
      tags: ["Spring Boot", "React", "PostgreSQL", "Docker", "Pentesting", "OWASP"],
      imgUrl: "/img/daily-diary-app.webp",
      links: [
        { label: "Secure Version", url: "https://daily-diary-app-secure.vercel.app" },
        { label: "Vulnerable Repo", url: "https://github.com/gumedekb/daily-diary-app" },
      ],
    },
    {
      title: "TechBrief",
      subtitle: "AI Resume Analyzer & Career Intelligence",
      description:
        "An AI career-intelligence tool that grades job descriptions against your CV, then builds a whole workflow of insights around your applications.",
      features: [
        "CV-vs-job match scoring & gap analysis",
        "Company intel & personal skills radar",
        "AI cover letters & CV tailoring",
      ],
      tags: ["Next.js", "React", "TypeScript", "Supabase", "Gemini AI"],
      imgUrl: "/img/tech-brief.svg",
      logo: true,
      logoBg: "#2bd4c8",
      links: [
        { label: "Live Site", url: "https://tech-brief-flax.vercel.app/" },
        { label: "GitHub Repo", url: "https://github.com/gumedekb/tech-brief" },
      ],
    },
  ];

  const [selected, setSelected] = useState<Project | null>(null);

  // Close on Escape and lock body scroll while the modal is open.
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [selected]);

  const cardClass =
    "bg-bg-shade rounded-[20px] overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col border border-transparent hover:border-primary hover:-translate-y-[10px] hover:shadow-[0_15px_30px_rgba(94,59,238,0.15)] cursor-pointer group";

  return (
    <section className="py-[70px] lg:py-[100px] px-[20px] lg:px-[85px] bg-surface mt-[20px] mx-[20px] lg:mx-[85px] rounded-[40px] border border-black/5 dark:border-white/10 shadow-sm" id="projects">
      <div className="w-full max-w-[1333px] mx-auto">
        <h2 className="text-primary text-[35px] lg:text-[48px] font-bold leading-[40px] lg:leading-[58px] text-center">Projects</h2>
        <p className="text-heading text-[21.3px] font-normal leading-[32px] text-center mt-[20px] mb-[60px] max-w-[600px] mx-auto">
          Explore my latest work — tap any project to see what it does and how it's built.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {projects.map((project, index) => (
            <div
              key={index}
              role="button"
              tabIndex={0}
              onClick={() => setSelected(project)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelected(project);
                }
              }}
              className={cardClass}
            >
              <div className="relative w-full h-[220px] overflow-hidden">
                <ProjectMedia
                  project={project}
                  className={`w-full h-full [&>img]:transition-transform [&>img]:duration-500 group-hover:[&>img]:scale-110 ${project.status ? "[&>img]:grayscale [&>img]:opacity-60" : ""}`}
                />
                {project.status && (
                  <span className="absolute top-[14px] left-[14px] z-10 bg-red-600 text-white text-[11px] font-bold uppercase tracking-[1px] py-[5px] px-[12px] rounded-full shadow-md">
                    {project.status}
                  </span>
                )}
                <span className="absolute top-[14px] right-[14px] bg-primary text-white text-[12px] font-semibold py-[5px] px-[12px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                  View details
                </span>
              </div>
              <div className="p-[25px] flex flex-col gap-[14px] flex-grow">
                <div>
                  <h3 className="text-heading text-[22px] font-bold">{project.title}</h3>
                  <p className="text-primary text-[14px] font-semibold">{project.subtitle}</p>
                </div>
                <div className="flex flex-wrap gap-[10px]">
                  {project.tags.slice(0, 4).map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-primary/10 text-primary py-[5px] px-[12px] rounded-[50px] text-[13px] font-semibold">{tag}</span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="bg-primary/10 text-primary py-[5px] px-[12px] rounded-[50px] text-[13px] font-semibold">+{project.tags.length - 4}</span>
                  )}
                </div>
                <div className="flex flex-wrap gap-[16px] mt-auto pt-[8px]">
                  {project.links.map((l, i) => (
                    <a
                      key={i}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-[8px] text-primary font-semibold transition-all duration-300 hover:gap-[12px]"
                    >
                      {l.label}
                      <ExternalLinkIcon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Coming soon */}
          <div className="bg-bg-shade rounded-[20px] overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center text-center p-[40px] border border-dashed border-primary/40 min-h-[300px]">
            <div className="w-[60px] h-[60px] rounded-full bg-primary/10 text-primary flex items-center justify-center mb-[20px]">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
            </div>
            <h3 className="text-heading text-[22px] font-bold mb-[8px]">More Coming Soon</h3>
            <p className="text-darkblue text-[16px] leading-[1.5]">
              New full-stack and security projects are currently in the works — check back shortly.
            </p>
          </div>
        </div>
      </div>

      {/* Project details modal */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.title} details`}
          className="fixed inset-0 z-[200] flex items-center justify-center p-[20px] bg-black/60 backdrop-blur-sm animate-modal-fade"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[560px] max-h-[90vh] overflow-y-auto bg-surface rounded-[24px] shadow-[0_25px_60px_rgba(0,0,0,0.35)] border border-black/5 dark:border-white/10 animate-modal-pop"
          >
            <button
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute top-[16px] right-[16px] z-10 w-[40px] h-[40px] rounded-full bg-black/30 hover:bg-black/55 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
            >
              <CloseIcon />
            </button>

            {/* Banner */}
            <div className="relative">
              <ProjectMedia
                project={selected}
                className={`w-full h-[190px] ${selected.status ? "[&>img]:grayscale [&>img]:opacity-60" : ""}`}
                imgClassName="w-[96px] h-[96px] object-contain"
              />
              {selected.status && (
                <span className="absolute top-[16px] left-[16px] z-10 bg-red-600 text-white text-[12px] font-bold uppercase tracking-[1px] py-[6px] px-[14px] rounded-full shadow-md">
                  {selected.status}
                </span>
              )}
              {!selected.logo && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              )}
              <div className="absolute bottom-[18px] left-[24px] right-[24px]">
                <h3 className={`text-[26px] font-bold leading-tight ${selected.logo ? "text-white drop-shadow" : "text-white"}`}>{selected.title}</h3>
                <p className="text-white/90 text-[14px] font-semibold">{selected.subtitle}</p>
              </div>
            </div>

            {/* Body */}
            <div className="p-[28px] flex flex-col gap-[22px]">
              {/* Description callout */}
              <p className="bg-primary/5 border-l-[4px] border-primary rounded-r-[12px] py-[14px] px-[18px] text-darkblue text-[16px] leading-[1.6]">
                {selected.description}
              </p>

              {/* Top features */}
              <div>
                <h4 className="text-primary text-[13px] font-bold uppercase tracking-[1.5px] mb-[14px]">Top Features</h4>
                <ul className="flex flex-col gap-[12px]">
                  {selected.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-[14px]">
                      <span className="shrink-0 w-[28px] h-[28px] rounded-full bg-primary/12 text-primary flex items-center justify-center">
                        <CheckIcon />
                      </span>
                      <span className="text-heading text-[15px] font-medium leading-[1.4]">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div>
                <h4 className="text-primary text-[13px] font-bold uppercase tracking-[1.5px] mb-[12px]">Tech Stack</h4>
                <div className="flex flex-wrap gap-[10px]">
                  {selected.tags.map((tag, i) => (
                    <span key={i} className="bg-primary/10 text-primary py-[6px] px-[14px] rounded-[50px] text-[13px] font-semibold">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-[14px] pt-[4px]">
                {selected.links.map((l, i) => (
                  <a
                    key={i}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      i === 0
                        ? "inline-flex items-center gap-[8px] py-[12px] px-[24px] rounded-[50px] bg-primary text-white font-semibold no-underline transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_20px_rgba(94,59,238,0.35)]"
                        : "inline-flex items-center gap-[8px] py-[12px] px-[24px] rounded-[50px] border border-primary text-primary font-semibold no-underline transition-all duration-300 hover:bg-primary hover:text-white"
                    }
                  >
                    {l.label}
                    <ExternalLinkIcon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
