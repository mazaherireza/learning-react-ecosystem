import { useState, useRef } from "react";
import ResultModal from "./ResultModalUseImperativeHandle.jsx";

const INTERVAL = 10;

const TimerChallenge = ({ title, targetTime }) => {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const intervalID = useRef();
  const dialog = useRef();

  const isTimerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(intervalID.current);
    dialog.current.show();
  }

  const handleStart = () => {
    intervalID.current = setInterval(() => {
      setTimeRemaining((prev) => prev - INTERVAL);
    }, INTERVAL);
  };

  const handleStop = () => {
    clearInterval(intervalID.current);
    dialog.current.show();
  };

  return (
    <>
      <ResultModal
        reference={dialog}
        targetTime={targetTime}
        timeRemaining={timeRemaining}
        onReset={() => setTimeRemaining(targetTime * 1000)}
      ></ResultModal>

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={isTimerActive ? handleStop : handleStart}>
            {isTimerActive ? "Stop" : "Start"} Challenge
          </button>
        </p>

        <p className={isTimerActive ? "active" : undefined}>
          {isTimerActive ? "Time is running ..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
