import React, { useState } from "react";
import TooltipTest from "./test";
import "./tooltip.css";

const Tooltip = () => {
  const [isVisible, setisVisible] = useState(false);

  let timeout;
  const handleOnHover = () => {
    timeout = setTimeout(() => {
      setisVisible(true);
    }, 500);
  };

  const handleOffHover = () => {
    clearTimeout(timeout);
    setisVisible(false);
  };
  return (
    <div className="tooltip">
      <button
        className="main-btn"
        onMouseEnter={handleOnHover}
        onMouseLeave={handleOffHover}
      >
        Come here
      </button>
      {isVisible ? <TooltipTest content={"kya haalchal"} /> : null}
    </div>
  );
};

export default Tooltip;
