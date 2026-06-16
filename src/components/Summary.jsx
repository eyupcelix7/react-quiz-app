import quizCompletedImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";
export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0],
  );
  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100,
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100,
  );
  const wronngAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

  return (
    <div id="summary">
      <img src={quizCompletedImg} alt="Quiz Tamamlandı" />
      <h2>Quiz Tamamlandı!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">Doğru</span>
        </p>
        <p>
          <span className="number">{wronngAnswersShare}%</span>
          <span className="text">Yanlış</span>
        </p>
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">Boş</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClasses = "user-answer";
          if (answer === null) {
            cssClasses += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClasses += " correct";
          } else {
            cssClasses += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClasses}>{answer ?? "Boş"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
