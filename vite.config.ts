import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { cloudflare } from "@cloudflare/vite-plugin";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig(({ command }) => {
  return {
    build: {
      // Use hidden sourcemaps in production so error services can map errors
      // without exposing sourcemaps as public assets. Disable in other modes.
      sourcemap: command === "build" ? "hidden" : false,
    },
    plugins: [
      tanstackStart({
        server: { entry: "server" },
      }),
      tailwindcss(),
      tsConfigPaths(),
      command === "build" ? cloudflare() : null,
    ].filter(Boolean),
  };
});
