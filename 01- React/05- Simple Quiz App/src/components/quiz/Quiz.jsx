import questions from "./questions";
import { useState } from "react";
import "./Quiz.css";

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const question = questions[index];
  const COUNT = questions.length;
  const increase = () => {
    setIndex(index + 1);
  };

  const showScore = () => {};

  return (
    <div className="wrapper">
      <div className="counter">
        <span>Question </span>
        <span className="currentIndex">{index + 1}</span>
        <span> / </span>
        <span>{COUNT}</span>
      </div>
      <div className="question">
        {index + 1}) {question.title}
      </div>
      <div className="options">
        {question.options.map((option, index) => (
          <div key={option._id} className="option">
            <input
              type="radio"
              id={option._id}
              name="option"
              value={option.title}
            />
            <label htmlFor={option._id}>
              {index + 1}) {option.title}
            </label>
          </div>
        ))}
        {index + 1 < COUNT ? (
          <button onClick={increase}>Next</button>
        ) : (
          <button onClick={showScore}>Send</button>
        )}
      </div>
    </div>
  );
}
