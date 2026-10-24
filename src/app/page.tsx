import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";
import { ProjectGrid } from "@/components/project-list";
import { SocialLinks } from "@/components/social-links";
import { WriteupsComingSoon } from "@/components/writeups-coming-soon";
import { WriteupGrid } from "@/components/writeup-card";
import {
  ArrowRightIcon,
  AwardIcon,
  CapIcon,
  CodeIcon,
  DownloadIcon,
  ShieldIcon,
  SparkIcon,
} from "@/components/icons";
import {
  Container,
  SectionHeading,
  buttonPrimary,
  buttonSecondary,
  cardClass,
  cardHover,
  chipClass,
  delay,
  viewAllClass,
} from "@/components/ui";
import { featuredProjects, projects } from "@/lib/projects";
import { certifications, focusAreas, totalTrainingHours, type FocusArea } from "@/lib/resume";
import { SITE } from "@/lib/site";
import { getWriteups } from "@/lib/writeups";

const FOCUS_ICONS: Record<FocusArea["key"], ComponentType<{ size?: number }>> = {
  fullstack: CodeIcon,
  security: ShieldIcon,
  data: SparkIcon,
};

const stats = [
  { value: `${projects.length}`, label: "Projects shipped" },
  { value: `${certifications.length}`, label: "TryHackMe learning paths" },
  { value: `${totalTrainingHours}+`, label: "Hours of security training" },
  { value: "2025", label: "UKZN CS & IT graduate" },
];

