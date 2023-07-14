import React from 'react'
import './ContactModal.css';
    const ContactModal = ({ isSuccess, message, closeModal }) => {
        return (
          <div className="modal">
            <div className={`modal__content ${isSuccess ? 'success' : 'error'}`}>
              <h3>{isSuccess ? 'Success' : 'Error'}</h3>
              <p>{message}</p>
              <button onClick={closeModal}>OK</button>
            </div>
          </div>
        );

    }
export default ContactModal
