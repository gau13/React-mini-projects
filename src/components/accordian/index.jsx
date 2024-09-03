import React, { useState } from "react";
import Accordian from "./Accordian";
import data from "./data";

const AccordianTest = () => {
  const [show, setShow] = useState(null);

  const handleClick = (id) => {
    setShow((prevShow) => (prevShow === id ? null : id));
    // setShow(id);
  };
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <Accordian
            onClick={() => handleClick(item.id)}
            item={item}
            show={show === item.id}
          />
        </div>
      ))}
    </div>
  );
};

export default AccordianTest;
