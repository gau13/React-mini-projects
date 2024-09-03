import React, { useState } from "react";

function SquareDisplay() {
  const [numSquares, setNumSquares] = useState(0);

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value >= 0) {
      setNumSquares(value);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={numSquares}
        onChange={handleInputChange}
        placeholder="Enter the number of squares"
      />
      <div style={{ position: "relative" }}>
        {Array.from({ length: numSquares }).map((_, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              width: "50px",
              height: "50px",
              backgroundColor: `hsl(${(index * 360) / numSquares}, 100%, 50%)`,
              border: "1px solid black",
              top: index * 25, // Adjust top position as needed
              left: index * 25,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default SquareDisplay;
