import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    federation({
      name: "shell",
      remotes: {
        microLogin: {
          type: "module",
          name: "microLogin",
          entry: "http://localhost:3001/remoteEntry.js",
        },
        microEcommerce: {
          type: "module",
          name: "microEcommerce",
          entry: "http://localhost:3002/remoteEntry.js",
        },
      },
      shared: {
        react: { singleton: true, requiredVersion: false },
        "react-dom": { singleton: true, requiredVersion: false },
        zustand: { singleton: true, requiredVersion: false },
      },
    }),
  ],
  server: {
    origin: "http://localhost:3000",
    port: 3000,
    strictPort: true,
    cors: true,
    fs: {
      allow: ["..", "../.."],
    },
  },
});

