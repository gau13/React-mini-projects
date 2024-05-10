import React, { useEffect, useState } from "react";
import "./filter.css";

const FilterCards = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const fetchProducts = async () => {
    try {
      const api = await fetch("https://dummyjson.com/products");
      const res = await api.json();
      console.log(res);

      if (res && res.products) {
        console.log(res);
        setData(res.products);
        console.log(data);

        let uniqueProducts = [
          ...new Set(res.products.map((productItem) => productItem.category)),
        ];
        uniqueProducts = ["all", ...uniqueProducts];

        setCategories(uniqueProducts);
        setFilteredData(res.products);
      }
    } catch (error) {}
  };

  // console.log(uniqueProducts);

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleData = (category) => {
    if (category === "all") {
      setFilteredData(data);
      return;
    }
    setFilteredData(data.filter((item) => item.category === category));
  };
  return (
    <div style={{ margin: "auto" }}>
      <div className="btn-container">
        {categories.map((category) => (
          <button
            className="btn"
            onClick={() => handleData(category)}
            key={category}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="filter-container">
        {filteredData.map((item) => (
          <div className="single" key={item.id}>
            <li>{item.title}</li>
            <button className="btn2">{item.category}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterCards;
// import React, { useEffect, useState } from "react";
// import "./filter.css";

// const FilterCards = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch("https://dummyjson.com/products");
//         const data = await response.json();
//         if (data && data.products) {
//           setProducts(data.products);
//           const uniqueCategories = [
//             "all",
//             ...new Set(data.products.map((product) => product.category)),
//           ];
//           setCategories(uniqueCategories);
//           setFilteredProducts(data.products);
//         }
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleFilter = (category) => {
//     if (category === "all") {
//       setFilteredProducts(products);
//     } else {
//       const filtered = products.filter(
//         (product) => product.category === category
//       );
//       setFilteredProducts(filtered);
//     }
//   };

//   return (
//     <div style={{ margin: "auto" }}>
//       {categories.map((category) => (
//         <button onClick={() => handleFilter(category)} key={category}>
//           {category}
//         </button>
//       ))}
//       <div className="filter-container">
//         {filteredProducts.map((product) => (
//           <div className="single" key={product.id}>
//             <li>{product.title}</li>
//             <button>{product.category}</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FilterCards;
