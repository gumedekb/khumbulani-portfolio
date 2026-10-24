import { CONTACT } from "@/lib/site";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

const links = [
  { label: "GitHub", href: CONTACT.githubUrl, icon: GitHubIcon, external: true },
  { label: "LinkedIn", href: CONTACT.linkedinUrl, icon: LinkedInIcon, external: true },
  { label: "Email", href: `mailto:${CONTACT.email}`, icon: MailIcon, external: false },
];

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-1 ${className}`}>
      {links.map(({ label, href, icon: Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            title={label}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="grid size-10 place-items-center rounded-full text-muted transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/10 hover:text-accent"
          >
            <Icon size={19} />
          </a>
        </li>
      ))}
    </ul>
  );
}
