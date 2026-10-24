import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { getWriteups } from "@/lib/writeups";
import { SITE } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = ["", "/projects", "/writeups", "/about", "/contact"].map((path) => ({
    url: `${SITE.url}${path}`,
  }));
  const projectPages = projects.map((p) => ({ url: `${SITE.url}/projects/${p.slug}` }));
  const writeupPages = (await getWriteups()).map((w) => ({
    url: `${SITE.url}/writeups/${w.slug}`,
    lastModified: w.date,
  }));
  return [...pages, ...projectPages, ...writeupPages];
}
