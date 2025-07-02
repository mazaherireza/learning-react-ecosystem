import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

const Summary = ({ answers }) => {
  const skipped = answers.filter((answer) => answer === null);
  const corrects = answers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const skippedsShare = Math.round((skipped.length / answers.length) * 100);
  const correctsShare = Math.round((corrects.length / answers.length) * 100);
  const wrongsShare = 100 - (skippedsShare + correctsShare);

  const STATS = [
    {
      title: "Skipped",
      percentage: skippedsShare,
    },
    {
      title: "Answered Correctly",
      percentage: correctsShare,
    },
    {
      title: "Answered Incorrectly",
      percentage: wrongsShare,
    },
  ];

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy Icon" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        {STATS.map((stat, index) => (
          <p key={index}>
            <span className="number">{stat.percentage}%</span>
            <span className="text">{stat.title}</span>
          </p>
        ))}
      </div>
      <ol>
        {answers.map((answer, index) => {
          let CSSClass = "user-answer";
          if (answer === null) {
            CSSClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            CSSClass += " correct";
          } else {
            CSSClass += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question-text">{QUESTIONS[index].text}</p>
              <p className={CSSClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;
