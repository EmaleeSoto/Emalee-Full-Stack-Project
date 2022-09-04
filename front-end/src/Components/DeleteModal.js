import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DeleteModal.css";

/**
 * Modal Window that displays an error message
 * @params navigate - useNavigate()
 * @returns Error Message in Modal Window View
 */
const DeleteModal = () => {
  const [display, setDisplay] = useState(true);
  const navigate = useNavigate();

  const close = () => {
    setDisplay(false);
    navigate("/gamers");
  };

  if (display) {
    return (
      <div className="delete-modal-wrapper">
        <div className="modal-backdrop" />
        <div className="modal-box">
          <h1>Successfully Deleted this profile!</h1>
          <p>You've killed this profile. R.I.P.</p>
          <button id="modal-button" onClick={close}>
            Go Back To Our Gamers
          </button>
          <img
            id="modal-image"
            src="https://media4.giphy.com/media/dG5TxQONYoffTeVgHY/giphy.gif"
            alt="Error!"
          />
        </div>
      </div>
    );
  }
  return null;
};

export default DeleteModal;
