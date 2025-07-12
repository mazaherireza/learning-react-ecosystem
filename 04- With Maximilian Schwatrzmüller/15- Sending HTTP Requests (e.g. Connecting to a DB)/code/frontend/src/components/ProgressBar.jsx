import { useState, useEffect } from "react";

const DELAY = 10;
const ProgressBar = ({ timer }) => {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - DELAY);
    }, DELAY);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={timer} />;
};

export default ProgressBar;
