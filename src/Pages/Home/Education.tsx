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
    <section id="Education" className="py-[70px] lg:py-[100px] px-[20px] lg:px-[85px] bg-bg-shade">
      <div className="w-full max-w-[1333px] mx-auto">
        <p className="text-primary font-bold uppercase tracking-[2px] mb-[20px] text-base">Learning Path</p>
      </div>
      <div className="w-full max-w-[1333px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-[40px] lg:gap-[80px] items-center">
        <div className="education--left">
          <div className="education--illustration">
            <div className="w-full max-w-[450px] mx-auto">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#5E3BEE" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87.1,-15.7,85.5,-0.9C83.9,13.8,77.4,27.7,68.7,40C60,52.3,49.1,63.1,36,70.6C22.9,78.1,7.6,82.4,-8.1,81.1C-23.8,79.7,-39.9,72.7,-53.4,63.1C-66.9,53.5,-77.8,41.2,-83.4,27C-89,12.8,-89.3,-3.3,-84.9,-17.7C-80.5,-32.1,-71.4,-44.8,-59.8,-52.7C-48.2,-60.6,-34.1,-63.7,-20.7,-70.9C-7.3,-78.1,5.3,-89.4,20.5,-90.7C35.8,-92,49.7,-83.3,44.7,-76.4Z" transform="translate(100 100)" />
                <path fill="white" d="M70,80 L130,80 L130,90 C130,110 100,120 70,90 Z" transform="translate(15 20) scale(0.6)" />
                <path fill="white" d="M100,50 L140,70 L100,90 L60,70 Z" transform="translate(15 20) scale(0.6)" />
              </svg>
            </div>
          </div>
        </div>
        <div className="education--right">
          <h2 className="text-heading text-[35px] lg:text-[48px] font-bold leading-[40px] lg:leading-[58px]">My <span className="text-primary">Education</span></h2>
          <div className="flex flex-col gap-[25px] mt-[40px]">
            {educationData.map((edu, index) => (
              <div key={index} className="bg-white p-[30px] rounded-[20px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] relative">
                <div className="flex justify-between items-center mb-[20px]">
                  <div className="bg-primary/10 text-primary p-[10px] rounded-[12px] flex items-center justify-center">
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
