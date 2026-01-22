import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createAuthMock } from "@microfront/contracts/auth";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App auth={createAuthMock()} />
  </StrictMode>
)
