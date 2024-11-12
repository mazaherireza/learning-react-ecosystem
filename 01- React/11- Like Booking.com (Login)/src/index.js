import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/main.css";
import Header from "./components/header/Header";
import Login from "./components/login/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header></Header>
    <Login></Login>
  </React.StrictMode>
);
