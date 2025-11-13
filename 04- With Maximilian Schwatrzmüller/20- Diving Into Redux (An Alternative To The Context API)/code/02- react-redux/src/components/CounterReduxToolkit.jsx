import { useSelector, useDispatch } from "react-redux";
import Button from "./UI/Button";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const dispatch = useDispatch();

  const increaseHandler = () => {
    dispatch({ type: Types.inc });
  };

  const increamentHandler = () => {
    dispatch({ type: Types.inc });
  };

  const decHandler = () => {
    dispatch({ type: Types.dec });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}

      <div>
        <Button onClick={decHandler}>Decrement</Button>
        <Button onClick={increamentHandler}>Increment</Button>
        <Button onClick={increaseHandler}>Increase</Button>
      </div>
    </main>
  );
};

export default Counter;
