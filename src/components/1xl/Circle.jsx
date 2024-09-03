// import React, { useState } from "react";
// import "./styles.css";

// function Circle() {
//   const [circles, setCircles] = useState([]);
//   const [isClicked, setIsClicked] = useState(false);

//   const addCircle = () => {
//     setCircles([...circles, { id: Math.random(), color: "blue" }]);
//   };

//   const handleCircleClick = (id) => {
//     setCircles(circles.filter((circle) => circle.id !== id));
//     console.log(id);
//     // setIsClicked
//   };

//   return (
//     <div className="App">
//       <button onClick={addCircle}>Add Circle</button>
//       {circles.map((circle) => (
//         <div
//           key={circle.id}
//           className={`circle ${circle.color}`}
//           onClick={() => handleCircleClick(circle.id)}
//         />
//       ))}
//     </div>
//   );
// }

// export default Circle;

// // styles.css (optional)
// import React, { useState } from "react";

// const Circle = () => {
//   const [circles, setCircles] = useState([]);

//   const handleClick = (event) => {
//     const newCircle = {
//       id: circles.length,
//       left: event.clientX,
//       top: event.clientY,
//       bgColor: "blue",
//     };
//     setCircles([...circles, newCircle]);
//   };

//   const handleCircleClick = (id) => {
//     setCircles(
//       circles.map((circle) =>
//         circle.id === id ? { ...circle, bgColor: "" } : circle
//       )
//     );
//   };

//   return (
//     <div style={{ height: "100vh", width: "100vw" }} onClick={handleClick}>
//       {circles.map((circle) => (
//         <div
//           key={circle.id}
//           onClick={(e) => {
//             e.stopPropagation();
//             handleCircleClick(circle.id);
//           }}
//           style={{
//             position: "absolute",
//             left: circle.left - 25, // Adjust to center the circle
//             top: circle.top - 25, // Adjust to center the circle
//             width: 50,
//             height: 50,
//             borderRadius: "50%",
//             backgroundColor: circle.bgColor,
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default Circle;

import React, { useState } from "react";

const Circle = () => {
  const [circle, setCircle] = useState([]);

  const handleClick = (e) => {
    const newCircle = {
      id: circle.length,

      left: e.clientX,
      top: e.clientY,
      bgColor: "blue",
    };
    setCircle([...circle, newCircle]);
  };
  const handleCircleClick = (id) => {
    setCircle(
      circle.map((circle) =>
        circle.id === id ? { ...circle, bgColor: "" } : circle
      )
    );
  };

  return (
    <div style={{ height: "100vh", width: "100vw" }} onClick={handleClick}>
      {circle.map((circle) => (
        <div
          key={circle.id}
          onClick={(e) => {
            e.stopPropagation();
            handleCircleClick(circle.id);
          }}
          style={{
            position: "absolute",
            left: circle.left - 25, // Adjust to center the circle
            top: circle.top - 25, // Adjust to center the circle
            width: 50,
            height: 50,
            borderRadius: "50%",
            backgroundColor: circle.bgColor,
          }}
        ></div>
      ))}
    </div>
  );
};
export default Circle;
