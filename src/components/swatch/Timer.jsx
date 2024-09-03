import React, { useRef, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [isDisable, setIsDisable] = useState(false);
  const [pause, setPause] = useState(true);
  const countRef = useRef(null);

  const handleStart = () => {
    setIsDisable(true);
    countRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  };

  const handlePause = () => {
    setPause(!pause);
    clearInterval(countRef.current);
  };

  const handleResume = () => {
    setPause(!pause);
    countRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  };
  const handleReset = () => {
    setTimer(0);
    setIsDisable(false);
    clearInterval(countRef.current);
  };

  return (
    <div>
      <div>{timer}</div>
      <button disabled={isDisable ? true : false} onClick={handleStart}>
        Start
      </button>
      {pause ? (
        <button onClick={handlePause}>Pause</button>
      ) : (
        <button onClick={handleResume}>Resume</button>
      )}{" "}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;
