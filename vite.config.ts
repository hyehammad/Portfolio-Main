import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  // Use the @tailwindcss/vite plugin for v4
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
  // Setting root to 'client' means Vite looks for index.html inside the client folder
  root: path.resolve(__dirname, "client"),
  build: {
    // This tells Vite to go up one level from 'client' then into 'dist/public'
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
    // Ensure the manifest and assets are generated correctly for the production build
    reportCompressedSize: true,
  },
});