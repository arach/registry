import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  outputFileTracingIncludes: {
    registry: ["./registry/**/*"],
  },
  images: {
    unoptimized: true,
  },
  /* config options here */
};

export default nextConfig;
