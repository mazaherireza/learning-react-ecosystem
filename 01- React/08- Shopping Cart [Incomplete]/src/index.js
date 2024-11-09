import React from "react";
import ReactDOM from "react-dom/client";
import "./style/main.css";
import "./style/index.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <>
      <Header></Header>
      <Main></Main>
    </>
  </React.StrictMode>
);
