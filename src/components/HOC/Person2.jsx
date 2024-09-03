import React, { useState } from "react";
import HighOrdComp from "./HighOrdComp";

const Person2 = ({ amount, handlencrease }) => {
  return (
    <div>
      <p>This is Person 2 {amount}</p>
      <button onClick={handlencrease}>Increase amount</button>
    </div>
  );
};

export default HighOrdComp(Person2);
