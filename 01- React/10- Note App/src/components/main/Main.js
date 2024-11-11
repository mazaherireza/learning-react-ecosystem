import "./Main.css";
import { useState } from "react";
import Note from "../note/Note";
import colors from "./colors";

export default function Main() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");
  const [color, setColor] = useState("#fff");

  const refresh = () => {
    setText("");
    setColor("#fff");
  };

  const handleKey = (event) => {
    const { key } = event;
    if (key === "Enter") { // Trim text (There is a bug here)
      setText(text);
      setNotes([...notes, { text, color }]);
      setText("");
    }
  };

  const createNote = () => {
    setNotes([...notes, { text, color }]);
    setText("");
  };

  const handleDelete = (text) => {
    setNotes(notes.filter((note) => note.text !== text));
  };

  return (
    <div className="main-wrapper">
      <h3 className="title">Note-Taking App</h3>
      <input
        type="text"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
        onKeyUp={handleKey}
        placeholder="Type Here and Press Enter"
        autoFocus
      ></input>

      <div className="row">
        <div className="colors">
          {colors.map((color, index) => (
            <div
              key={index}
              style={{ backgroundColor: color }}
              className="circle"
              onClick={() => setColor(color)}
            ></div>
          ))}
        </div>

        <div className="right-side">
          <div
            className="circle selected-color"
            style={{ backgroundColor: color }}
          ></div>
          <div className="icons">
            <i className="fa fa-plus" onClick={createNote}></i>
            <i className="fa fa-refresh" onClick={refresh}></i>
          </div>
        </div>
      </div>

      <div className="notes-wrapper">
        {notes.map((note, index) => (
          <Note key={index} {...note} del={handleDelete}></Note>
        ))}
      </div>
    </div>
  );
}
