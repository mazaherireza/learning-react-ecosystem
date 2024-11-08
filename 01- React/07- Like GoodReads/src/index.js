import React from "react";
import ReactDOM from "react-dom/client";
import "./style/main.css";
import "./style/index.css";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import Banner from "./components/banner/Banner";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <div className="app-container">
      <div className="app-header">
        <Header></Header>
      </div>
      <div className="app-form">
        <Form></Form>
      </div>
      <div className="app-banner">
        <Banner></Banner>
      </div>
    </div>
  </React.StrictMode>
);
