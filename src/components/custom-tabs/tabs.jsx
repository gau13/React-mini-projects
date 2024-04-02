import React, { useState } from "react";
import "./tabs.css";

const Tabs = ({ tabcontent }) => {
  const [currIndex, setCurrIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(false);

  const handleClick = (getIndex) => {
    setCurrIndex(getIndex);
    setShow(true);
    setActive(true);
  };
  return (
    <div className="wrapper">
      <div className="heading">
        {tabcontent.map((tabItem, index) => (
          <div
            className={`tab-item ${currIndex === index ? "active" : ""}`}
            key={tabItem.label}
          >
            <span onClick={() => handleClick(index)} className="label">
              {tabItem.label}
            </span>
          </div>
        ))}
      </div>
      <div className="content">
        {tabcontent[currIndex] && show && tabcontent[currIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
