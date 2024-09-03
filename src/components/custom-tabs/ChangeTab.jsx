import React, { useState } from "react";

const ChangeTab = () => {
  const [data, setData] = useState("");
  const [isSelected, setIsSelected] = useState("");
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is 2</div>,
    },
    {
      label: "Tab 3",
      content: <div>This is 3</div>,
    },
  ];

  const hanldeClick = (id) => {
    console.log(id);
    setData(tabs[id].content);
    setIsSelected(id);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", margin: "20px" }}>
        {tabs.map((tab, index) => (
          <div
            style={{
              margin: "5px",
              cursor: "pointer",
              border: "1px solid black",
              padding: "10px",
              backgroundColor: isSelected === index ? "blue" : "",
            }}
            onClick={() => hanldeClick(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div>{data}</div>
    </div>
  );
};

export default ChangeTab;
