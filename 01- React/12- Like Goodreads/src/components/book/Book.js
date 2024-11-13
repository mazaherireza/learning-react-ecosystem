import "./Book.css";
import { useNavigate } from "react-router-dom";

export default function Book({ _id: bookID, img, title, author }) {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/show-book/${bookID}`);
  };
  return (
    <div className="book-wrapper" onClick={clickHandler}>
      <div className="book-img">
        <img src={img} alt={title}></img>
      </div>
      <div className="book-information">
        <p className="book-title">{title}</p>
        <p className="book-author">{author}</p>
      </div>
    </div>
  );
}
