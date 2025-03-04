import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://13.124.36.165:8080",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
