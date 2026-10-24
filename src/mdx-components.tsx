import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { Callout, Finding, SeverityBadge, Stat, StatGrid } from "@/components/mdx";

// Components every writeup can use without importing them.
const components = {
  // Internal links use client-side navigation; external ones open in a new tab.
  a: ({ href = "", children, ...props }) =>
    href.startsWith("/") || href.startsWith("#") ? (
      <Link href={href} {...props}>
        {children}
      </Link>
    ) : (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    ),
  Callout,
  Finding,
  SeverityBadge,
  Stat,
  StatGrid,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
