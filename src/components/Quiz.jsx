import { useState, useCallback, useRef } from "react";
import QUESTIONS from "../questions.js";
import quizCompletedImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import Question from "./Question.jsx";
export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;
  const handleSelectAnswer = useCallback(
    function (selectedAnswer) {
      setUserAnswers((prevAnswer) => {
        return [...prevAnswer, selectedAnswer];
      });
    },
    [activeQuestionIndex],
  );
  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer],
  );
  if (quizIsCompleted) {
    return (
      <div id="summary">
        <img src={quizCompletedImg} alt="Quiz Tamamlandı" />
        <h2>Quiz Tamamlandı!</h2>
      </div>
    );
  }
  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        answers={QUESTIONS[activeQuestionIndex].answers}
        answerText={QUESTIONS[activeQuestionIndex].text}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
