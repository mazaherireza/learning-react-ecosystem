import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const entrypoint = document.getElementById("root");
ReactDOM.createRoot(entrypoint).render(
  <StrictMode>
    <App />
  </StrictMode>
);
