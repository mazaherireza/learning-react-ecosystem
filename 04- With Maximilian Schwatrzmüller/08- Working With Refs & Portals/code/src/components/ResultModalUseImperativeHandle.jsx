import { useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

const ResultModal = ({ reference, targetTime, timeRemaining, onReset }) => {
  const dialog = useRef();
  const didUserLost = timeRemaining <= 0;
  const formattedRemainingTime = (timeRemaining / 1000).toFixed(2);
  const score = Math.round(1 - (timeRemaining / (targetTime * 1000)) * 100);

  useImperativeHandle(reference, () => {
    return {
      show() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {didUserLost && <h2>You Lost</h2>}
      {!didUserLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime}</strong> seconds.
      </p>
      <p>
        You stopped the timer with
        <strong>{formattedRemainingTime} seconds left</strong>.
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
};

export default ResultModal;
