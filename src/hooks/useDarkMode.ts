import { useEffect, useState } from "react";

/**
 * Read-only hook that reports whether dark mode is active, by watching the
 * `dark` class on <html>. Any component can call this to react to theme
 * changes (e.g. swapping the logo video) regardless of which toggle flipped it.
 */
export function useDarkMode(): boolean {
  const [isDark, setIsDark] = useState<boolean>(() =>
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const root = document.documentElement;
    const update = () => setIsDark(root.classList.contains("dark"));
    update();

    const observer = new MutationObserver(update);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return isDark;
}
