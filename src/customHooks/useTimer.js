const { useState, useEffect, useRef } = require("react");

const useTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const checkTime = () => {
    if (seconds === 60) {
      setSeconds(0);
      setMinutes((prev) => prev + 1);
    }

    if (minutes === 60) {
      setMinutes(0);
      setHours((prev) => prev + 1);
    }
  };

  // checkTime();

  const ref = useRef(null);

  const startTimer = () => {
    ref.current = setInterval(() => {
      setSeconds((c) => c + 1);
    }, 1000);
  };

  const pauseTimer = () => {
    clearInterval(ref.current);
  };

  const resetTimer = () => {
    pauseTimer(ref.current);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  useEffect(() => {
    checkTime();
    return () => pauseTimer;
  }, [seconds]);

  return { seconds, minutes, hours, startTimer, pauseTimer, resetTimer };
};

export default useTimer;
