"use client";

import { useLayoutEffect, type MouseEvent } from "react";
import { MoonIcon, SunIcon } from "./icons";

function prefersDark() {
  const stored = localStorage.getItem("theme");
  return stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
}

/**
 * Light/dark toggle. The initial theme is applied before paint by the inline
 * script in layout.tsx; this flips the `dark` class on <html> and persists
 * the choice. Where the View Transitions API is available, the new theme is
 * revealed in a circle growing out of the button. Icons morph via CSS, so no
 * React state is needed.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  // In dev, Strict Mode's remount resets <html> attributes — re-apply.
  // This is a no-op in production.
  useLayoutEffect(() => {
    try {
      document.documentElement.classList.toggle("dark", prefersDark());
    } catch {
      /* localStorage unavailable */
    }
  }, []);

  const toggle = (e: MouseEvent<HTMLButtonElement>) => {
    const root = document.documentElement;
    const next = !root.classList.contains("dark");
    const apply = () => {
      root.classList.toggle("dark", next);
      try {
        localStorage.setItem("theme", next ? "dark" : "light");
      } catch {
        /* localStorage unavailable — theme just won't persist */
      }
    };

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduceMotion) {
      apply();
      return;
    }

    // Grow from the click point (or the button's centre for keyboard use).
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX || rect.left + rect.width / 2;
    const y = e.clientY || rect.top + rect.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    document.startViewTransition(apply).ready.then(() => {
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 600, easing: "cubic-bezier(0.4, 0, 0.2, 1)", pseudoElement: "::view-transition-new(root)" }
      );
    });
  };

  const iconClass = "absolute transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className={`relative grid size-10 place-items-center overflow-hidden rounded-full border border-line bg-surface/70 text-foreground backdrop-blur transition-colors hover:border-accent/50 hover:text-accent ${className}`}
    >
      <MoonIcon size={18} className={`${iconClass} rotate-0 scale-100 opacity-100 dark:-rotate-90 dark:scale-0 dark:opacity-0`} />
      <SunIcon size={18} className={`${iconClass} rotate-90 scale-0 opacity-0 dark:rotate-0 dark:scale-100 dark:opacity-100`} />
    </button>
  );
}
