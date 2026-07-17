// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // 👈 ABAIKAN ERROR TYPESCRIPT
  },
  images: {
    unoptimized: true,
    qualities: [75, 85],
  },
};

export default nextConfig;