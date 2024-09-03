// import React from "react";

// const Tictactoe = ({ state, setState, id, toggle }) => {
//   if (toggle) {
//     setState("O");
//   } else {
//     setState("X");
//   }
//   return (
//     <div
//       style={{
//         height: "100px",
//         width: "200px",
//         backgroundColor: "white",
//         border: "2px solid black",
//       }}
//     >
//       {state}
//     </div>
//   );
// };

// export default Tictactoe;
// src/Tictactoe.js
import React from "react";

const Tictactoe = ({ value, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        height: "100px",
        width: "100px",
        backgroundColor: "white",
        border: "2px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "24px",
      }}
    >
      {value}
    </div>
  );
};

export default Tictactoe;
