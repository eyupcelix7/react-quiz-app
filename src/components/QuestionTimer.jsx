import { useState, useEffect } from "react";

export default function QuestionTimer({ time, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(time);
  useEffect(() => {
    const timer = setTimeout(onTimeout, time);
    return () => {
      clearTimeout(timer);
    };
  }, [onTimeout, time]);
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" max={time} value={remainingTime} />;
}
