import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

// Con `next dev`, da acceso a los bindings de wrangler.jsonc (el KV de
// confirmaciones) simulados en local.
initOpenNextCloudflareForDev();
