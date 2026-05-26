import React, { useEffect, useState } from "react";

/**
 * TechnicalSkills - A modern skills section with animated progress bars.
 */
const TechnicalSkills: React.FC = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const softwareSkills = [
    { name: "React JS", percentage: 85 },
    { name: "JavaScript", percentage: 90 },
    { name: "Node.js", percentage: 80 },
  ];

  const cyberSkills = [
    { name: "Network Security", percentage: 90 },
    { name: "Pentesting", percentage: 85 },
    { name: "Incident Response", percentage: 80 },
  ];

  const renderSkillBar = (skill: { name: string; percentage: number }, index: number) => (
    <div className="w-full" key={skill.name}>
      <div className="flex justify-between mb-[5px]">
        <span className="text-[16px] font-semibold text-darkblue">{skill.name}</span>
        <span className="text-[16px] font-bold text-primary">{skill.percentage}%</span>
      </div>
      <div className="w-full h-[10px] bg-[#e9ecef] rounded-[5px] overflow-hidden relative">
        <div 
          className="h-full bg-primary rounded-[5px] relative" 
          style={{ 
            width: animated ? `${skill.percentage}%` : '0%',
            transition: `width 1.5s ease-out ${index * 0.1}s`
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section className="py-[70px] px-[20px] lg:px-[85px] bg-white mt-[20px] mx-[20px] lg:mx-[85px] rounded-[40px] border border-black/5 shadow-sm" id="technicalSkills">
      <div className="w-full max-w-[1333px] mx-auto text-center mb-[40px]">
        <h2 className="text-primary text-[35px] lg:text-[48px] font-bold">Technical Skills</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] max-w-[1000px] mx-auto">
        <div className="bg-bg-shade p-[30px] rounded-[20px]">
          <h3 className="text-[24px] font-bold text-heading mb-[20px]">Software Development</h3>
          <div className="flex flex-col gap-[20px]">
            {softwareSkills.map((s, i) => renderSkillBar(s, i))}
          </div>
        </div>
        <div className="bg-bg-shade p-[30px] rounded-[20px]">
          <h3 className="text-[24px] font-bold text-heading mb-[20px]">Cybersecurity</h3>
          <div className="flex flex-col gap-[20px]">
            {cyberSkills.map((s, i) => renderSkillBar(s, i))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
