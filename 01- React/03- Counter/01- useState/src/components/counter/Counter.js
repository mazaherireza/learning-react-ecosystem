import { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((prevState) => prevState + 1);
  };

  const decrease = () => {
    setCounter((prevState) => prevState - 1);
  };

  return (
    <div className="wrapper">
      <p className="counter">Counter: {counter}</p>
      <div className="buttons">
        <button onClick={increase}>Inc</button>
        <button onClick={decrease}>Dec</button>
      </div>
    </div>
  );
}
