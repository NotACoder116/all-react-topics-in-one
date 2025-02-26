import React from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

const Modal = ({ show, onClose, title, children }) => {
  return createPortal((
    show && (
      <div className="modal-backdrop">
        <div className="modal-wrapper">
          <div className="modal-header justify-between items-center flex">
            <div className="modal-title">{title}</div>
            <span className="modal-close" onClick={onClose}>
              X
            </span>
          </div>
          <div className="modal-body">{children}</div>
        </div>
        ;
      </div>
    )
  ), document.getElementById('modal-root'));
};

export default Modal;
