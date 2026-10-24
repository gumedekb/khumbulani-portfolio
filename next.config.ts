import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

// Writeups live in src/content/writeups/*.mdx. Plugins are given by name
// (strings) so Turbopack can serialise them.
const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: [
      "rehype-slug",
      [
        "rehype-pretty-code",
        { theme: { light: "github-light", dark: "github-dark-dimmed" }, keepBackground: false },
      ],
    ],
  },
});

export default withMDX(nextConfig);
