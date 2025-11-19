import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./UpdatedApp";
import "./index.css";

const entryPoint = document.getElementById("root");
const root = createRoot(entryPoint);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
