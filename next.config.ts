import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["fonts.googleapis.com"],
    unoptimized: true,
  },
  output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
