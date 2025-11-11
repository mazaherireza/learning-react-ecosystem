import { useSelector, useDispatch } from "react-redux";
import { Types } from "../store/constants";
import Button from "./UI/Button";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incHandler = () => {
    dispatch({ type: Types.inc });
  };

  const decHandler = () => {
    dispatch({ type: Types.dec });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <Button onClick={decHandler}>Decrement</Button>
        <Button onClick={incHandler}>Increment</Button>
      </div>
    </main>
  );
};

export default Counter;
