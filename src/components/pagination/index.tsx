import React, { useState } from "react";

type PaginationProps = {
  noOfPages: number;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination: React.FC<PaginationProps> = ({
  noOfPages,
  count,
  setCount,
}) => {
  const [leftDisable, setLeftDisable] = useState(false);
  const [rightDisable, setRightDisable] = useState(false);
  const pageCount: number[] = [];
  // console.log(noOfPages);

  const generatePages = () => {
    for (let i = 1; i <= noOfPages; i++) {
      pageCount.push(i);
    }
    // console.log(pageCount);
    return pageCount;
  };

  const buttonClick = (index: number) => {
    index === noOfPages - 1 ? setLeftDisable(true) : setLeftDisable(false);
    index === 0 ? setRightDisable(true) : setRightDisable(false);

    setCount(index);
  };

  const handlePrev = () => {
    if (count == 0) return;
    else {
      setCount((prev) => prev - 1);
    }
  };
  const handleNext = () => {
    if (count === noOfPages) return;
    else {
      setCount((prev) => prev + 1);
    }
  };
  return (
    <div>
      <button disabled={rightDisable ? true : false} onClick={handlePrev}>
        Prev
      </button>
      {generatePages().map((item, index) => (
        <button
          key={index}
          onClick={() => buttonClick(index)}
          style={{ width: "20px" }}
        >
          {item}
        </button>
      ))}
      <button disabled={leftDisable ? true : false} onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
