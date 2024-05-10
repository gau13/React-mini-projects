import React, { useEffect, useRef, useState } from "react";

const Test = ({ initialTime, onFinishTime }) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(true);
  const intervalReference = useRef();

  useEffect(() => {
    if (isRunning) {
      intervalReference.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(intervalReference.current);
            setIsRunning(false);

            if (onFinishTime) {
              onFinishTime();
            }

            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalReference.current);
    }

    return () => {
      clearInterval(intervalReference.current);
    };
  }, [isRunning, onFinishTime]);

  const min = Math.floor(time / 60);
  const sec = time % 60;

  const handlePause = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };
  const handleReset = () => {
    clearInterval(intervalReference.current);
    setTime(initialTime);
    isRunning(false);
  };

  const handleStart = () => {
    isRunning(true);
  };
  return (
    <div>
      <p>
        {String(min).padStart(2, "0")}:{String(sec).padStart(2, "0")}
        <div>
          <button onClick={handlePause}>
            {isRunning ? "Pause" : "Resume"}
          </button>
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleStart}>Start</button>
        </div>
      </p>
    </div>
  );
};

export default Test;
