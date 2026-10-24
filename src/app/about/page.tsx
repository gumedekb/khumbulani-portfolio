import type { Metadata } from "next";
import type { ComponentType } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRightIcon,
  AwardIcon,
  BriefcaseIcon,
  CapIcon,
  CodeIcon,
  DatabaseIcon,
  DownloadIcon,
  LayersIcon,
  ServerIcon,
  ShieldIcon,
  SparkIcon,
  WrenchIcon,
} from "@/components/icons";
import {
  Container,
  Eyebrow,
  SectionHeading,
  buttonPrimary,
  buttonSecondary,
  cardClass,
  cardHover,
  delay,
} from "@/components/ui";
import { certifications, skillGroups, timeline, totalTrainingHours } from "@/lib/resume";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Background, education, skills and certifications of Khumbulani Gumede.",
};

const SKILL_ICONS: Record<string, ComponentType<{ size?: number }>> = {
  Languages: CodeIcon,
  Frontend: LayersIcon,
  Backend: ServerIcon,
  Databases: DatabaseIcon,
  "Data & AI": SparkIcon,
  Security: ShieldIcon,
  Tools: WrenchIcon,
};

export default function AboutPage() {
  return (
    <Container>
      {/* ---------- Intro ---------- */}
      <section className="grid items-center gap-12 pb-24 pt-14 sm:pt-20 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div className="animate-in relative mx-auto w-full max-w-xs sm:max-w-sm lg:order-none">
          <div className="absolute -inset-5 -z-10 rounded-[3rem] bg-linear-to-br from-accent/30 to-accent-2/30 blur-3xl" />
          <div className="rotate-[-2deg] rounded-[2.25rem] bg-linear-to-br from-accent to-accent-2 p-[3px] shadow-2xl shadow-accent/20 transition-transform duration-500 hover:rotate-0">
            <Image
              src="/img/formal-about-me.jpg"
              alt={`Portrait of ${SITE.name}`}
              width={1308}
              height={1442}
              sizes="(min-width: 640px) 384px, 320px"
              preload
              className="aspect-[4/5] w-full rounded-[2.1rem] object-cover object-top"
            />
          </div>
        </div>

        <div>
          <div className="animate-in">
            <Eyebrow>About me</Eyebrow>
          </div>
          <h1 className="animate-in mt-4 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl" style={delay(80)}>
            Hi, I&apos;m <span className="text-gradient">Khumbulani</span>.
          </h1>
          <div className="animate-in mt-6 space-y-5 text-lg leading-8 text-muted" style={delay(160)}>
            <p>
              I&apos;m a Computer Science &amp; IT graduate from the{" "}
              <span className="font-semibold text-foreground">University of KwaZulu-Natal</span>,
              with concentrations in Computer Systems and Artificial Intelligence. I build
              full-stack web applications and enjoy turning complex problems into clean, reliable
              software.
            </p>
            <p>
              Alongside development, I&apos;m deepening my expertise in{" "}
              <span className="font-semibold text-foreground">cybersecurity</span>: web application
              pentesting, red teaming, SOC analysis and DevSecOps, through hands-on TryHackMe
              learning paths. Many of my projects start as deliberately vulnerable builds that I
              then attack and harden.
            </p>
          </div>
          <div className="animate-in mt-8 flex flex-wrap gap-3" style={delay(240)}>
            <a href={SITE.cvUrl} download={SITE.cvDownloadName} className={buttonPrimary}>
              <DownloadIcon size={16} /> Download CV
            </a>
            <Link href="/contact" className={buttonSecondary}>
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Experience & education ---------- */}
      <section className="pb-24">
        <SectionHeading eyebrow="Journey" title="Experience & education" />
        <ol className="relative ml-3 border-l-2 border-line">
          {timeline.map((item, i) => {
            const Icon = i === 0 ? CapIcon : BriefcaseIcon;
            return (
              <li key={item.title} className="reveal relative pb-10 pl-10 last:pb-0">
                <span className="absolute -left-[17px] top-0 grid size-8 place-items-center rounded-full bg-linear-to-br from-brand to-brand-2 text-white ring-4 ring-background">
                  <Icon size={15} />
                </span>
                <div className={`p-6 sm:p-7 ${cardClass} ${cardHover}`}>
                  <span className="inline-block rounded-full bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent">
                    {item.period}
                  </span>
                  <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                  <p className="mt-1 font-medium text-accent-2">{item.organisation}</p>
                  <p className="mt-3 leading-7 text-muted">{item.description}</p>
                  {item.detail && <p className="mt-3 text-[15px] leading-7 text-muted/90">{item.detail}</p>}
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      {/* ---------- Skills ---------- */}
      <section className="pb-24">
        <SectionHeading eyebrow="Toolkit" title="Skills" description="The languages, frameworks and tools I work with." />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = SKILL_ICONS[group.label] ?? CodeIcon;
            return (
              <li key={group.label} className="reveal">
                <div className={`group h-full p-6 ${cardClass} ${cardHover}`}>
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      <Icon size={19} />
                    </span>
                    <h3 className="text-lg font-bold">{group.label}</h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span key={skill} className="rounded-lg border border-line bg-background/60 px-3 py-1.5 text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      {/* ---------- Certifications ---------- */}
      <section>
        <SectionHeading
          eyebrow="Certifications"
          title="Verified learning"
          description={`${certifications.length} TryHackMe learning paths and ${totalTrainingHours}+ hours of hands-on security training.`}
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <li key={cert.file} className="reveal">
              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex h-full flex-col p-6 ${cardClass} ${cardHover}`}
              >
                <div className="flex items-start justify-between">
                  <span className="grid size-11 place-items-center rounded-xl bg-linear-to-br from-[#16a34a] to-[#0d9488] text-white shadow-md">
                    <AwardIcon size={20} />
                  </span>
                  <span className="font-mono text-xs text-muted">{cert.date}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold">{cert.title}</h3>
                <p className="mt-1 text-[15px] text-muted">
                  {cert.issuer} · {cert.duration}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[15px] font-medium text-accent">
                  View certificate
                  <ArrowUpRightIcon size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
