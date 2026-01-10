import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    federation({
      name: "microLogin",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.jsx",
      },
      shared: {
        react: { singleton: true, requiredVersion: false },
        "react-dom": { singleton: true, requiredVersion: false },
        zustand: { singleton: true, requiredVersion: false },
      },
    }),
  ],
  server: {
    origin: "http://localhost:3001",
    port: 3001,
    strictPort: true,
    cors: true,
    fs: {
      allow: ["..", "../.."],
    },
  },
});

