import React from "react";

/**
 * Education component - Modern split layout for education history.
 */
const Education: React.FC = () => {
  const educationData = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of Technology",
      description: "Focused on software engineering, algorithms, and data structures. Graduated with honors.",
      period: "2020–2024",
    },
    {
      degree: "Information Security Diploma",
      institution: "Cyber Institute",
      description: "Specialized in network security, ethical hacking, and risk management.",
      period: "2018–2020",
    },
  ];

  return (
    <section id="Education" className="py-[70px] lg:py-[100px] px-[20px] lg:px-[85px] bg-white mt-[20px] mx-[20px] lg:mx-[85px] rounded-[40px] border border-black/5 shadow-sm">
      <div className="w-full max-w-[1333px] mx-auto text-center mb-[40px]">
        <h2 className="text-primary text-[35px] lg:text-[48px] font-bold leading-[40px] lg:leading-[58px]">Education</h2>
      </div>
      
      <div className="w-full max-w-[1333px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-[40px] lg:gap-[80px] items-center">
        <div className="education--left">
          <img src="/img/graduation.jpg" alt="Graduation" className="w-full max-w-[450px] mx-auto rounded-[30px] shadow-lg" />
        </div>
        
        <div className="education--right">
          <div className="flex flex-col gap-[25px]">
            {educationData.map((edu, index) => (
              <div key={index} className="bg-bg-shade p-[30px] rounded-[20px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] relative">
                <div className="flex justify-between items-center mb-[20px]">
                  <div className="bg-white text-primary p-[10px] rounded-[12px] flex items-center justify-center">
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
