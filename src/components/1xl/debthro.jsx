import React, { useState } from "react";

const Debthro = () => {
  const [deb, setDeb] = useState("");
  const [thro, setThro] = useState("");

  function mydebounce(fn, delay) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  }

  function mythrottle(fn, delay) {
    let timer;
    return (...args) => {
      if (!timer) {
        fn(...args);
        timer = setTimeout(() => {
          timer = null;
        }, delay);
      }
    };
  }

  const handleDeb = (e) => {
    setDeb(e.target.value);
  };
  const handleThro = () => {
    setThro(e.target.value);
  };

  const debounce = mydebounce(handleDeb, 500);
  const throttle = mythrottle(handleThro, 500);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <input type="text" onClick={debounce} />
      {deb}
      <input type="text" onClick={throttle} />
      {thro}
    </div>
  );
};

export default Debthro;
