/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // basePath: '/AnkushRathour',
  // assetPrefix: '/AnkushRathour/',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ankushrathour.com',
      },
    ],
  },
};

export default nextConfig;
