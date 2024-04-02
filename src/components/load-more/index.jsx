// import React, { useEffect, useState } from "react";

// const LoadMore = () => {
//   const [products, setProducts] = useState([]);

//   const fetchProducts = async () => {
//     try {
//       const response = await fetch(
//         "https://dummyjson.com/products?limit=10&skip=10&select-title, price"
//       );
//       const data = await response.json();
//       setProducts(data);
//       console.log(products);
//     } catch (error) {
//       <p>{error.message}</p>;
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);
//   return <div>{products.map((item) => ({ item }))}</div>;
// };

// export default LoadMore;
import React, { useEffect, useState } from "react";

const LoadMore = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await response.json();
      console.log(data);
      setProducts((prev) => [...prev, ...data.products]);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);
  useEffect(() => {
    if (products.length % 100 === 0 && products.length !== 0) {
      setDisable(true);
    }
  }, [products]);

  const loadMore = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {error && <p>{error}</p>}
      {products.map((item, index) => (
        <div key={index}>
          <img src={item.thumbnail} />
          <p>{item.price}</p>
        </div>
      ))}

      <button disabled={disable} onClick={loadMore}>
        Load more
      </button>

      {disable ? <p>You reached the limit</p> : null}
    </div>
  );
};

export default LoadMore;
