import React, { useState, useEffect } from "react";

const toRotate = ["Full Stack Developer", "SOC Analysts", "Pentester"];
const period = 2000;

/**
 * HeroSection component - the first section users see.
 * Enhanced with typewriter effect and Download Resume button.
 */
const HeroSection: React.FC = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const tick = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setTypingSpeed((prevSpeed) => prevSpeed / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setTypingSpeed(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    const ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => {
      clearInterval(ticker);
    };
  }, [text, typingSpeed, loopNum, isDeleting]);

  const handleDownloadResume = () => {
    /* 
      // Placeholder for CV download function
      // Uncomment and update the path when the cv pdf file is ready
      const link = document.createElement('a');
      link.href = '/path/to/your/cv.pdf'; 
      link.download = 'Khumbulani_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    */
    console.log("Download Resume clicked. Add CV file path to enable download.");
  };

  return (
    <section
      id="heroSection"
      className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[40px] bg-white mt-[90px] mb-[30px] mx-[10px] lg:mx-[85px] px-[20px] py-[40px] lg:px-[40px] lg:py-[20px] rounded-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-black/5"
    >
      <div className="flex flex-col gap-[24px]">
        <div className="flex flex-col gap-[18px]">
          <p className="text-heading text-[18px] lg:text-[24px] font-semibold">
            Hey, I'm{" "}
            <span className="text-primary font-bold ml-[2px]">
              Khumbulani
            </span>
          </p>

          <h1 className="text-heading text-[26px] lg:text-[45px] font-bold leading-[40px] lg:leading-[60px]">
            <span className="text-primary">{text}</span>
            <span className="animate-blink ml-[4px] text-primary">|</span>
          </h1>

          <p className="text-darkblue text-[18px] lg:text-[22px] font-normal leading-[32px] max-w-[650px]">
            Building modern and scalable web applications with a focus on user
            experience.
            <br />
            Let’s create something impactful.
          </p>
        </div>

        <div className="flex flex-wrap gap-[16px]">
          <button className="inline-block py-[14px] px-[32px] text-base cursor-pointer rounded-[50px] transition-all duration-300 border border-primary text-white bg-primary hover:bg-white hover:text-primary hover:scale-105">
            Get In Touch
          </button>

          <button
            className="inline-block py-[14px] px-[32px] text-base cursor-pointer rounded-[50px] transition-all duration-300 border border-primary text-primary bg-white hover:bg-primary hover:text-white hover:scale-105"
            onClick={handleDownloadResume}
          >
            Download Resume
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="p-2 border-2 border-primary rounded-full">
          <div className="p-3 border-4 border-primary rounded-full overflow-hidden">
            <img
              src="/img/casual-hero.jpg"
              alt="Hero"
              className="w-[280px] h-[280px] lg:w-[400px] lg:h-[420px] object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
