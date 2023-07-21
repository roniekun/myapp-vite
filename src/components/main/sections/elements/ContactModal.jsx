import React from 'react'
import './ContactModal.css';
    const ContactModal = ({ isSuccess, message, closeModal }) => {
        return (
          <div className={isSuccess ? 'success' : 'error'}>
              <h3 style={{fontFamily: 'Montserrat', fontWeight: 500, justifyContent: 'center', padding: '10px'}}>{isSuccess ? 'Success' : 'Error'}</h3>
              <p style={{justifySelf: 'center', textAlign:'justify', fontSize: '12px' ,fontFamily: 'Inter'}}>{message}</p>
              <button className='modal__btn' onClick={closeModal}>OK</button>
            </div>
  
        );

    }
export default ContactModal
