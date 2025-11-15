import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App++";
import "./index.css";

const entryPoint = document.getElementById("root");
createRoot(entryPoint).render(
  <StrictMode>
    <App />
  </StrictMode>
);
