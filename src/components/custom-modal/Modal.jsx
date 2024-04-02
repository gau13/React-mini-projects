import React from "react";
import "./modal.css";
const Modal = () => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-heading">
          Customixed Header
          <span className="cross">&times;</span>
        </div>
        <div className="modal-body">Body</div>
        <div className="modal-footer">Customixed Footer</div>
      </div>
    </div>
  );
};

export default Modal;
