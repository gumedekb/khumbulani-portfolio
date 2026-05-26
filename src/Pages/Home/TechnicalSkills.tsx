import React, { useEffect, useState } from "react";

/**
 * TechnicalSkills - A modern skills section with animated progress bars.
 */
const TechnicalSkills: React.FC = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { name: "HTML & CSS", percentage: 95 },
    { name: "React JS", percentage: 85 },
    { name: "JavaScript", percentage: 90 },
    { name: "Figma", percentage: 75 },
  ];

  return (
    <section className="py-[70px] lg:py-[100px] px-[20px] lg:px-[85px] bg-white" id="technicalSkills">
      <div className="w-full max-w-[1333px] mx-auto">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-heading text-[35px] lg:text-[64px] font-bold leading-[40px] lg:leading-[77px]">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-black text-[21.3px] font-normal leading-[32px]">
            A specialized overview of my proficiency in various development and design tools.
          </p>
          
          <div className="flex flex-col gap-[30px] mt-[50px]">
            {skills.map((skill, index) => (
              <div className="w-full" key={index}>
                <div className="flex justify-between mb-[10px]">
                  <span className="text-[18px] font-semibold text-darkblue">{skill.name}</span>
                  <span className="text-[18px] font-bold text-primary">{skill.percentage}%</span>
                </div>
                <div className="w-full h-[12px] bg-[#e9ecef] rounded-[10px] overflow-hidden relative">
                  <div 
                    className="h-full bg-primary rounded-[10px] relative shadow-[0_0_10px_rgba(94,59,238,0.5)]" 
                    style={{ 
                      width: animated ? `${skill.percentage}%` : '0%',
                      transition: `width 1.5s ease-out ${index * 0.1}s`
                    }}
                  >
                    <div className="absolute top-0 right-0 w-[20px] h-full bg-white blur-[5px] opacity-30"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
