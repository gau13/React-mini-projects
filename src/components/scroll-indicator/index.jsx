import React, { useState } from "react";
import { useEffect } from "react";
import "./style.css";

const ScrollIndicator = ({ url }) => {
  const [products, setProducts] = useState([]);
  const [scrollPercent, setScrollPercent] = useState(0);
  const fetchProducts = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data.products);
      console.log(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const handleScrollPercent = () => {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercent((howMuchScrolled / height) * 100);
  };

  useEffect(() => {
    fetchProducts(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercent);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  console.log(scrollPercent);

  return (
    <>
      <div className="top">
        <h3>Scroll Indicator</h3>
        <div className="progress-container">
          <div
            className="progress-bar"
            style={{ width: `${scrollPercent}%` }}
          ></div>
        </div>
      </div>
      <div className="scroll">
        {products && products.length > 0
          ? products.map((item) => <p>{item.title}</p>)
          : null}
      </div>
    </>
  );
};

export default ScrollIndicator;
