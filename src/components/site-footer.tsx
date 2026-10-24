import Image from "next/image";
import Link from "next/link";
import { CONTACT, NAV_ITEMS, SITE } from "@/lib/site";
import { SocialLinks } from "./social-links";

export function SiteFooter() {
  return (
    <footer className="mt-28 border-t border-line bg-surface/50 pb-24 md:pb-0">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image src="/img/kb.png" alt="" width={36} height={36} className="size-9 rounded-xl ring-1 ring-line" />
            <span className="font-display text-lg font-bold">
              {SITE.name}
              <span className="text-accent">.</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm leading-7 text-muted">
            Full-stack developer and security practitioner based in {CONTACT.location}. Building
            software, then breaking it to make it better.
          </p>
        </div>

        <div>
          <h2 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted">Navigate</h2>
          <ul className="mt-4 flex flex-col gap-2.5">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[15px] transition-colors hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted">Connect</h2>
          <a
            href={`mailto:${CONTACT.email}`}
            className="mt-4 block break-words text-[15px] transition-colors hover:text-accent"
          >
            {CONTACT.email}
          </a>
          <SocialLinks className="-ml-2 mt-3" />
        </div>
      </div>

      <div className="border-t border-line">
        <p className="mx-auto w-full max-w-6xl px-5 py-6 text-sm text-muted sm:px-8">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
