"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, SITE } from "@/lib/site";
import { ThemeToggle } from "./theme-toggle";
import { ArrowRightIcon } from "./icons";
import { buttonPrimary } from "./ui";

export function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

/** Desktop links: Home is the logo and Contact is the CTA button. */
const desktopItems = NAV_ITEMS.filter((item) => item.href !== "/" && item.href !== "/contact");

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/img/kb.png"
            alt=""
            width={36}
            height={36}
            className="size-9 rounded-xl ring-1 ring-line transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105"
          />
          <span className="font-display text-[17px] font-bold tracking-tight">
            {SITE.name}
            <span className="text-accent">.</span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-1 rounded-full border border-line bg-surface/60 p-1 backdrop-blur">
              {desktopItems.map((item) => {
                const active = isActivePath(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`block rounded-full px-4 py-1.5 text-[15px] font-medium transition-colors ${
                        active ? "bg-accent/10 text-accent" : "text-muted hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <ThemeToggle />

          <div className="hidden md:block">
            <Link href="/contact" className={`${buttonPrimary} py-2`}>
              Contact <ArrowRightIcon size={15} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
