import React, { useState } from "react";
import HighOrdComp from "./HighOrdComp";

const Person1 = ({ amount, handlencrease }) => {
  return (
    <div>
      <p>This is Person 1 {amount}</p>
      <button onClick={handlencrease}>Increase amount</button>
    </div>
  );
};

export default HighOrdComp(Person1);
