import React, { useState } from "react";
import "./modal.css";
import Modal from "./Modal";
const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="modal-page">
      <button onClick={handleModal}>Open Modal Popup</button>

      {showModal && (
        <div>
          <Modal />
        </div>
      )}
    </div>
  );
};

export default ModalPage;
