import React, { useState } from "react";

const HighOrdComp = (OrginalComp) => {
  const NewComponent = () => {
    const [amount, setAmount] = useState(10);

    const handlencrease = () => {
      setAmount(amount + 10);
    };

    return <OrginalComp handlencrease={handlencrease} amount={amount} />;
  };
  return NewComponent;
};

export default HighOrdComp;
