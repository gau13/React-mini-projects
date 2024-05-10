import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Pagination from ".";

interface Product {
  title: string;
}
const Test = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [pages, setPages] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  console.log(pages);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${
          count === 0 ? 0 : count * 10
        }`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data.products);
      setPages(data.total / 10);
      console.log(products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  return (
    <div>
      <h2>
        {products.map((product, index) => (
          <div key={index}>
            <h2>{product.title}</h2>
          </div>
        ))}
      </h2>
      <Pagination noOfPages={pages} count={count} setCount={setCount} />
    </div>
  );
};

export default Test;
