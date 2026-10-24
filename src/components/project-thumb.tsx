import Image from "next/image";
import type { Project } from "@/lib/projects";

/** Square "app icon" for a project — a logo on its brand color, or a cropped image. */
export function ProjectThumb({ project, className = "", sizes }: { project: Project; className?: string; sizes: string }) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-2xl bg-subtle shadow-lg shadow-black/20 ring-1 ring-white/15 ${className}`}
      style={{ backgroundColor: project.logoBg }}
    >
      <Image
        src={project.image}
        alt=""
        fill
        sizes={sizes}
        unoptimized={project.image.endsWith(".svg")}
        style={project.logoBg ? { padding: `${project.logoInset ?? 22}%` } : undefined}
        className={`${project.logoBg ? "object-contain" : "object-cover object-top"} ${
          project.status ? "grayscale" : ""
        }`}
      />
    </div>
  );
}

/** Gradient banner in the project's colors with its icon floating in the middle. */
export function ProjectBanner({ project, className = "", iconClassName = "size-24" }: { project: Project; className?: string; iconClassName?: string }) {
  const [from, to] = project.gradient;
  return (
    <div
      className={`relative grid place-items-center overflow-hidden ${project.status ? "grayscale-[0.7]" : ""} ${className}`}
      style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      {/* subtle texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgb(255 255 255 / 0.35), transparent 40%), radial-gradient(circle at 80% 90%, rgb(0 0 0 / 0.35), transparent 50%)",
        }}
      />
      <ProjectThumb
        project={project}
        sizes="128px"
        className={`${iconClassName} transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-110`}
      />
    </div>
  );
}
