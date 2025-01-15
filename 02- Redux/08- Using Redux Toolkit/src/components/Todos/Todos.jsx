import { useState, useEffect } from "react";
import { createTodoAction, removeTodoAction, fetchTodos } from "@store/todos";
import { useSelector, useDispatch } from "react-redux";
import "./Todos.css";

export default function Todos() {
  const [title, setTitle] = useState("");
  const todos = useSelector((state) => state.todos);
  
  const dispatch = useDispatch();
  const URL = "https://jsonplaceholder.typicode.com/todos";

  useEffect(() => {
    dispatch(fetchTodos(URL));
  }, []);

  const keyDownHandler = (key) => {
    if (key === "Enter") {
      dispatch(
        createTodoAction({
          id: crypto.randomUUID(),
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
        onKeyDown={({ key }) => keyDownHandler(key)}
        autoFocus
      />

      {todos.map((todo, index) => (
        <div key={index} className="todo-wrapper">
          <p>{todo.title}</p>
          <i
            className="fa fa-times"
            onClick={() => dispatch(removeTodoAction(todo.id))}
          ></i>
        </div>
      ))}
    </div>
  );
}
