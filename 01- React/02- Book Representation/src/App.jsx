import "./App.css";
import Book from "./components/book/Book.jsx";

const data = {
  title: "Blindness",
  author: "José Saramago",
  img: "./Blindness.png",
};

function App() {
  return (
    <Book {...data}>
      <div className="label">
        <h6>Winner of the</h6>
        <p>Nobel Prize for Literature</p>
      </div>
    </Book>
  );
}

export default App;
