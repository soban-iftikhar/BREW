import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths"; // 1. Import the plugin

export default defineConfig({
  plugins: [
    tanstackStart(),
    viteReact(),
    tsconfigPaths(), // 2. Add it here
  ],
});