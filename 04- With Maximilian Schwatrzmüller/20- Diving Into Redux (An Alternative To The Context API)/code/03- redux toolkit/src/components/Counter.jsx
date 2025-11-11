import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/index";
import Button from "./UI/Button";
import classes from "./Counter.module.css";

const Counter = () => {
  const { counter } = useSelector((state) => state.counter);

  //const showCounter = useSelector((state) => state.showCounter);

  const dispatch = useDispatch();

  // const increaseHandler = () => {
  //   dispatch(counterActions.increase(10));
  // };

  const increamentHandler = () => {
    dispatch(counterActions.increment());
  };

  const decHandler = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>

      <div>
        <Button onClick={decHandler}>Decrement</Button>
        <Button onClick={increamentHandler}>Increment</Button>
      </div>
    </main>
  );
};

export default Counter;
