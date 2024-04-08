import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

const StarRating = ({ noofstars = 10 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index: number) => {
    console.log("click", index);
    setRating(index);
  };
  const handleMouseEnter = (index: number) => {
    console.log("enter", index);
    setHover(index);
  };
  const handleMouseLeave = (index: number) => {
    console.log("leave", index);
    setHover(rating);
  };
  return (
    <div className="star-rating">
      {[...Array(noofstars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            className={index <= hover ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={50}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
