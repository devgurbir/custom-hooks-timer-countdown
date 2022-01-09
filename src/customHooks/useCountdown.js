const { useState, useEffect, useRef } = require("react");

const useCountdown = (start) => {
  const [seconds, setSeconds] = useState(start);
  // const [minutes, setMinutes] = useState(0);
  // const [hours, setHours] = useState(0);

  // const checkTime = () => {
  //   if (seconds === 60) {
  //     setSeconds(0);
  //     setMinutes((prev) => prev + 1);
  //   }

  //   if (minutes === 60) {
  //     setMinutes(0);
  //     setHours((prev) => prev + 1);
  //   }
  // };

  // checkTime();

  const ref = useRef(null);

  const startTimer = () => {
    if (!ref.current) {
      ref.current = setInterval(() => {
        setSeconds((c) => {
          console.log(c);
          if (c - 1 <= 0) {
            pauseTimer();
            return 0;
          } else {
            return c - 1;
          }
        });
      }, 1000);
    }
  };

  const pauseTimer = () => {
    clearInterval(ref.current);
    ref.current = null;
  };

  const resetTimer = () => {
    pauseTimer(ref.current);
    setSeconds(start);
    // setMinutes(0);
    // setHours(0);
  };

  useEffect(() => {
    // checkTime();
    return () => pauseTimer;
  }, [seconds]);

  return { seconds, startTimer, pauseTimer, resetTimer };
};

export default useCountdown;
