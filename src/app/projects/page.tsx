import type { Metadata } from "next";
import { ProjectGrid } from "@/components/project-list";
import { Container, PageHeader } from "@/components/ui";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Full-stack and security projects by Khumbulani Gumede.",
};

export default function ProjectsPage() {
  return (
    <Container>
      <PageHeader
        eyebrow="Projects"
        title={
          <>
            Things I&apos;ve <span className="text-gradient">built</span>
          </>
        }
      >
        Full-stack applications, many of them doubling as security case studies: built, then
        pentested and hardened. Select a project to see what it does and how it&apos;s built.
      </PageHeader>
      <ProjectGrid projects={projects} />
    </Container>
  );
}
