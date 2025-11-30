import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  assetsInclude: ["**/*.mp4", "**/*.mkv"],
  server: {
    port: 3000,
  },
});
