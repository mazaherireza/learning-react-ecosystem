import "./ShowBook.css";
import { useParams } from "react-router-dom";
import { bookList } from "../../bookList";

export default function ShowBook() {
  const { bookID } = useParams();
  const book = bookList.find((book) => book._id === bookID);

  return (
    <div className="container">
      <div className="show-book-wrapper">
        <div className="book">
          <div className="book-img">
            <img src={book.img}></img>
          </div>
          <p className="book-title">{book.title}</p>
          <p className="book-author">{book.author}</p>
        </div>

        <div className="information">Information</div>
      </div>
    </div>
  );
}
