import React, { useMemo, useState, useCallback } from "react";

const DebounceThrottling = () => {
  const [debounceText, setDebounceText] = useState("");
  const [throttleText, setThrottleText] = useState("");

  const ourDebounce = (fn, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const ourThrottle = (fn, delay) => {
    let timer;
    return (...args) => {
      if (!timer) {
        fn(...args);
        timer = setTimeout(() => {
          timer = null;
        }, delay);
      }
    };
  };

  const handleDebounce = (e) => {
    setDebounceText(e.target.value);
  };

  const handleThrottle = (e) => {
    setThrottleText(e.target.value);
  };

  // const Debounce=useCallback(ourDebounce(handleDebounce,500))
  // const Throttle=useCallback(ourThrottle(handleThrottle,1000),[])

  const Debounce = useMemo(() => ourDebounce(handleDebounce, 500));
  const Throttle = useMemo(() => ourThrottle(handleThrottle, 1000), []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Debounce</h1>
      <input onChange={Debounce} type="text" />
      {debounceText}
      <h1>Throttle</h1>
      <input onChange={Throttle} type="text" />
      {throttleText}
    </div>
  );
};

export default DebounceThrottling;
