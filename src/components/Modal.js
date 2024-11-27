import React from "react";
import ReactDOM from "react-dom";

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  // Create a portal
  return ReactDOM.createPortal(
    <div className="overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root") // Render in the "modal-root" container
  );
};
