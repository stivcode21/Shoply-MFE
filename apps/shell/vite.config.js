import { defineConfig, loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const microLoginEntry =
    env.VITE_MICRO_LOGIN_REMOTE ?? "http://localhost:3001/remoteEntry.js";
  const microSidebarEntry =
    env.VITE_MICRO_SIDEBAR_REMOTE ?? "http://localhost:3002/remoteEntry.js";
  const microCartEntry =
    env.VITE_MICRO_CART_REMOTE ?? "http://localhost:3003/remoteEntry.js";

  return {
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
          "./SidebarStore": "./src/store/sidebar/SidebarStore.js",
          "./storeHooks": "./src/store/hooks.js",
        },
        remotes: {
          microLogin: {
            type: "module",
            name: "microLogin",
            entry: microLoginEntry,
          },
          microSidebar: {
            type: "module",
            name: "microSidebar",
            entry: microSidebarEntry,
          },
          microCart: {
            type: "module",
            name: "microCart",
            entry: microCartEntry,
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
  };
});

