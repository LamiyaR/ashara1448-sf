import type { NextConfig } from "next";

// When building for GitHub Pages (project site at /ashara1448-sf), export a
// fully static site at that base path with unoptimized images. Local dev and
// Vercel builds (no GITHUB_PAGES env) stay normal: root path + image
// optimization + dynamic OG image.
const isPages = process.env.GITHUB_PAGES === "true";
const repo = "ashara1448-sf";

const nextConfig: NextConfig = {
  outputFileTracingRoot: import.meta.dirname,
  ...(isPages
    ? {
        output: "export",
        basePath: `/${repo}`,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
