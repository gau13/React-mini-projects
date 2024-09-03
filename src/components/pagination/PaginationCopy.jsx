// import "./styles.css";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const PaginationCopy = () => {
  const [active, setActive] = useState(0);
  const [leftDisable, setLeftDisable] = useState(false);
  const [rightDisable, setRightDisable] = useState(false);

  const pages = Array.from({ length: 10 }, (_, index) => index + 1);
  const handlePage = (id) => {
    setActive(id);
    id === pages.length - 1 ? setRightDisable(true) : setRightDisable(false);
    id === 0 ? setLeftDisable(true) : setLeftDisable(false);
  };
  console.log(active);

  const handlePrev = () => {
    //  active===0?setLeftDisable(true):setLeftDisable(false)
    //   setActive((prevPage)=>prevPage-1)
    setActive((prevPage) => prevPage - 1);
  };
  useEffect(() => {
    // Update button states when `active` changes
    setLeftDisable(active === 0);
    setRightDisable(active === pages.length - 1);
  }, [active]);
  const handleNext = () => {
    // id===pages.length-1?setRightDisable(true):setRightDisable(false)
    setActive((prevPage) => prevPage + 1);
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <button disabled={leftDisable ? true : false} onClick={handlePrev}>
          {"<"}
        </button>
        {pages.map((item, index) => (
          <div
            onClick={() => handlePage(index)}
            style={{
              padding: "15px",
              borderRadius: "50%",
              background: active === index ? "red" : "",
            }}
          >
            {item}
          </div>
        ))}
        <button disabled={rightDisable ? true : false} onClick={handleNext}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default PaginationCopy;
