import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@store": resolve(__dirname, "./src/store"),
    },
  },
  plugins: [react()],
});
