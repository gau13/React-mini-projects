import React, { useState } from "react";
import Modal from "./Modal";
import "./style.css";

const Home = () => {
  const [openModal, setOpenModel] = useState(false);

  const handleCloseModal = () => {
    setCloseModel(true);
  };
  return (
    <div>
      <button className="btn" onClick={() => setOpenModel(true)}>
        Open
      </button>

      <Modal onClose={() => setOpenModel(false)} openModal={openModal} />
    </div>
  );
};

export default Home;
