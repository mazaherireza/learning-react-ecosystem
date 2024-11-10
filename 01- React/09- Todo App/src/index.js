import React from "react";
import ReactDOM from "react-dom/client";
import "./style/main.css";
import "./style/index.css";
import Main from "./components/main/Main";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <div className="container">
      <Main></Main>
    </div>
  </React.StrictMode>
);
