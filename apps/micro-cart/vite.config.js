import { defineConfig, loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const shellEntry =
    env.VITE_SHELL_REMOTE ?? "http://localhost:3000/remoteEntry.js";

  return {
    plugins: [
      tailwindcss(),
      react(),
      federation({
        name: "microCart",
        filename: "remoteEntry.js",
        remotes: {
          shell: {
            type: "module",
            name: "shell",
            entry: shellEntry,
          },
        },
        exposes: {
          "./App": "./src/App.jsx",
          "./CartDrawer": "./src/components/CartDrawer.jsx",
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
      origin: "http://localhost:3003",
      port: 3003,
      strictPort: true,
      cors: true,
      fs: {
        allow: ["..", "../.."],
      },
    },
  };
});
