import React from "react";
import ReactDOM from "react-dom/client";
import "./style/main.css";
import "./style/index.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Container from "./components/container/Container";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header></Header>
      <Container></Container>
    </BrowserRouter>
  </React.StrictMode>
);
