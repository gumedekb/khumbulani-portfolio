import React from "react";

/**
 * Certifications component - TryHackMe learning path completions.
 * Each card shows a live preview of the certificate PDF and links to
 * the full document.
 */
const Certifications: React.FC = () => {
  const certificationsData = [
    {
      platform: "TryHackMe",
      title: "Offensive Pentesting",
      description: "Hands-on offensive security: exploitation, privilege escalation, and post-exploitation across realistic targets.",
      date: "Jun 2026",
      duration: "32 hrs",
      file: "/certificates/THM-OQXJQHRPTF.pdf",
    },
    {
      platform: "TryHackMe",
      title: "SOC Level 1",
      description: "Blue-team fundamentals: threat detection, SIEM analysis, digital forensics, and incident response.",
      date: "May 2026",
      duration: "65 hrs",
      file: "/certificates/THM-HBOYS68MOX.pdf",
    },
    {
      platform: "TryHackMe",
      title: "DevSecOps",
      description: "Security woven into the CI/CD pipeline — secure SDLC, automation, and vulnerability management.",
      date: "Mar 2026",
      duration: "27 hrs",
      file: "/certificates/THM-3ZQ1HYBBFY.pdf",
    },
    {
      platform: "TryHackMe",
      title: "Web Application Red Teaming",
      description: "Adversary-simulation techniques for attacking modern web applications end to end.",
      date: "Feb 2026",
      duration: "25 hrs",
      file: "/certificates/THM-U4OOWVKSK1.pdf",
    },
    {
      platform: "TryHackMe",
      title: "Web Application Pentesting",
      description: "Methodical web application penetration testing, from reconnaissance through exploitation of the OWASP Top 10.",
      date: "Dec 2025",
      duration: "32 hrs",
      file: "/certificates/THM-JKNPNZB9MP.pdf",
    },
  ];

  return (
    <section id="Certifications" className="py-[70px] lg:py-[100px] px-[20px] lg:px-[85px] bg-surface mt-[20px] mx-[20px] lg:mx-[85px] rounded-[40px] border border-black/5 dark:border-white/10 shadow-sm">
      <div className="w-full max-w-[1333px] mx-auto">
        <div className="text-center mb-[60px]">
          <h2 className="text-primary text-[35px] lg:text-[48px] font-bold leading-[40px] lg:leading-[58px]">Certifications</h2>
          <p className="text-darkblue text-[18px] font-normal leading-[27px]">Professional recognitions and verified skills.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {certificationsData.map((cert, index) => (
            <a
              key={index}
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-bg-shade rounded-[20px] overflow-hidden no-underline relative transition-all duration-300 hover:-translate-y-[10px] hover:border-primary border border-transparent flex flex-col hover:shadow-[0_15px_30px_rgba(94,59,238,0.15)] group"
            >
              {/* Certificate preview */}
              <div className="relative w-full h-[190px] bg-white overflow-hidden border-b border-black/5 dark:border-white/10">
                <object
                  data={`${cert.file}#page=1&toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                  type="application/pdf"
                  aria-label={`${cert.title} certificate preview`}
                  className="w-full h-[270px] pointer-events-none"
                >
                  <div className="w-full h-full flex items-center justify-center text-darkblue text-[14px]">
                    Certificate preview unavailable
                  </div>
                </object>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary text-white text-[14px] font-semibold py-[8px] px-[16px] rounded-[50px] shadow-lg">
                    View Certificate
                  </span>
                </div>
              </div>

              <div className="p-[30px] flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-[15px]">
                  <span className="font-bold text-primary uppercase tracking-[1px] text-[14px]">{cert.platform}</span>
                  <span className="text-[13px] text-darkblue opacity-70">{cert.date} · {cert.duration}</span>
                </div>
                <h3 className="text-heading text-[22px] font-bold mb-[12px]">{cert.title}</h3>
                <p className="text-darkblue leading-[1.5] flex-grow">{cert.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
