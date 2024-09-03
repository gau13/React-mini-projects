// import React, { useState } from "react";
// import { FaStar } from "react-icons/fa";
// import "./style.css";

// const Star = () => {
//   const [hover, setHover] = useState("");
//   let arr = Array.from({ length: 10 }, (_, index) => index + 1);
//   console.log(arr);

//   const handleClick = (id) => {
//     setHover(id);
//     console.log(id);
//   };
//   return (
//     <div>
//       <div>
//         {arr.map((id) => (
//           <FaStar
//             className={id <= hover ? "active" : "inactive"}
//             onClick={() => handleClick(id)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Star;
import React, { useState } from "react";

const Star = () => {
  const [circle, setCircle] = useState({ x: 0, y: 0, visible: false });
  const handleMove = (e) => {
    setCircle({
      x: e.clientX,
      y: e.clientY,
      visible: true,
    });
  };
  return (
    <div
      style={{
        height: "200px",
        border: "1px solid black",
        position: "relative",
      }}
      onMouseOver={handleMove}
    >
      <p>Move your mouse over this area</p>
      {circle.visible && (
        <div
          style={{
            position: "absolute",
            top: `${circle.y - 25}px`,
            left: `${circle.x - 25}px`,
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "red",
          }}
        ></div>
      )}

      {/* <p>Mouse X position: {clientx}</p> */}
    </div>
  );
};

export default Star;
