import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectBanner } from "@/components/project-thumb";
import { WriteupCard, WriteupMetaLine } from "@/components/writeup-card";
import { ArrowLeftIcon, ArrowRightIcon, ListIcon } from "@/components/icons";
import { Container, cardClass, cardHover, delay } from "@/components/ui";
import { getProject } from "@/lib/projects";
import { getWriteup, getWriteups } from "@/lib/writeups";
import { SITE } from "@/lib/site";
import "./article.css";

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getWriteups()).map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: PageProps<"/writeups/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const writeup = await getWriteup(slug);
  if (!writeup) return {};
  return {
    title: writeup.title,
    description: writeup.summary,
    openGraph: {
      type: "article",
      title: writeup.title,
      description: writeup.summary,
      publishedTime: writeup.date,
      authors: [SITE.name],
      tags: writeup.tags,
    },
  };
}

export default async function WriteupPage({ params }: PageProps<"/writeups/[slug]">) {
  const { slug } = await params;
  const writeup = await getWriteup(slug);
  if (!writeup) notFound();

  const { default: Content } = await import(`@/content/writeups/${slug}.mdx`);
  const project = writeup.project ? getProject(writeup.project) : undefined;
  const more = (await getWriteups()).filter((w) => w.slug !== slug).slice(0, 2);

  return (
    <Container>
      <article className="pt-10 sm:pt-14">
        <Link
          href="/writeups"
          className="animate-in group inline-flex items-center gap-2 text-[15px] font-medium text-muted transition-colors hover:text-accent"
        >
          <ArrowLeftIcon size={16} className="transition-transform group-hover:-translate-x-1" />
          All writeups
        </Link>

        {/* Header */}
        <header className="mt-8 max-w-3xl">
          <div className="animate-in flex flex-wrap gap-2" style={delay(60)}>
            {writeup.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-accent/20 bg-accent/[0.07] px-3 py-1 text-[13px] font-medium text-accent">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="animate-in mt-5 text-3xl font-bold leading-[1.12] sm:text-5xl" style={delay(120)}>
            {writeup.title}
          </h1>
          <p className="animate-in mt-5 text-lg leading-8 text-muted sm:text-xl sm:leading-9" style={delay(180)}>
            {writeup.summary}
          </p>
          <div className="animate-in mt-6" style={delay(240)}>
            <WriteupMetaLine writeup={writeup} />
          </div>
        </header>

        {project && (
          <div className="animate-in mt-10 overflow-hidden rounded-[2rem]" style={delay(300)}>
            <ProjectBanner project={project} className="aspect-[21/9] sm:aspect-[21/6]" iconClassName="size-20 sm:size-28" />
          </div>
        )}

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_16rem]">
          {/* Body */}
          <div className="article min-w-0 max-w-3xl">
            <Content />
          </div>

          {/* Sidebar: contents + related project */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 flex flex-col gap-6">
              {writeup.headings.length > 0 && (
                <nav aria-label="Contents" className={`p-5 ${cardClass}`}>
                  <p className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted">
                    <ListIcon size={14} /> Contents
                  </p>
                  <ol className="mt-4 flex flex-col gap-2.5 border-l border-line">
                    {writeup.headings.map((h) => (
                      <li key={h.id}>
                        <a
                          href={`#${h.id}`}
                          className="-ml-px block border-l border-transparent pl-4 text-sm leading-snug text-muted transition-colors hover:border-accent hover:text-accent"
                        >
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}
              {project && <RelatedProject slug={project.slug} />}
            </div>
          </aside>
        </div>

        {/* Related project (mobile / tablet) */}
        {project && (
          <div className="mt-14 max-w-3xl lg:hidden">
            <RelatedProject slug={project.slug} />
          </div>
        )}
      </article>

      {more.length > 0 && (
        <section className="mt-24">
          <h2 className="reveal text-2xl font-bold sm:text-3xl">More writeups</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {more.map((w) => (
              <li key={w.slug} className="reveal">
                <WriteupCard writeup={w} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </Container>
  );
}

function RelatedProject({ slug }: { slug: string }) {
  const project = getProject(slug)!;
  return (
    <Link href={`/projects/${project.slug}`} className={`group block overflow-hidden ${cardClass} ${cardHover}`}>
      <ProjectBanner project={project} className="aspect-[16/7]" iconClassName="size-14" />
      <div className="p-5">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted">The project</p>
        <p className="mt-2 font-display text-lg font-bold">{project.title}</p>
        <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
          View project <ArrowRightIcon size={14} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
