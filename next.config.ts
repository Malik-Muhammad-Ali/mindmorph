import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.rareblocks.xyz',
        pathname: '/collection/celebration/images/hero/**',
      },
    ],
    domains: ['images.unsplash.com', 'avatars.githubusercontent.com'],
  },
  reactStrictMode: false,
};

export default nextConfig;
