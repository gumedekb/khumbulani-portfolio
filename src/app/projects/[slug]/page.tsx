import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCard, StatusBadge } from "@/components/project-list";
import { ProjectBanner } from "@/components/project-thumb";
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpRightIcon, CheckIcon, PenIcon } from "@/components/icons";
import { Container, Eyebrow, buttonPrimary, buttonSecondary, cardClass, chipClass, delay } from "@/components/ui";
import { getProject, projects } from "@/lib/projects";
import { getWriteupForProject } from "@/lib/writeups";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.description };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);
  const writeup = await getWriteupForProject(project.slug);

  return (
    <Container>
      <article className="pt-10 sm:pt-14">
        <Link
          href="/projects"
          className="animate-in group inline-flex items-center gap-2 text-[15px] font-medium text-muted transition-colors hover:text-accent"
        >
          <ArrowLeftIcon size={16} className="transition-transform group-hover:-translate-x-1" />
          All projects
        </Link>

        {/* Banner */}
        <div className="animate-in relative mt-8 overflow-hidden rounded-[2rem]" style={delay(80)}>
          <ProjectBanner project={project} className="aspect-[16/10] sm:aspect-[21/8]" iconClassName="size-24 sm:size-32" />
          {project.status && (
            <span className="absolute left-5 top-5">
              <StatusBadge status={project.status} />
            </span>
          )}
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_20rem]">
          {/* Main column */}
          <div className="animate-in" style={delay(160)}>
            <Eyebrow>{project.subtitle}</Eyebrow>
            <h1 className="mt-4 text-4xl font-bold sm:text-5xl">{project.title}</h1>
            <p className="mt-6 text-lg leading-8 text-muted sm:text-xl sm:leading-9">{project.description}</p>

            {writeup && (
              <Link
                href={`/writeups/${writeup.slug}`}
                className={`group mt-8 flex items-center gap-4 p-5 ${cardClass} border-accent/30 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60`}
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-linear-to-br from-brand to-brand-2 text-white shadow-md shadow-brand/30">
                  <PenIcon size={19} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
                    Read the writeup · {writeup.readingMinutes} min
                  </span>
                  <span className="mt-1 block font-semibold leading-snug">{writeup.title}</span>
                </span>
                <ArrowRightIcon className="shrink-0 text-muted transition-all group-hover:translate-x-1 group-hover:text-accent" />
              </Link>
            )}

            <h2 className="mt-12 text-2xl font-bold">Highlights</h2>
            <ul className="mt-5 grid gap-3">
              {project.features.map((feature) => (
                <li key={feature} className={`flex items-start gap-4 p-4 ${cardClass}`}>
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-linear-to-br from-brand to-brand-2 text-white">
                    <CheckIcon size={14} strokeWidth={3} />
                  </span>
                  <span className="pt-0.5 leading-7">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <aside className="animate-in lg:pt-2" style={delay(240)}>
            <div className={`flex flex-col gap-7 p-6 lg:sticky lg:top-24 ${cardClass}`}>
              {project.date && (
                <div>
                  <h2 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted">Date</h2>
                  <p className="mt-2 font-medium">{project.date}</p>
                </div>
              )}
              <div>
                <h2 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted">Tech stack</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className={chipClass}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted">Links</h2>
                <div className="mt-3 flex flex-col gap-2.5">
                  {project.links.map((link, i) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${i === 0 ? buttonPrimary : buttonSecondary} w-full justify-between`}
                    >
                      {link.label} <ArrowUpRightIcon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </article>

      {/* More projects */}
      <section className="mt-24">
        <h2 className="reveal text-2xl font-bold sm:text-3xl">More projects</h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((p) => (
            <li key={p.slug} className="reveal">
              <ProjectCard project={p} />
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
