/** @type {import('next').NextConfig} */

const cdnDomain = process.env.CDN_DOMAIN;

if (!cdnDomain) {
  throw new Error("CDN_DOMAIN environment variable is required");
}

const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: cdnDomain,
        port: "",
      },
    ],
  },
};

export default nextConfig;
