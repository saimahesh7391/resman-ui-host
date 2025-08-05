import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import federation from "@originjs/vite-plugin-federation";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "host_app",
      remotes: {
        admin_app: "http://localhost:3001/assets/remoteEntry.js",
        recruit_app: "http://localhost:3002/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "react-router-dom", "@mui/material", "@mui/icons-material", "axios", "@tanstack/react-query"],
    }),
  ],
  server: { port: 3000, cors: true },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
