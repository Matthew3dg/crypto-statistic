import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    COIN_GECKO_BASE_URL: process.env.COIN_GECKO_BASE_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "coin-images.coingecko.com",
        port: "",
        pathname: "/coins/images/**",
      },
    ],
  },
};

export default nextConfig;
