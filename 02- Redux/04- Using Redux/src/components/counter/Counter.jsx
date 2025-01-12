import "./Counter.css";

const Counter = (props) => {
  const { counter, onDec, onReset, onInc } = props;
  return (
    <div className="container">
      <div className="counter">{counter}</div>
      <div className="btns">
        <button onClick={onDec}>DEC</button>
        <button onClick={onReset}>RESET</button>
        <button onClick={onInc}>INC</button>
      </div>
    </div>
  );
};

export default Counter;
