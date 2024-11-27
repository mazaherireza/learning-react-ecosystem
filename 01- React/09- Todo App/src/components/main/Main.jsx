import "./Main.css";
import { useState } from "react";
import Todo from "../todo/Todo.jsx";

export default function Main() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("all");

  const doneTodos = () => todos.filter((todo) => todo.isCompleted);

  const createTodo = (event, type = "KEY") => {
    if (type === "KEY") {
      const { key, target } = event;
      const title = target.value.trim();
      if (key === "Enter" && title) {
        setTodos([
          ...todos,
          {
            title,
            isCompleted: false,
          },
        ]);
        setTitle("");
      }
    } else {
      const title = title.trim();
      if (title) {
        setTodos([
          ...todos,
          {
            title,
            isCompleted: false,
          },
        ]);
        setTitle("");
      }
    }
  };

  const deleteTodo = (todoTitle) => {
    setTodos(todos.filter((todo) => todo.title !== todoTitle));
  };

  const clearList = () => {
    setTodos([]);
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setStatus(value);
  };

  const changeStatus = (title) => {
    setTodos(
      todos.map((todo) => {
        if (todo.title === title)
          return { ...todo, isCompleted: !todo.isCompleted };
        else return todo;
      })
    );
  };

  return (
    <div className="main-wrapper">
      <h3 className="main-title">Todo App</h3>
      <p className="main-information">
        You have done <span className="done">{doneTodos().length}</span> from{" "}
        <span className="total">{todos.length}</span>
      </p>

      <input
        type="text"
        value={title}
        placeholder="Type Here and Press Enter"
        onKeyUp={(event) => createTodo(event, "KEY")}
        onChange={(event) => setTitle(event.target.value)}
      />

      <div className="action-wrapper">
        <div className="buttons">
          <button onClick={(event) => createTodo(event, "CLICK")}>
            Add Todo
          </button>
          <button onClick={clearList}>Clear List</button>
        </div>

        <select name="status" onChange={handleChange}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incompleted">Incompleted</option>
        </select>
      </div>

      <div className="todo-list">
        {status === "all" &&
          todos.map((todo, index) => (
            <Todo
              key={index}
              {...todo}
              del={deleteTodo}
              changeStatus={changeStatus}
            ></Todo>
          ))}

        {status === "completed" &&
          todos
            .filter((todo) => todo.isCompleted)
            .map((todo, index) => (
              <Todo
                key={index}
                {...todo}
                del={deleteTodo}
                changeStatus={changeStatus}
              ></Todo>
            ))}

        {status === "incompleted" &&
          todos
            .filter((todo) => !todo.isCompleted)
            .map((todo, index) => (
              <Todo
                key={index}
                {...todo}
                del={deleteTodo}
                changeStatus={changeStatus}
              ></Todo>
            ))}
      </div>
    </div>
  );
}
