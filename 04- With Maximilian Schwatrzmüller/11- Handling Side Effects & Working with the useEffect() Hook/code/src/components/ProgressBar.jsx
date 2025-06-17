import { useState, useEffect } from "react";

const INTERVAL = 10;
const ProgressBar = ({ timer }) => {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setRemainingTime((prev) => prev - INTERVAL);
    }, INTERVAL);
    () => {
      clearInterval(intervalID);
    };
  }, []);

  return <progress value={remainingTime} max={timer}></progress>;
};

export default ProgressBar;
