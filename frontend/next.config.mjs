/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

  serverExternalPackages: ["@arcjet/next", "@arcjet/node", "@arcjet/analyze-wasm"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themealdb.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;
