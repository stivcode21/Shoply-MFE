import { StrictMode, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { createAuthMock } from "@microfront/contracts/auth";
import { createSidebarMock } from "@microfront/contracts/sidebar";
import "./index.css";
import App from "./App.jsx";

function StandaloneRoot() {
  const [activeCategory, setActiveCategory] = useState("camisas");
  const auth = useMemo(() => createAuthMock(), []);
  const sidebar = useMemo(
    () => createSidebarMock({ activeCategory, setActiveCategory }),
    [activeCategory]
  );

  return <App auth={auth} sidebar={sidebar} />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StandaloneRoot />
  </StrictMode>
);
