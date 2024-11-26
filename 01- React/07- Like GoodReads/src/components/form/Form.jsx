import "./Form.css";
import { useState } from "react";

export default function Form() {
  const [inputs, setInputs] = useState({});
  const [books, setBooks] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();
    setBooks([...books, inputs]);
    // Reset Inputs
    setInputs({});
  };

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <div className="form-container">
      <div className="container">
        <form method="post" onSubmit={submitHandler}>
          <input
            type="text"
            id="title"
            name="title"
            value={inputs.title || ""}
            onChange={changeHandler}
            placeholder="Book Title"
            autoFocus
            required
          />
          <input
            type="text"
            id="author"
            name="author"
            value={inputs.author || ""}
            onChange={changeHandler}
            placeholder="Book Author"
            required
          />
          <input type="submit" value="Add" />
        </form>

        <table>
          <thead>
            <tr>
              <th>Book</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <td>{book.title}</td>
                <td>{book.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
