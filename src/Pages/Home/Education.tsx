import React from "react";

/**
 * Education component - Modern split layout for education history.
 */
const Education: React.FC = () => {
  const educationData = [
    {
      degree: "B.S. in Computer Science and IT",
      institution: "University of KwaZulu-Natal",
      description: "Graduated May 2025 with concentrations in Computer Systems and AI. Coursework spanned Data Structures & Algorithms, Machine Learning, NLP, Database Systems, and Software Design.",
      period: "Graduated 2025",
    },
    {
      degree: "Demonstrator — Comp201 (Data Structures & Algorithms)",
      institution: "University of KwaZulu-Natal",
      description: "Supported a class of 60 students during Java-based practicals, providing one-on-one help with assignments, test preparation, and exam revision.",
      period: "2024",
    },
  ];

  return (
    <section id="Education" className="py-[70px] lg:py-[100px] px-[20px] lg:px-[85px] bg-surface mt-[20px] mx-[20px] lg:mx-[85px] rounded-[40px] border border-black/5 dark:border-white/10 shadow-sm">
      <div className="w-full max-w-[1333px] mx-auto text-center mb-[40px]">
        <h2 className="text-primary text-[35px] lg:text-[48px] font-bold leading-[40px] lg:leading-[58px]">Education</h2>
      </div>
      
      <div className="w-full max-w-[1333px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-[40px] lg:gap-[80px] items-center">
        <div className="education--left flex justify-center">
          <div className="p-2 border-2 border-primary rounded-[30px] w-full max-w-[450px]">
            <div className="p-4 border-4 border-primary rounded-[30px] overflow-hidden">
              <img src="/img/graduation.jpg" alt="Graduation" className="w-full rounded-[20px] shadow-lg" />
            </div>
          </div>
        </div>
        
        <div className="education--right">
          <div className="flex flex-col gap-[25px]">
            {educationData.map((edu, index) => (
              <div key={index} className="bg-bg-shade p-[30px] rounded-[20px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] relative">
                <div className="flex justify-between items-center mb-[20px]">
                  <div className="bg-surface text-primary p-[10px] rounded-[12px] flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v5"/></svg>
                  </div>
                  <span className="bg-primary text-white py-[5px] px-[15px] rounded-[50px] text-[14px] font-semibold">{edu.period}</span>
                </div>
                <div className="education--card--body">
                  <h3 className="text-heading text-[22px] font-bold mb-[8px]">{edu.degree}</h3>
                  <h4 className="text-primary text-[18px] font-semibold mb-[12px]">{edu.institution}</h4>
                  <p className="text-darkblue leading-[1.6]">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
