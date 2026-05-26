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
    <section id="heroSection" className="grid grid-cols-1 lg:grid-cols-2 p-[20px] lg:p-[133.333px_85.333px] items-center justify-between gap-[32px] bg-white mt-[100px] mb-[20px] mx-[20px] lg:mx-[85px] rounded-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-black/5">
      <div className="flex flex-col items-start gap-[32px]">
        <div className="flex flex-col items-start gap-[21.333px]">
          <p className="text-heading text-[21px] text-center font-semibold leading-[32px] flex items-start">
            Hey, I'm <span className="text-[1.5em] text-primary font-bold ml-[8px]">Khumbulani</span>
          </p>
          <h1 className="text-heading text-[35px] lg:text-[74.667px] font-bold leading-[40px] lg:leading-[90px] self-stretch">
            <span className="text-primary">{text}</span>
            <span className="animate-blink ml-[4px] text-primary">|</span>
          </h1>
          <p className="text-darkblue text-[24px] font-normal leading-[36px]">
            Building modern and scalable web applications with a focus on user experience.
            <br /> Let's create something amazing together.
          </p>
        </div>
        <div className="flex gap-[20px] mt-[21.333px]">
          <button className="inline-block py-[14px] px-[32px] text-base font-normal cursor-pointer text-center no-underline rounded-[50px] transition-all duration-300 ease-in-out border border-primary text-white bg-primary hover:bg-white hover:text-primary hover:scale-105">Get In Touch</button>
          <button 
            className="inline-block py-[14px] px-[32px] text-base font-normal cursor-pointer text-center no-underline rounded-[50px] transition-all duration-300 ease-in-out border border-primary text-primary bg-white hover:bg-primary hover:text-white hover:scale-105" 
            onClick={handleDownloadResume}
          >
            Download Resume
          </button>
        </div>
      </div>
      <div className="flex w-full h-full">
        <img src="/img/hero_img.png" alt="Hero Section" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default HeroSection;
