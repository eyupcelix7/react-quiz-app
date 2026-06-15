import { useState, useEffect } from "react";

export default function QuestionTimer({ time, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(time);
  useEffect(() => {
    setTimeout(onTimeout, time);
  }, [onTimeout, time]);
  useEffect(() => {
    setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
  }, []);

  return <progress id="question-time" max={time} value={remainingTime} />;
}
