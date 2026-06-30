import React from "react";

type SingleLinkProject = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  imgUrl: string;
  link: string;
};

type MultiLinkProject = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  imgUrl: string;
  links: { label: string; url: string }[];
};

type Project = SingleLinkProject | MultiLinkProject;

const ExternalLinkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "FifaScope",
      subtitle: "Football Prediction Dashboard",
      description:
        "A full-stack football match prediction dashboard combining statistical machine learning with Generative AI (Google Gemini) for intelligent match analysis and insights.",
      tags: ["React", "FastAPI", "Python", "Gemini AI"],
      imgUrl: "/img/project-img1.webp",
      link: "https://fifascope-eamk.vercel.app/",
    },
    {
      title: "TradeScope",
      subtitle: "Trading Analytics Platform",
      description:
        "A full-featured trading analytics platform with an interactive performance dashboard, animated candlestick trade replay, a rich-text journaling workspace, and MetaTrader 5 integration.",
      tags: ["Electron", "React", "Plotly.js", "SQLite"],
      imgUrl: "/img/project-img2.png",
      link: "https://tradescope-eight.vercel.app/login",
    },
    {
      title: "Daily Diary App",
      subtitle: "Penetration Testing & Security Hardening",
      description:
        "Built a full-stack diary application then conducted a penetration test uncovering 14 vulnerabilities — 3 Critical, 6 High, 4 Medium — including broken access control, IDOR, cleartext passwords, and missing rate limiting. All findings were remediated in the hardened version.",
      tags: ["Spring Boot", "React", "PostgreSQL", "Docker", "Pentesting", "OWASP"],
      imgUrl: "/img/daily-diary-app.webp",
      links: [
        { label: "Secure Version", url: "https://daily-diary-app-secure.vercel.app" },
        { label: "Vulnerable Repo", url: "https://github.com/gumedekb/daily-diary-app" },
      ],
    },
  ];

  const cardClass =
    "bg-bg-shade rounded-[20px] overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col border border-transparent hover:border-primary hover:-translate-y-[10px] hover:shadow-[0_15px_30px_rgba(94,59,238,0.15)] no-underline group";

  return (
    <section className="py-[70px] lg:py-[100px] px-[20px] lg:px-[85px] bg-surface mt-[20px] mx-[20px] lg:mx-[85px] rounded-[40px] border border-black/5 dark:border-white/10 shadow-sm" id="projects">
      <div className="w-full max-w-[1333px] mx-auto">
        <h2 className="text-primary text-[35px] lg:text-[48px] font-bold leading-[40px] lg:leading-[58px] text-center">Projects</h2>
        <p className="text-heading text-[21.3px] font-normal leading-[32px] text-center mt-[20px] mb-[60px] max-w-[600px] mx-auto">
          Explore my latest work, ranging from full-stack applications to AI-powered tools.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {projects.map((project, index) =>
            "link" in project ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
                key={index}
              >
                <div className="w-full h-[220px] overflow-hidden">
                  <img src={project.imgUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-[25px] flex flex-col gap-[12px] flex-grow">
                  <div>
                    <h3 className="text-heading text-[22px] font-bold">{project.title}</h3>
                    <p className="text-primary text-[14px] font-semibold">{project.subtitle}</p>
                  </div>
                  <p className="text-darkblue text-[16px] leading-[1.5] mb-[10px]">{project.description}</p>
                  <div className="flex flex-wrap gap-[10px]">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-primary/10 text-primary py-[5px] px-[12px] rounded-[50px] text-[13px] font-semibold">{tag}</span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-[8px] text-primary font-semibold mt-auto pt-[8px] transition-all duration-300 group-hover:gap-[12px]">
                    Visit Live Site
                    <ExternalLinkIcon />
                  </span>
                </div>
              </a>
            ) : (
              <div className={cardClass} key={index}>
                <div className="w-full h-[220px] overflow-hidden">
                  <img src={project.imgUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-[25px] flex flex-col gap-[12px] flex-grow">
                  <div>
                    <h3 className="text-heading text-[22px] font-bold">{project.title}</h3>
                    <p className="text-primary text-[14px] font-semibold">{project.subtitle}</p>
                  </div>
                  <p className="text-darkblue text-[16px] leading-[1.5] mb-[10px]">{project.description}</p>
                  <div className="flex flex-wrap gap-[10px]">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-primary/10 text-primary py-[5px] px-[12px] rounded-[50px] text-[13px] font-semibold">{tag}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-[16px] mt-auto pt-[8px]">
                    {project.links.map((l, i) => (
                      <a
                        key={i}
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-[8px] text-primary font-semibold transition-all duration-300 hover:gap-[12px]"
                      >
                        {l.label}
                        <ExternalLinkIcon />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )
          )}

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
    </section>
  );
};

export default ProjectsSection;
