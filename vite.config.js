import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import fs from "node:fs";

function dynamicJsonPlugin() {
  return {
    name: "dynamic-json",

    closeBundle() {
      const filePath = path.resolve(process.cwd(), "dist/profile/data.json");

      if (!fs.existsSync(filePath)) {
        console.log("File not found:", filePath);
        return;
      }

      const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      data.updatedTime = new Date().toISOString();
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

      console.log("JSON updated:", data.updatedTime);
    },
  };
}

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");

  return defineConfig({
    plugins: [react(), dynamicJsonPlugin()],
    base: env.VITE_APP_BASE_URL || "/",
    server: {
      open: true,
    },
    resolve: {
      alias: {
        "@src": path.resolve(import.meta.dirname, "./src"),
      },
    },
    build: {
      minify: "oxc",
      oxc: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  });
};
