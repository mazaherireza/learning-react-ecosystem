import "./Book.css";

export default function Book({ img, title, author, children }) {
  return (
    <div className="wrapper">
      <div className="book-img">
        <img src={img} alt={title}></img>
      </div>
      <div className="book-information">
        <p className="book-title">{title}</p>
        <p className="book-author">{author}</p>
      </div>
      {children}
    </div>
  );
}
