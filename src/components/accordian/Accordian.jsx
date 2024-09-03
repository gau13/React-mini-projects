import React from "react";

const Accordian = ({ item, show, onClick }) => {
  //   console.log(item);
  return (
    <div style={{ width: "400px", margin: "auto", border: "2px solid black" }}>
      <div style={{ padding: "15px" }} onClick={onClick}>
        {item.question}
      </div>

      {show && <div style={{ padding: "15px" }}>{item.answer}</div>}
    </div>
  );
};

export default Accordian;
