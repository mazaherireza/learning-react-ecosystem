import { useState } from "react";
import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import questions from "../questions";
import { TYPES } from "../types";

const TIMEOUT = 15_000;
const CORRECTNESS = 1_000;
const INTERRUPT = 2_000;

const Question = ({ index, onSelect, onSkip }) => {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = TIMEOUT;
  if (answer.selectedAnswer) timer = CORRECTNESS;
  if (answer.isCorrect !== null) timer = INTERRUPT;

  const handleSelectAnswer = (answer) => {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: questions[index].answers[0] === answer,
      });

      setTimeout(() => {
        onSelect(answer);
      }, INTERRUPT);
    }, CORRECTNESS);
  };

  let state = "";
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    state = answer.isCorrect ? TYPES.TRUE : TYPES.FALSE;
  } else if (answer.selectedAnswer) {
    state = TYPES.ANSWERED;
  }

  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeout={timer}
        onSkip={answer.selectedAnswer === "" ? onSkip : null}
        mode={state}
      ></QuestionTimer>

      <h2>{questions[index].text}</h2>
      <Answers
        answers={questions[index].answers}
        selectedAnswer={answer.selectedAnswer}
        state={state}
        onSelect={handleSelectAnswer}
      ></Answers>
    </div>
  );
};

export default Question;
