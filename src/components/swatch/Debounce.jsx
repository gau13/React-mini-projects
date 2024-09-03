// import React, { useState, useEffect } from "react";

// function Debounce() {
//   const [inputValue, setInputValue] = useState("");
//   const [debouncedValue, setDebouncedValue] = useState("");

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedValue(inputValue);
//     }, 1000); // Adjust the delay as needed

//     return () => clearTimeout(handler);
//   }, [inputValue]);

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <p>Debounced value: {debouncedValue}</p>
//     </div>
//   );
// }

// export default Debounce;

import React, { useEffect, useState } from "react";

const Debounce = () => {
  const [ipvalue, setIpvalue] = useState("");
  const [debounceVal, setDebounceVal] = useState("");

  useEffect(() => {
    let timer = setTimeout(() => {
      setDebounceVal(ipvalue);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [ipvalue]);

  return (
    <div>
      <input type="text" onChange={(e) => setIpvalue(e.target.value)} />
      {debounceVal}
    </div>
  );
};

export default Debounce;
