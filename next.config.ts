import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Sites tooling targets Cloudflare; Next.js checks the app and its imports.
    tsconfigPath: "tsconfig.next.json",
  },
};

export default nextConfig;
