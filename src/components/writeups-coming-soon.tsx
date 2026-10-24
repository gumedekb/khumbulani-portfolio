import Link from "next/link";
import { getProject } from "@/lib/projects";
import { ArrowRightIcon, PenIcon } from "./icons";
import { ProjectThumb } from "./project-thumb";

/** Security case-study projects that will get the first writeups. */
const related = ["snaccchat", "daily-diary"].map((slug) => getProject(slug)!);

/** Placeholder shown until the first writeups are published. */
export function WriteupsComingSoon() {
  return (
    <div className="reveal rounded-[2rem] bg-linear-to-br from-accent/50 via-line to-accent-2/50 p-px">
      <div className="grid grid-cols-1 gap-10 rounded-[calc(2rem-1px)] bg-surface p-6 sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <span className="grid size-12 place-items-center rounded-2xl bg-linear-to-br from-brand to-brand-2 text-white shadow-lg shadow-brand/30">
            <PenIcon size={22} />
          </span>
          <h3 className="mt-6 text-2xl font-bold sm:text-3xl">The first writeups are on the way</h3>
          <p className="mt-3 max-w-lg text-lg leading-8 text-muted">
            Walkthroughs of building, breaking and securing my own projects, plus notes from my
            cybersecurity learning paths.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Meanwhile, read the case studies
          </p>
          <ul className="mt-4 flex flex-col gap-3">
            {related.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group flex items-center gap-4 rounded-2xl border border-line bg-background/60 p-3 transition-all duration-300 hover:border-accent/40 hover:bg-accent/[0.04]"
                >
                  <ProjectThumb project={project} sizes="48px" className="size-12 rounded-xl shadow-md" />
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold">{project.title}</p>
                    <p className="truncate text-sm text-muted">{project.subtitle}</p>
                  </div>
                  <ArrowRightIcon className="mr-1 shrink-0 text-muted transition-all group-hover:translate-x-1 group-hover:text-accent" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
