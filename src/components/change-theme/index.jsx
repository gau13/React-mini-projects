import React from "react";
import "./style.css";
import { useLocalStorage } from "./useLocalStorage";

const LightDark = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme);
  };
  return (
    <>
      <div className={theme === "light" ? "light" : "dark"}>
        <div className="container">
          <p className={theme === "light" ? "p-light" : "p-dark"}>
            Hello World
          </p>
          <button
            className={theme === "light" ? "button-light" : "button-dark"}
            onClick={handleClick}
          >
            Change
          </button>
        </div>
      </div>
    </>
  );
};

export default LightDark;
