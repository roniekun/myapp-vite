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
      <form className='form' onSubmit={handleSubmit}>
        <div >
          {/* <label htmlFor="name">Name: <br/></label> */}
          <input
           placeholder='Name'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          {/* <label htmlFor="email">Email: <br/></label> */}
          <input
           placeholder='Email'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          {/* <label htmlFor="message"> Message: <br/> </label> */}
          <textarea

            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder='Message'
            rows="5" // Adjust the number of rows as needed
            style={{overflowY: 'scroll', resize: 'none'  }}
          />
        </div>
        <button className='submit__button' type="submit" >Submit</button>
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
