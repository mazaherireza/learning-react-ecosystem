import { useEffect } from "react";
import ProgressBar from "./ProgressBar.jsx";

const TIMER = 3_000;
const DeleteConfirmation = ({ onConfirm, onCancel }) => {
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      onConfirm();
    }, TIMER);
    () => {
      clearTimeout(timeoutID);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar timer={TIMER}></ProgressBar>
    </div>
  );
};

export default DeleteConfirmation;
