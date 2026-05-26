import React from "react";

/**
 * AboutMe component - personal information and story.
 */
const AboutMe: React.FC = () => {
  return (
    <section id="AboutMe" className="grid grid-cols-1 lg:grid-cols-2 p-[20px] lg:p-[70px_85px] items-center gap-[40px] lg:gap-[60px] bg-white mt-[20px] mx-[20px] lg:mx-[85px] rounded-[40px] border border-black/5 shadow-sm">
      <div className="w-full h-full flex items-center justify-center">
        <div className="p-2 border-2 border-primary rounded-[30px]">
          <div className="p-4 border-4 border-primary rounded-[30px] overflow-hidden">
            <img src="/img/formal-about-me.jpg" alt="About Me" className="w-full h-full rounded-[20px]" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-[20px]">
        <div className="flex flex-col items-start gap-[15px]">
          <h1 className="text-heading text-[30px] lg:text-[48px] font-bold">About <span className="text-primary">Me</span></h1>
          <p className="text-darkblue text-[18px] leading-[28px]">
            I am a passionate software engineer with a strong foundation in modern web technologies. 
            I love building applications that solve real-world problems and provide a great user experience.
          </p>
          <p className="text-darkblue text-[18px] leading-[28px]">
            With expertise in both front-end and back-end development, I enjoy working on all aspects of a project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
