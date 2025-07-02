import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const currentQuestionIndex = userAnswers.length;
  const isLastQuestion = QUESTIONS.length === userAnswers.length;

  const handleSelectAnswer = useCallback((selectedAnswer) => {
    setUserAnswers((prev) => [...prev, selectedAnswer]);
  }, []);

  const handleSkip = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (isLastQuestion) return <Summary answers={userAnswers}></Summary>;

  return (
    <div id="quiz">
      <Question
        key={currentQuestionIndex}
        index={currentQuestionIndex}
        onSelect={handleSelectAnswer}
        onSkip={handleSkip}
      ></Question>
    </div>
  );
};

export default Quiz;
