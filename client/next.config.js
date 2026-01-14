/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  transpilePackages: [
    "sanity",
    "next-sanity",
    "@sanity/document-internationalization",
    "@portabletext/editor",
  ],
};

module.exports = nextConfig;
