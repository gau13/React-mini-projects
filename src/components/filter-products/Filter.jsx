import React, { useEffect, useState } from "react";
import "./filter.css";

const Filter = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [filter, setFilter] = useState([]);

  const filterProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setData(data.products);

    let uniqueArr = [
      "all",
      ...new Set(data.products.map((item) => item.category)),
    ];
    console.log(uniqueArr);
    setCategory(uniqueArr);
    setFilter(data.products);
  };
  useEffect(() => {
    filterProducts();
  }, []);

  const handleClick = (item) => {
    if (item === "all") {
      setFilter(data);
    } else {
      let filterArr = data.filter((brand) => brand.category === item);
      setFilter(filterArr);
    }
  };
  return (
    <div style={{ margin: "auto" }}>
      <div className="btn-container">
        {category.map((category) => (
          <button
            className="btn"
            onClick={() => handleClick(category)}
            key={category}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="filter-container">
        {filter.map((item) => (
          <div className="single" key={item.id}>
            <li>{item.title}</li>
            <button className="btn2">{item.category}</button>
          </div>
        ))}
        <div className="filter-container"></div>
      </div>
    </div>
  );
};

export default Filter;

// import React, { useEffect, useState } from "react";

// const Filter = () => {
//   const [data, setData] = useState([]);
//   const [category, setCategory] = useState([]);
//   const [filter, setFilter] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const res = await fetch("https://dummyjson.com/products");
//       const data = await res.json();
//       setData(data.products);

//       const cate = [
//         "all",
//         ...new Set(data.products.map((item) => item.category)),
//       ];
//       setCategory(cate);
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleclick = (item) => {
//     console.log(item);
//     if (item === "all") {
//       setFilter(data);
//     } else {
//       setFilter(data.filter((piece) => piece.category === item));
//     }
//   };
//   return (
//     <>
//       <div style={{ display: "flex" }}>
//         {category.map((item) => (
//           <div style={{ margin: "20px" }}>
//             <button onClick={() => handleclick(item)}>{item}</button>
//           </div>
//         ))}
//       </div>
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "space-around",
//           flexDirection: "column",
//           width: "100px",
//         }}
//       >
//         {filter.map((item) => (
//           <div
//             style={{
//               border: "1px solid black",
//             }}
//           >
//             {item.title}
//             <div>{item.category}</div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Filter;

// //
