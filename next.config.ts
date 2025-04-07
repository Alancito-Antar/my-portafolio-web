import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    domains: ["i.imgur.com", "dynamoprojects.com"],
  },
};

export default nextConfig;
