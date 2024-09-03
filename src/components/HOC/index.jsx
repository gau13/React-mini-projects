import React from "react";
import Person1 from "./Person1";
import Person2 from "./Person2";

const Hoc = () => {
  return (
    <div>
      <h1>HOC</h1>
      <Person1 />
      <Person2 />
    </div>
  );
};

export default Hoc;
