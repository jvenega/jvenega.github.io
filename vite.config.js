// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// REEMPLAZA 'portfolio' por el nombre exacto de tu repo
export default defineConfig({
  plugins: [react()],
  base: "/",
});
