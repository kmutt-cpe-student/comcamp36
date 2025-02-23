import { env } from "@/env";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: env.NEXT_PUBLIC_IMAGE_HOST,
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
