import React from "react";
import Test from "./test";

const Stopwatch = () => {
  const handleFinishTime = () => {};
  return (
    <div>
      Countdown Timer
      <Test initialTime={300} onTimeFinish={handleFinishTime} />
    </div>
  );
};

export default Stopwatch;
