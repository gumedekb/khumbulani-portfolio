import React from "react";
import { useDarkMode } from "../../hooks/useDarkMode";

/**
 * Footer component - streamlined and clean.
 * Removes social icons, adds copyright text to the right.
 */
const Footer: React.FC = () => {
  const isDark = useDarkMode();
  const logoSrc = isDark ? "/img/logo-dark.mp4" : "/img/logo-light.mp4";

  return (
    <footer className="py-[20px] px-[15px] lg:px-[85px] bg-bg-shade flex flex-col items-center">
      <hr className="my-[10px] h-[2px] w-full bg-heading/50" />
      <div className="w-full flex items-center justify-between">
        <div className="w-20 h-15 overflow-hidden flex items-center justify-center">
          <video
            key={logoSrc}
            src={logoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain"
          />
        </div>
        <p className="text-[16px] text-darkblue leading-[24px]">
          © {new Date().getFullYear()} Khumbulani Gumede. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
