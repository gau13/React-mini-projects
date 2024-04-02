import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

const ImageSlider = ({ url, limit }) => {
  const [current, setCurrent] = useState(0);
  const [pics, setPics] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPics = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=1&limit=${limit}`);
      const data = await response.json();
      setPics(data);
      setLoading(false);

      console.log(data);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPics();
  }, []);

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Error {error}</div>;
  }
  const handleNext = () => {
    setCurrent(current === pics.length - 1 ? 0 : current + 1);
  };

  const handlePrev = () => {
    setCurrent(current === 0 ? pics.length - 1 : current - 1);
  };
  return (
    <div className="container">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={handlePrev}
      />
      {pics.map((item, index) => (
        <img
          key={item.id}
          src={item.download_url}
          className={current === index ? "photo" : "photo-hide"}
        />
      ))}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={handleNext}
      />
    </div>
  );
};

export default ImageSlider;
