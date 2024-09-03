// import React, { useState } from "react";
// import Tictactoe from "./Tictactoe";

// const Index = () => {

//   const [state, setState] = useState("");
//   const [toggle, setToggle] = useState(true);

//   const arr = [0, 1, 2, 3, 4, 5];

//   const handleClick = (item) => {
//     console.log(item);
//     // setState("x");
//     setToggle(!toggle);
//   };

//   return (
//     <div>
//       {arr.map((item) => (
//         <div id={item}>
//           <Tictactoe
//             onClick={() => handleClick(item)}
//             id={item}
//             state={state}
//             setState={setState}
//             toggle={toggle}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Index;
// // src/Index.js
import React, { useState } from "react";
import Tictactoe from "./Tictactoe";

const Index = () => {
  const [board, setBoard] = useState(Array(6).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index) => {
    const newBoard = board.slice();
    if (newBoard[index]) return; // Ignore if the square is already filled

    newBoard[index] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", width: "400px" }}>
      {board.map((value, index) => (
        <Tictactoe
          key={index}
          value={value}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Index;
