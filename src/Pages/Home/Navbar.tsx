import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import ThemeToggle from "./ThemeToggle";

/**
 * Navbar component for site navigation.
 * Uses react-scroll for smooth scrolling to sections.
 */
const Navbar: React.FC = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 flex justify-between items-center py-[3px] px-[20px] md:px-[85px] bg-surface shadow-[0px_5px_80px_0_rgba(0,0,0,0.1)] dark:shadow-[0px_5px_80px_0_rgba(0,0,0,0.6)] z-50 ${navActive ? "active" : ""}`}>
      <div className="w-24 h-20 overflow-hidden flex items-center justify-center">
        <video
          src="/img/logo-light.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain"
        />
      </div>
      <div className={`absolute md:static top-[-20rem] md:top-0 left-0 w-full md:w-auto bg-surface md:bg-transparent transition-all duration-400 ease-in-out z-[-1000] md:z-auto ml-auto md:mr-10 ${navActive ? "top-[60px] z-[100]" : ""}`}>
        <ul className="flex flex-col md:flex-row items-center gap-[10px] md:gap-[32px] list-none p-[3rem] md:p-0">
          <li>
            <Link onClick={closeMenu} activeClass="text-primary" spy={true} smooth={true} offset={-70} duration={500} to="heroSection" className="text-darkblue text-base font-normal cursor-pointer leading-[24px] hover:text-primary transition-colors">Home</Link>
          </li>
          <li>
            <Link onClick={closeMenu} activeClass="text-primary" spy={true} smooth={true} offset={-70} duration={500} to="AboutMe" className="text-darkblue text-base font-normal cursor-pointer leading-[24px] hover:text-primary transition-colors">About Me</Link>
          </li>
          <li>
            <Link onClick={closeMenu} activeClass="text-primary" spy={true} smooth={true} offset={-70} duration={500} to="technicalSkills" className="text-darkblue text-base font-normal cursor-pointer leading-[24px] hover:text-primary transition-colors">Skills</Link>
          </li>
          <li>
            <Link onClick={closeMenu} activeClass="text-primary" spy={true} smooth={true} offset={-70} duration={500} to="projects" className="text-darkblue text-base font-normal cursor-pointer leading-[24px] hover:text-primary transition-colors">Projects</Link>
          </li>
          <li>
            <Link onClick={closeMenu} activeClass="text-primary" spy={true} smooth={true} offset={-70} duration={500} to="Education" className="text-darkblue text-base font-normal cursor-pointer leading-[24px] hover:text-primary transition-colors">Education</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-[14px] md:gap-[24px] ml-auto md:ml-0">
        <ThemeToggle />

        <Link
          onClick={closeMenu}
          activeClass="text-primary"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="Contact"
          className="hidden md:inline-block py-[10px] px-[26px] text-base font-normal cursor-pointer text-center no-underline rounded-[50px] transition-all duration-300 ease-in-out border border-primary text-primary bg-surface hover:bg-primary hover:text-white hover:scale-105"
        >
          Contact Me
        </Link>

        <a
          className={`flex md:hidden flex-col justify-around w-[1.875rem] h-[1.313rem] cursor-pointer z-[200] ${navActive ? "active" : ""}`}
          onClick={toggleNav}
        >
          <span className={`block h-[0.188rem] w-full bg-heading rounded-[0.625rem] transition-all duration-200 ease-in-out ${navActive ? "rotate-45 translate-x-[0.45rem] translate-y-[0.1875rem]" : ""}`}></span>
          <span className={`block h-[0.188rem] w-full bg-heading rounded-[0.625rem] transition-all duration-200 ease-in-out ${navActive ? "opacity-0" : ""}`}></span>
          <span className={`block h-[0.188rem] w-full bg-heading rounded-[0.625rem] transition-all duration-200 ease-in-out ${navActive ? "-rotate-45 translate-x-[0.45rem] -translate-y-[0.1875rem]" : ""}`}></span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
