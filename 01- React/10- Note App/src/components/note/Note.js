import "./Note.css";

export default function Note(props) {
  const { text, color, del } = props;

  return (
    <div className="note-wrapper" style={{ backgroundColor: color }}>
      <p>{text}</p>
      <i className="fa fa-times" onClick={() => del(text)}></i>
    </div>
  );
}
