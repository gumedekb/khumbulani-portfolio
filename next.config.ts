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
        // Code blocks are always dark terminal windows, so one dark theme.
        { theme: "github-dark-default", keepBackground: false },
      ],
    ],
  },
});

export default withMDX(nextConfig);
