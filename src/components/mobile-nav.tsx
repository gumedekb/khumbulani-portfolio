"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ComponentType } from "react";
import { NAV_ITEMS } from "@/lib/site";
import { isActivePath } from "./site-header";
import { CloseIcon, FolderIcon, HomeIcon, MailIcon, MenuIcon, PenIcon, UserIcon } from "./icons";

const ICONS: Record<string, ComponentType<{ size?: number }>> = {
  "/": HomeIcon,
  "/projects": FolderIcon,
  "/writeups": PenIcon,
  "/about": UserIcon,
  "/contact": MailIcon,
};

/**
 * Mobile navigation: a floating action button in the bottom-right corner.
 * Opening it fans the links out upwards over a blurred backdrop, so the page
 * itself never shifts. Hidden from the md breakpoint up (header nav instead).
 */
export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const count = NAV_ITEMS.length;

  return (
    <div className="md:hidden">
      {/* Backdrop */}
      <div
        onClick={close}
        aria-hidden
        className={`fixed inset-0 z-50 bg-background/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Links, fanning upwards from the button */}
      <nav
        id="mobile-nav"
        aria-label="Mobile"
        aria-hidden={!open}
        className={`fixed bottom-24 right-5 z-50 ${open ? "" : "pointer-events-none"}`}
      >
        <ul className="flex flex-col items-end gap-2.5">
          {NAV_ITEMS.map((item, i) => {
            const Icon = ICONS[item.href];
            const active = isActivePath(pathname, item.href);
            return (
              <li
                key={item.href}
                className={`transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                  open ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-90 opacity-0"
                }`}
                // Items nearest the button appear first when opening.
                style={{ transitionDelay: open ? `${(count - 1 - i) * 40}ms` : "0ms" }}
              >
                <Link
                  href={item.href}
                  onClick={close}
                  tabIndex={open ? 0 : -1}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-3 rounded-full border py-1.5 pl-1.5 pr-5 shadow-lg shadow-black/10 backdrop-blur-xl ${
                    active
                      ? "border-accent/40 bg-surface text-accent"
                      : "border-line bg-surface/90 text-foreground"
                  }`}
                >
                  <span
                    className={`grid size-9 place-items-center rounded-full ${
                      active ? "bg-linear-to-br from-brand to-brand-2 text-white" : "bg-accent/10 text-accent"
                    }`}
                  >
                    <Icon size={17} />
                  </span>
                  <span className="text-[15px] font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Floating action button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-linear-to-br from-brand to-brand-2 text-white shadow-xl shadow-brand/40 transition-transform duration-200 active:scale-90"
      >
        <span className={`transition-transform duration-300 ${open ? "rotate-90" : "rotate-0"}`}>
          {open ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
        </span>
      </button>
    </div>
  );
}
