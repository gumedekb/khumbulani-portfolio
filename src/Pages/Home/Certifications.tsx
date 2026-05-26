import React from "react";

/**
 * Certifications component - Grid layout for professional certifications.
 */
const Certifications: React.FC = () => {
  const certificationsData = [
    {
      platform: "Coursera",
      title: "Google Data Analytics",
      description: "Comprehensive data analysis using R, SQL, and Tableau.",
      date: "Dec 2023",
      link: "#",
    },
    {
      platform: "AWS",
      title: "Cloud Practitioner",
      description: "Foundational knowledge of AWS Cloud platform and services.",
      date: "Oct 2023",
      link: "#",
    },
    {
      platform: "Udemy",
      title: "Full Stack Development",
      description: "Mastering MERN stack and modern web architectures.",
      date: "Aug 2023",
      link: "#",
    },
  ];

  return (
    <section id="Certifications" className="py-[70px] lg:py-[100px] px-[20px] lg:px-[85px] bg-white mt-[20px] mx-[20px] lg:mx-[85px] rounded-[40px] border border-black/5 shadow-sm">
      <div className="w-full max-w-[1333px] mx-auto">
        <div className="text-center mb-[60px]">
          <h2 className="text-primary text-[35px] lg:text-[48px] font-bold leading-[40px] lg:leading-[58px]">Certifications</h2>
          <p className="text-darkblue text-[18px] font-normal leading-[27px]">Professional recognitions and verified skills.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {certificationsData.map((cert, index) => (
            <div key={index} className="bg-bg-shade p-[35px] lg:p-[35px_30px] rounded-[20px] relative transition-all duration-300 hover:-translate-y-[10px] hover:border-primary border border-transparent flex flex-col hover:shadow-[0_15px_30px_rgba(94,59,238,0.1)]">
              <div className="absolute top-[20px] right-[20px] text-primary bg-primary/10 p-[8px] rounded-full">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
              </div>
              <div className="flex flex-col gap-[5px] mb-[20px]">
                <span className="font-bold text-primary uppercase tracking-[1px] text-[14px]">{cert.platform}</span>
                <span className="text-[14px] text-darkblue opacity-70">{cert.date}</span>
              </div>
              <div className="cert--body">
                <h3 className="text-heading text-[22px] font-bold mb-[15px]">{cert.title}</h3>
                <p className="text-darkblue leading-[1.5] mb-[25px] flex-grow">{cert.description}</p>
              </div>
              <div className="mt-auto">
                <a href={cert.link} className="inline-flex items-center gap-[8px] text-primary font-semibold no-underline transition-all duration-300 hover:gap-[12px]" target="_blank" rel="noopener noreferrer">
                  View Certificate
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
