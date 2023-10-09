import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  //to deploy on netlify
  base: "/restaurant-app",

  //to deploy on github page
  //base: "/restaurant-app"
  plugins: [react()],
});
