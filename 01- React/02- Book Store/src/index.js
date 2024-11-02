import React from "react";
import ReactDOM from "react-dom/client";
import "./style/main.css";
import "./style/index.css";
import Book from "./components/book/Book";

const root = ReactDOM.createRoot(document.getElementById("root"));

const data = {
  title: "Blindness",
  author: "José Saramago",
  img: "./Blindness.png",
};

root.render(
  <React.StrictMode>
    <Book {...data}>
      <div className="label">
        <h6>Winner of the</h6>
        <p>Nobel Prize for Literature</p>
      </div>
    </Book>
  </React.StrictMode>
);
