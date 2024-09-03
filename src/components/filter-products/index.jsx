import React, { useEffect, useState } from "react";
import "./filter.css";

// type Data = {
//   category: string;
//   id: number;
//   title: string;
// };

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
