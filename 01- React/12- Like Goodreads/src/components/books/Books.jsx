import Book from "../book/Book.jsx";
import "./Books.css";
import { bookList } from "../../bookList.js";

export default function MyBooks() {
  return (
    <div className="container">
      <div className="books-wrapper">
        <h4>Read:</h4>
        <div className="books-wrapper-books">
          {bookList.map((book) => (
            <Book key={book._id} {...book}></Book>
          ))}
        </div>
      </div>
    </div>
  );
}
