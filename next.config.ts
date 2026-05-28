import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the file-tracing root to this project. A stray lockfile exists in the
  // home directory, which otherwise makes Next infer the wrong workspace root.
  outputFileTracingRoot: import.meta.dirname,
};

export default nextConfig;
