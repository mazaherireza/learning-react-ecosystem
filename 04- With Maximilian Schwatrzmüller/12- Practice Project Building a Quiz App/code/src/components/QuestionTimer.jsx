import { useState, useEffect } from "react";
import { TYPES } from "../types";

const INTERVAL = 50;

const QuestionTimer = ({ timeout, onSkip, mode }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  let CSSClass = "";
  if (mode === TYPES.ANSWERED) {
    CSSClass = "selected";
  }

  useEffect(() => {
    const timeoutID = setTimeout(onSkip, timeout);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [onSkip, timeout]);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setRemainingTime((prev) => prev - INTERVAL);
    }, INTERVAL);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <progress
      id="question-time"
      value={remainingTime}
      max={timeout}
      className={CSSClass}
    ></progress>
  );
};

export default QuestionTimer;
