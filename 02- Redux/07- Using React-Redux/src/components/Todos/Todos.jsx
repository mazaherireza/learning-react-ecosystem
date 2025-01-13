import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createTodoAction, removeTodoAction } from "@store/todos";
import "./Todos.css";

export default function Todos() {
  const [title, setTitle] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const keyDownHandler = ({ key }) => {
    if (key === "Enter") {
      dispatch(
        createTodoAction({
          _id: crypto.randomUUID(),
          title: title,
          isCompleted: false,
        })
      );
      setTitle("");
    }
  };

  return (
    <div className="todos-wrapper">
      <h4>Todo App</h4>
      <h5>Type something and press enter.</h5>
      <input
        type="text"
        value={title}
        name="new-todo"
        id="new-todo"
        placeholder="Todo"
        onChange={({ target }) => setTitle(target.value)}
        onKeyDown={(event) => keyDownHandler(event)}
        autoFocus
      />

      {todos.map((todo) => (
        <div key={todo._id} className="todo-wrapper">
          <p>{todo.title}</p>
          <i
            className="fa fa-times"
            onClick={() => dispatch(removeTodoAction(todo._id))}
          ></i>
        </div>
      ))}
    </div>
  );
}
