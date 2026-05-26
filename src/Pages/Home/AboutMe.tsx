import React from "react";

/**
 * AboutMe component - personal information and story.
 */
const AboutMe: React.FC = () => {
  return (
    <section id="AboutMe" className="grid grid-cols-1 lg:grid-cols-2 p-[20px] lg:p-[133.3px_85.3px] items-center gap-[40px] lg:gap-[114.6px]">
      <div className="w-full h-full">
        <img src="/img/about-me.png" alt="About Me" className="w-full h-full" />
      </div>
      <div className="flex flex-col items-start gap-[32px]">
        <div className="flex flex-col items-start gap-[21.333px]">
          <p className="text-heading text-[21px] text-center font-semibold leading-[32px] flex items-start">About</p>
          <h1 className="text-heading text-[35px] lg:text-[64px] font-bold leading-[40px] lg:leading-[77px]">About Me</h1>
          <p className="text-darkblue text-[24px] font-normal leading-[36px]">
            I am a passionate software engineer with a strong foundation in modern web technologies. 
            I love building applications that solve real-world problems and provide a great user experience.
          </p>
          <p className="text-darkblue text-[24px] font-normal leading-[36px]">
            With expertise in both front-end and back-end development, I enjoy working on all aspects of a project, 
            from UI design to database architecture.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
