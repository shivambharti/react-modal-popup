import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-close" onClick={onClose}>X</div>
        {children}
        <button className="modal-button">Okay</button>
      </div>
    </div>
  );
};

export default Modal;