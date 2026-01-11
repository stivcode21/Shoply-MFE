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
      filename: "remoteEntry.js",
      exposes: {
        "./GlobalLoader": "./src/components/GlobalLoader.jsx",
        "./AuthProvider": "./src/auth/AuthProvider.jsx",
        "./useAuth": "./src/auth/useAuth.js",
        "./CartStore": "./src/store/cart/CartStore.js",
        "./store": "./src/store/store.js",
        "./storeHooks": "./src/store/hooks.js",
      },
      remotes: {
        microLogin: {
          type: "module",
          name: "microLogin",
          entry: "http://localhost:3001/remoteEntry.js",
        },
        microSidebar: {
          type: "module",
          name: "microSidebar",
          entry: "http://localhost:3002/remoteEntry.js",
        },
        microCart: {
          type: "module",
          name: "microCart",
          entry: "http://localhost:3003/remoteEntry.js",
        },
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
    origin: "http://localhost:3000",
    port: 3000,
    strictPort: true,
    cors: true,
    fs: {
      allow: ["..", "../.."],
    },
  },
});

