import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

const PORT: number = 8081;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
    extensions: [".vue", ".js", ".ts"],
  },
  server: {
    proxy: {
      "/api": {
        target: `http://localhost:${PORT}`,
        changeOrigin: true,
        rewrite(path) {
          return path.replace(/^\/api/, "");
        },
      },
    },
  },
});
