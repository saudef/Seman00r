// Relative-path, memory-routed build for static hosts that cannot serve SPA
// routes (shared preview pages). Produced by scripts/make-preview.mjs.
import path from "node:path";
import { defineConfig, mergeConfig } from "vite";
import standalone from "./vite.standalone.config";

export default mergeConfig(
  standalone,
  defineConfig({
    base: "./",
    build: {
      outDir: path.resolve(import.meta.dirname, "dist/preview"),
      emptyOutDir: true,
    },
  })
);
