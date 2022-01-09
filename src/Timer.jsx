import "./styles.css";
import useTimeout from "./customHooks/useTimeout";
import { useEffect, useRef, useState } from "react";
import useFetch from "./customHooks/useFetch";
import useTimer from "./customHooks/useTimer";

export default function Timer() {
  // const [state, setState] = useState(null);
  // const response = useFetch(`https://api.github.com/search/users?q=masai`);

  const {
    seconds,
    minutes,
    hours,
    startTimer,
    pauseTimer,
    resetTimer
  } = useTimer();

  return (
    <div className="App">
      <h2>
        {hours}:{minutes}:{seconds}
      </h2>
      <button onClick={() => startTimer()}>Start</button>
      <button onClick={() => pauseTimer()}>Pause</button>
      <button onClick={() => resetTimer()}>Reset</button>
    </div>
  );
}
