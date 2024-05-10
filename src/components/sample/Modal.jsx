import React from "react";
import "./style.css";

const Modal = ({ onClose, openModal }) => {
  return (
    <div className={`main ${openModal ? "show" : "hide"}`}>
      <div onClick={onClose} className="close">
        &times;
      </div>
      <div className="">I am a Modal</div>
    </div>
  );
};

export default Modal;
