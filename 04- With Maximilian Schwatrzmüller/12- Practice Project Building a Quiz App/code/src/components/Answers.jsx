import { useRef } from "react";
import { TYPES } from "../types";

const Answers = ({ answers, onSelect, state, selectedAnswer }) => {
  const shuffledList = useRef();
  if (!shuffledList.current)
    shuffledList.current = [...answers].sort(() => Math.random() - 0.5);

  return (
    <ul id="answers">
      {shuffledList.current.map((answer, index) => {
        const isSelected = answer === selectedAnswer;
        let CSSClass = "";
        if (isSelected) {
          if (state === TYPES.ANSWERED) {
            CSSClass = "selected";
          }
          if (state === TYPES.TRUE) {
            CSSClass = "correct";
          }
          if (state === TYPES.FALSE) {
            CSSClass = "wrong";
          }
        }
        return (
          <li key={index} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={CSSClass}
              disabled={state !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
