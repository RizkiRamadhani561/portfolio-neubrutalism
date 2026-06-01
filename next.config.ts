import type { NextConfig } from "next";

const repoName = "RizkiRamadhani.github.io";
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    // Allow placeholder images from external sources during development
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // Static exports need unoptimized images unless a custom loader is provided.
    unoptimized: true,
  },
};

export default nextConfig;
