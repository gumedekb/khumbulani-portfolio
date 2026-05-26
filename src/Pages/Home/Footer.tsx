import React from "react";

/**
 * Footer component - streamlined and clean.
 * Removes social icons, adds copyright text to the right.
 */
const Footer: React.FC = () => {
  return (
    <footer className="py-[40px] px-[20px] lg:px-[85px] bg-bg-shade flex flex-col items-center">
      <hr className="my-[20px] h-[1.333px] w-full bg-heading/50" />
      <div className="w-full flex justify-end">
        <p className="text-[16px] text-darkblue leading-[24px]">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
