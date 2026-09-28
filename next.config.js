/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio-neubrutalism',
  assetPrefix: '/portfolio-neubrutalism',
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          cacheGroups: {
            default: false,
            vendors: false,
          },
        },
        runtimeChunk: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
