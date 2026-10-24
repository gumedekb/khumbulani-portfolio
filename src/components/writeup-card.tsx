import Link from "next/link";
import { getProject } from "@/lib/projects";
import { formatDate, type Writeup } from "@/lib/writeups";
import { ArrowRightIcon } from "./icons";
import { ProjectThumb } from "./project-thumb";
import { cardClass, cardHover } from "./ui";

export function DraftBadge() {
  return (
    <span className="rounded-full border border-amber-500/40 bg-amber-500/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
      Draft
    </span>
  );
}

export function WriteupMetaLine({ writeup }: { writeup: Writeup }) {
  return (
    <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-muted">
      <time dateTime={writeup.date}>{formatDate(writeup.date)}</time>
      <span aria-hidden>·</span>
      <span>{writeup.readingMinutes} min read</span>
      {writeup.draft && <DraftBadge />}
    </p>
  );
}

export function WriteupCard({ writeup }: { writeup: Writeup }) {
  const project = writeup.project ? getProject(writeup.project) : undefined;
  const [from, to] = project?.gradient ?? ["#6d3cf0", "#0891b2"];

  return (
    <Link href={`/writeups/${writeup.slug}`} className={`group flex h-full flex-col overflow-hidden ${cardClass} ${cardHover}`}>
      {/* Accent bar in the related project's colours */}
      <div className="h-1.5" style={{ backgroundImage: `linear-gradient(90deg, ${from}, ${to})` }} />
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <WriteupMetaLine writeup={writeup} />
        <h3 className="mt-4 text-xl font-bold leading-snug transition-colors group-hover:text-accent sm:text-2xl">
          {writeup.title}
        </h3>
        <p className="mt-3 line-clamp-3 leading-7 text-muted">{writeup.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {writeup.tags.map((tag) => (
            <span key={tag} className="rounded-md bg-subtle px-2.5 py-1 font-mono text-xs text-muted">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between gap-4 pt-6">
          {project ? (
            <span className="flex min-w-0 items-center gap-2.5 text-sm text-muted">
              <ProjectThumb project={project} sizes="28px" className="size-7 rounded-lg shadow-none ring-0" />
              <span className="truncate">{project.title}</span>
            </span>
          ) : (
            <span />
          )}
          <span className="inline-flex shrink-0 items-center gap-1.5 text-[15px] font-medium text-accent">
            Read
            <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function WriteupGrid({ writeups }: { writeups: Writeup[] }) {
  return (
    <ul className="grid gap-6 md:grid-cols-2">
      {writeups.map((w) => (
        <li key={w.slug} className="reveal">
          <WriteupCard writeup={w} />
        </li>
      ))}
    </ul>
  );
}
