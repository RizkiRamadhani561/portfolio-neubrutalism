import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow placeholder images from external sources during development
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // Disable image optimization errors for missing local images during dev
    unoptimized: false,
  },
};

export default nextConfig;
