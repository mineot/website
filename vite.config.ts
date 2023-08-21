import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@core": path.resolve(__dirname, "src/core"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
      "@views": path.resolve(__dirname, "src/views"),
      "@components": path.resolve(__dirname, "src/views/components"),
      "@widgets": path.resolve(__dirname, "src/views/widgets"),
    },
  },
});
