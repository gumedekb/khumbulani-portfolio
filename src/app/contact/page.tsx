import type { Metadata } from "next";
import type { ComponentType } from "react";
import { ContactForm } from "@/components/contact-form";
import { GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { Container, PageHeader, cardClass, delay } from "@/components/ui";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Khumbulani Gumede.",
};

type Detail = { label: string; value: string; href?: string; icon: ComponentType<{ size?: number }> };

const details: Detail[] = [
  { label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}`, icon: MailIcon },
  { label: "Phone", value: CONTACT.phoneDisplay, href: `tel:${CONTACT.phoneHref}`, icon: PhoneIcon },
  { label: "LinkedIn", value: CONTACT.linkedinDisplay, href: CONTACT.linkedinUrl, icon: LinkedInIcon },
  { label: "GitHub", value: CONTACT.githubDisplay, href: CONTACT.githubUrl, icon: GitHubIcon },
  { label: "Location", value: CONTACT.location, icon: MapPinIcon },
];

export default function ContactPage() {
  return (
    <Container>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s <span className="text-gradient">connect</span>
          </>
        }
      >
        Feel free to reach out about opportunities, projects, cybersecurity or web development.
      </PageHeader>

      <div className="grid gap-6 lg:grid-cols-[22rem_1fr]">
        {/* Details card */}
        <div
          className="animate-in relative overflow-hidden rounded-3xl bg-linear-to-br from-brand via-brand-2 to-[#0e7490] p-6 text-white sm:p-8"
          style={delay(200)}
        >
          <div aria-hidden className="absolute -right-16 -top-16 size-56 rounded-full bg-white/10 blur-2xl" />
          <h2 className="relative text-2xl font-bold">Contact details</h2>
          <p className="relative mt-2 text-white/75">Prefer a direct line? Reach me here.</p>
          <ul className="relative mt-8 flex flex-col gap-5">
            {details.map(({ label, value, href, icon: Icon }) => {
              const content = (
                <>
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/15 backdrop-blur transition-colors group-hover:bg-white group-hover:text-brand">
                    <Icon size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">
                      {label}
                    </span>
                    <span className="block break-words text-sm font-medium sm:text-[15px]">{value}</span>
                  </span>
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group flex items-center gap-4"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Form card */}
        <div className={`animate-in p-7 sm:p-10 ${cardClass}`} style={delay(280)}>
          <h2 className="text-2xl font-bold">Send a message</h2>
          <p className="mt-2 text-muted">Messages go straight to my inbox.</p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </Container>
  );
}
