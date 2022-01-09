import useCountdown from "./customHooks/useCountdown";

const Countdown = () => {
  const { seconds, startTimer, pauseTimer, resetTimer } = useCountdown(10);
  return (
    <div className="App">
      <h2>{seconds}</h2>
      <button onClick={() => startTimer()}>Start</button>
      <button onClick={() => pauseTimer()}>Pause</button>
      <button onClick={() => resetTimer()}>Reset</button>
    </div>
  );
};

export default Countdown;
