import React from 'react'
import './ContactModal.css';
    const ContactModal = ({ isSuccess, message, closeModal }) => {
        return (
          <div className={isSuccess ? 'success' : 'error'}>
              <h3 style={{fontWeight: 500, justifyContent: 'center', padding: '10px'}}>{isSuccess ? 'Success' : 'Error'}</h3>
              <p>{message}</p>
              <button className='modal__btn' onClick={closeModal}>OK</button>
            </div>
  
        );

    }
export default ContactModal