export default async function Home() {
  const latestWriteups = (await getWriteups()).slice(0, 2);

  return (
    <>
      {/* ---------- Hero ---------- */}
      <Container className="grid items-center gap-14 pb-20 pt-12 sm:pt-20 lg:grid-cols-[1.25fr_1fr] lg:pb-28">
        <div>
          <div
            className="animate-in inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 py-1.5 pl-2 pr-4 text-sm font-medium backdrop-blur"
          >
            <span className="animate-pulse-ring size-2 rounded-full bg-green-500" />
            Full-stack developer · Cybersecurity
          </div>

          <h1
            className="animate-in mt-6 text-[2.3rem] font-bold leading-[1.08] sm:text-6xl"
            style={delay(80)}
          >
            I build web apps,
            <br />
            <span className="text-gradient">then I break them.</span>
          </h1>

          <p className="animate-in mt-6 max-w-xl text-lg leading-8 text-muted sm:text-xl sm:leading-9" style={delay(160)}>
            I&apos;m <span className="font-semibold text-foreground">{SITE.name}</span>, a Computer
            Science &amp; IT graduate building full-stack applications with a focus on web
            application security. Here I share my projects and write up how I build, pentest and
            harden them.
          </p>

          <div className="animate-in mt-9 flex flex-wrap items-center gap-3" style={delay(240)}>
            <Link href="/projects" className={buttonPrimary}>
              View my work <ArrowRightIcon size={16} />
            </Link>
            <a href={SITE.cvUrl} download={SITE.cvDownloadName} className={buttonSecondary}>
              <DownloadIcon size={16} /> Download CV
            </a>
          </div>

          <div className="animate-in mt-6" style={delay(300)}>
            <SocialLinks className="-ml-2" />
          </div>
        </div>

        {/* Portrait with gradient frame and floating badges */}
        <div className="animate-in relative mx-auto w-full max-w-[340px] sm:max-w-sm" style={delay(200)}>
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-linear-to-br from-accent/30 to-accent-2/30 blur-3xl" />
          <div className="rounded-[2.25rem] bg-linear-to-br from-accent to-accent-2 p-[3px] shadow-2xl shadow-accent/20">
            <Image
              src="/img/casual-hero.jpg"
              alt={`Portrait of ${SITE.name}`}
              width={2556}
              height={3408}
              sizes="(min-width: 640px) 384px, 340px"
              preload
              className="aspect-[4/5] w-full rounded-[2.1rem] object-cover"
            />
          </div>

          <div className={`animate-float absolute -left-2 top-10 flex items-center gap-3 px-4 py-3 sm:-left-10 ${cardClass}`}>
            <span className="grid size-10 place-items-center rounded-xl bg-accent/10 text-accent">
              <CapIcon size={20} />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold">BSc CS &amp; IT</p>
              <p className="text-xs text-muted">UKZN · 2025</p>
            </div>
          </div>

          <div
            className={`animate-float absolute -right-2 bottom-10 flex items-center gap-3 px-4 py-3 sm:-right-8 ${cardClass}`}
            style={{ animationDelay: "-3s" }}
          >
            <span className="grid size-10 place-items-center rounded-xl bg-accent-2/10 text-accent-2">
              <AwardIcon size={20} />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold">{certifications.length} security paths</p>
              <p className="text-xs text-muted">TryHackMe</p>
            </div>
          </div>
        </div>
      </Container>

      {/* ---------- Stats ---------- */}
      <Container className="pb-24">
        <dl className={`reveal grid grid-cols-2 overflow-hidden lg:grid-cols-4 ${cardClass}`}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`border-line p-6 sm:p-8 ${i % 2 === 0 ? "border-r" : ""} ${
                i < 2 ? "border-b lg:border-b-0" : ""
              } ${i < 3 ? "lg:border-r" : "lg:border-r-0"}`}
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="text-gradient font-display text-4xl font-bold sm:text-5xl">{stat.value}</span>
                <span className="mt-2 block text-[15px] text-muted">{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>

      {/* ---------- What I do ---------- */}
      <Container className="pb-24">
        <SectionHeading
          eyebrow="What I do"
          title="Building, breaking, securing"
          description="I work across the stack and keep security front of mind at every layer."
        />
        <ul className="grid gap-6 md:grid-cols-3">
          {focusAreas.map((area) => {
            const Icon = FOCUS_ICONS[area.key];
            return (
              <li key={area.key} className="reveal">
                <div className={`group h-full p-7 ${cardClass} ${cardHover}`}>
                  <span className="grid size-12 place-items-center rounded-2xl bg-linear-to-br from-brand to-brand-2 text-white shadow-lg shadow-brand/30 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-6 text-xl font-bold">{area.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{area.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {area.skills.map((skill) => (
                      <span key={skill} className={chipClass}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>

      {/* ---------- Featured projects ---------- */}
      <Container className="pb-24">
        <SectionHeading
          eyebrow="Featured work"
          title="Selected projects"
          action={
            <Link href="/projects" className={viewAllClass}>
              All projects
              <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          }
        />
        <ProjectGrid projects={featuredProjects} />
      </Container>

      {/* ---------- Writeups ---------- */}
      <Container className="pb-24">
        <SectionHeading
          eyebrow="Writeups"
          title="Latest writeups"
          action={
            <Link href="/writeups" className={viewAllClass}>
              All writeups
              <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          }
        />
        {latestWriteups.length > 0 ? <WriteupGrid writeups={latestWriteups} /> : <WriteupsComingSoon />}
      </Container>

      {/* ---------- Contact CTA ---------- */}
      <Container>
        <section className="reveal relative overflow-hidden rounded-[2rem] bg-linear-to-br from-brand via-brand-2 to-[#0e7490] px-7 py-14 text-white sm:px-14 sm:py-16">
          <div aria-hidden className="absolute -right-20 -top-20 size-72 rounded-full bg-white/10 blur-2xl" />
          <div aria-hidden className="absolute -bottom-24 left-1/3 size-72 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-4xl">Let&apos;s build something secure together.</h2>
            <p className="mt-4 text-lg leading-8 text-white/80">
              I&apos;m open to conversations about opportunities, projects, cybersecurity and web
              development.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[15px] font-semibold text-brand transition-transform duration-300 hover:-translate-y-0.5"
              >
                Get in touch <ArrowRightIcon size={16} />
              </Link>
              <a
                href={SITE.cvUrl}
                download={SITE.cvDownloadName}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
              >
                <DownloadIcon size={16} /> Download CV
              </a>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
