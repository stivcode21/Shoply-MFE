import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    federation({
      name: "microSidebar",
      filename: "remoteEntry.js",
      remotes: {
        shell: {
          type: "module",
          name: "shell",
          entry: "http://localhost:3000/remoteEntry.js",
        },
      },
      exposes: {
        "./Sidebar": "./src/components/Sidebar.jsx",
      },
      shared: {
        react: { singleton: true, requiredVersion: false },
        "react-dom": { singleton: true, requiredVersion: false },
        "@reduxjs/toolkit": { singleton: true, requiredVersion: false },
        "react-redux": { singleton: true, requiredVersion: false },
      },
    }),
  ],
  server: {
    origin: "http://localhost:3002",
    port: 3002,
    strictPort: true,
    cors: true,
    fs: {
      allow: ["..", "../.."],
    },
  },
});
