import React, { useRef, useState } from "react";

const Swatch = () => {
  const [timer, setTimer] = useState(0);
  const intervalref = useRef();

  const handleStart = () => {
    intervalref.current = setInterval(() => {
      setTimer((prevTime) => prevTime + 1);
    }, 1000);
  };
  const handlePause = () => {
    clearInterval(intervalref.current);
    intervalref.current = setInterval(() => {
      setTimer((prevTime) => prevTime + 1);
    }, 1000);
  };
  const handleReset = () => {
    clearInterval(intervalref.current);
    setTimer(0);
  };
  return (
    <div>
      Timer
      <p>{timer}</p>
      <div style={{ display: "flex" }}>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Swatch;
