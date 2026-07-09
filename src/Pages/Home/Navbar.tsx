import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import ThemeToggle from "./ThemeToggle";
import { useDarkMode } from "../../hooks/useDarkMode";

/* ---- Inline icons (currentColor, stroke-based) ---- */
const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const HomeIcon = () => (
  <svg {...iconProps}><path d="M3 9.5 12 3l9 6.5" /><path d="M5 10v10h14V10" /></svg>
);
const UserIcon = () => (
  <svg {...iconProps}><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" /></svg>
);
const SkillsIcon = () => (
  <svg {...iconProps}><polyline points="8 8 4 12 8 16" /><polyline points="16 8 20 12 16 16" /><line x1="13" y1="6" x2="11" y2="18" /></svg>
);
const ProjectsIcon = () => (
  <svg {...iconProps}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
);
const EducationIcon = () => (
  <svg {...iconProps}><path d="M22 10 12 5 2 10l10 5 10-5Z" /><path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" /></svg>
);
const MailIcon = () => (
  <svg {...iconProps}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
);
const MenuIcon = () => (
  <svg {...iconProps} width={24} height={24}><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></svg>
);
const CloseIcon = () => (
  <svg {...iconProps} width={24} height={24}><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></svg>
);

type NavItem = { to: string; label: string; icon: React.ReactNode };

const navItems: NavItem[] = [
  { to: "heroSection", label: "Home", icon: <HomeIcon /> },
  { to: "AboutMe", label: "About Me", icon: <UserIcon /> },
  { to: "technicalSkills", label: "Skills", icon: <SkillsIcon /> },
  { to: "projects", label: "Projects", icon: <ProjectsIcon /> },
  { to: "Education", label: "Education", icon: <EducationIcon /> },
];

// Mobile menu also surfaces Contact (desktop has a dedicated button for it).
const mobileItems: NavItem[] = [
  ...navItems,
  { to: "Contact", label: "Contact", icon: <MailIcon /> },
];

/**
 * Navbar component for site navigation.
 * Desktop: fixed top bar with text links. Mobile: a floating action button
 * anchored to the bottom-right that opens a compact, icon-based menu.
 * Uses react-scroll for smooth scrolling to sections.
 */
const Navbar: React.FC = () => {
  const [navActive, setNavActive] = useState(false);
  const isDark = useDarkMode();
  const logoSrc = isDark ? "/img/logo-dark.mp4" : "/img/logo-light.mp4";

  const closeMenu = () => setNavActive(false);
  const toggleNav = () => setNavActive((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) closeMenu();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center py-[3px] px-[20px] md:px-[85px] bg-surface shadow-[0px_5px_80px_0_rgba(0,0,0,0.1)] dark:shadow-[0px_5px_80px_0_rgba(0,0,0,0.6)] z-50">
        <div className="w-24 h-20 overflow-hidden flex items-center justify-center">
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

        <ul className="hidden md:flex items-center gap-[32px] list-none ml-auto mr-10">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                onClick={closeMenu}
                activeClass="text-primary"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to={item.to}
                className="text-darkblue text-base font-normal cursor-pointer leading-[24px] hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

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
        </div>
      </nav>

      {/* Mobile floating menu (hidden on desktop) */}
      {/* Backdrop */}
      <div
        onClick={closeMenu}
        className={`md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] transition-opacity duration-300 ${
          navActive ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Floating icon menu */}
      <div
        className={`md:hidden fixed bottom-[6rem] right-5 z-[110] flex flex-col items-end gap-[12px] transition-all duration-300 ease-out ${
          navActive
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {mobileItems.map((item) => (
          <Link
            key={item.to}
            onClick={closeMenu}
            activeClass="!text-primary [&>span:first-child]:!bg-primary [&>span:first-child]:!text-white"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to={item.to}
            className="flex items-center gap-[12px] bg-surface text-darkblue rounded-full pl-[8px] pr-[20px] py-[8px] shadow-[0_10px_30px_rgba(0,0,0,0.18)] border border-black/5 dark:border-white/10 cursor-pointer transition-colors hover:text-primary"
          >
            <span className="w-[38px] h-[38px] rounded-full bg-primary/10 text-primary flex items-center justify-center transition-colors">
              {item.icon}
            </span>
            <span className="text-[15px] font-medium leading-none">{item.label}</span>
          </Link>
        ))}
      </div>

      {/* Floating action button */}
      <button
        type="button"
        onClick={toggleNav}
        aria-label={navActive ? "Close menu" : "Open menu"}
        aria-expanded={navActive}
        className="md:hidden fixed bottom-5 right-5 z-[120] w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_10px_30px_rgba(94,59,238,0.45)] transition-transform duration-200 hover:scale-105 active:scale-95"
      >
        {navActive ? <CloseIcon /> : <MenuIcon />}
      </button>
    </>
  );
};

export default Navbar;
