import React from "react";
import Tabs from "./tabs";

const TabTest = () => {
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
  return (
    <div>
      <Tabs tabcontent={tabs} />
    </div>
  );
};

export default TabTest;
