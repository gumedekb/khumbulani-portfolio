import Link from "next/link";
import type { Project } from "@/lib/projects";
import { ArrowUpRightIcon } from "./icons";
import { ProjectBanner } from "./project-thumb";
import { cardClass, cardHover } from "./ui";

export function StatusBadge({ status }: { status: string }) {
  return (
    <span className="rounded-full bg-red-600 px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-white shadow-md">
      {status}
    </span>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group flex h-full flex-col overflow-hidden ${cardClass} ${cardHover}`}
    >
      <div className="relative">
        <ProjectBanner project={project} className="aspect-[16/9]" />
        {project.status && (
          <span className="absolute left-4 top-4">
            <StatusBadge status={project.status} />
          </span>
        )}
        {project.date && (
          <span className="absolute right-4 top-4 rounded-full bg-black/30 px-2.5 py-1 font-mono text-xs text-white backdrop-blur">
            {project.date}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="mt-1 text-[15px] font-medium text-accent">{project.subtitle}</p>
          </div>
          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-line text-muted transition-all duration-300 group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
            <ArrowUpRightIcon size={16} />
          </span>
        </div>
        <p className="mt-3 line-clamp-3 leading-7 text-muted">{project.description}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="rounded-md bg-subtle px-2.5 py-1 font-mono text-xs text-muted">
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="rounded-md bg-subtle px-2.5 py-1 font-mono text-xs text-muted">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <li key={project.slug} className="reveal">
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
