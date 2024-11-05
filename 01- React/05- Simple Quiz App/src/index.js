import React from "react";
import ReactDOM from "react-dom/client";
import "./style/main.css";
import "./style/index.css";
import Quiz from "./components/quiz/Quiz";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Quiz></Quiz>
  </React.StrictMode>
);
