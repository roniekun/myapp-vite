import React, { useState } from 'react';
import './ContactForm.css';
import ContactModal from './ContactModal';

const ContactForm = () => {
  const initialFormData = {
    name: '',
    email: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);


  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Replace this with your own submission logic
    // Simulating a successful submission here
    if (formData.name && formData.email && formData.message) {
      setIsSuccess(true);
      console.log(formData);
      setFormData(initialFormData);
      setModalMessage('Form submitted successfully!');

    } else {
      setIsSuccess(false);
      setModalMessage('Failed to submit the form. Please fill in all fields.');
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='form__container'>
    
      <h1 style={{fontSize:'50px', marginTop:'50px'}}>Get in touch</h1>
      <form className='form' onSubmit={handleSubmit}>
        <div className='first__layer' style={{ display: 'flex', justifyContent: 'space-between', width: '100%',margin: '10px'}}>
        <div >
          <label htmlFor="name">NAME: <br/></label>
          <input
            className='text__input'
            style={{height:'50px', fontSize: '14px', padding: '10px', marginTop:'5px'}}
            placeholder='Enter your full name'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}

          />
        </div>
        <div>
          <label htmlFor="email">EMAIL: <br/></label>
          <input
           className='text__input'
           placeholder='Enter your email'
           style={{height:'50px', fontSize: '14px', padding: '10px',marginTop:'5px'}}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        </div>
       
        <div>
          <label htmlFor="message"> MESSAGE: <br/> </label>
          <textarea
            className='text__area'
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder='Start typing here'
            style={{overflowY: 'scroll', resize: 'none', height:'100px', fontSize: '14px',
                     borderRadius: '3px',padding: '10px',marginTop:'5px'  }}
          />
        </div>
        <button className='submit__button' type="submit" >SUBMIT</button>
      </form>

      {showModal && (
        <ContactModal
          isSuccess={isSuccess}
          message={modalMessage}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default ContactForm;
