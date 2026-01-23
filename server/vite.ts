import { type Express } from "express";
import { type Server } from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Define __dirname manually since it's missing in some environments
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function setupVite(server: Server, app: Express) {
  // In a production environment like Netlify, we don't start the Vite server.
  // We simply check if we are in development mode.
  if (process.env.NODE_ENV !== "production") {
    try {
      const { createServer: createViteServer } = await import("vite");
      
      const vite = await createViteServer({
        server: { middlewareMode: true, hmr: { server } },
        appType: "custom",
      });

      app.use(vite.middlewares);
    } catch (e) {
      console.error("Failed to initialize Vite development server:", e);
    }
  }
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "..", "dist", "public");
  
  if (fs.existsSync(distPath)) {
    app.use(require("express").static(distPath));
    
    app.use("*", (_req, res) => {
      res.sendFile(path.resolve(distPath, "index.html"));
    });
  }
}