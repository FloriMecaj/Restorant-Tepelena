/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true, // If you are using Next.js 15 experimental features
  },
};

module.exports = nextConfig;
