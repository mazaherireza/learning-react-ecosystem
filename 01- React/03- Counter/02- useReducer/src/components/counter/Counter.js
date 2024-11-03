import { useReducer } from "react";
import { reducer } from "./reducer";
import "./Counter.css";

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <div className="wrapper">
      <p className="counter">Counter: {state.counter}</p>
      <div className="buttons">
        <button onClick={() => dispatch({ type: "INC" })}>Inc</button>
        <button onClick={() => dispatch({ type: "DEC" })}>Dec</button>
      </div>
    </div>
  );
}
