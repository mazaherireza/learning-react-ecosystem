import React from "react";
import ReactDOM from "react-dom/client";
import "./style/main.css";
import "./style/index.css";
import SignupForm from "./components/signupForm/SignupForm";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <SignupForm></SignupForm>
  </React.StrictMode>
);
