import React, { useState } from 'react';
import './ContactForm.css';
import ContactModal from './ContactModal';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDCbfEVWBnQQ0LtWmWQdomUifl8QOncSDM",
  authDomain: "netlify-project-contact-form.firebaseapp.com",
  projectId: "netlify-project-contact-form",
  storageBucket: "netlify-project-contact-form.appspot.com",
  messagingSenderId: "1062242217772",
  appId: "1:1062242217772:web:29e9de0bf9c2f49f5d4689"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const ContactForm = () => {
  const initialFormData = {
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmiting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      setIsSubmitting(true);
      try {
        const submissionData = {
          ...formData,
          submissionDate: firebase.firestore.Timestamp.fromDate(new Date())
        };
        await db.collection('contact-form').add(submissionData);
        // Save the form data to Firebase
        setIsSuccess(true);
        setModalMessage('Form submitted successfully!');
        setIsSubmitting(false);
      } catch (error) {
        setIsSuccess(false);
        setModalMessage('Failed to submit the form. Please try again later.');
        console.error('Error submitting form:', error);
      } finally {
        setShowModal(true);
        setFormData(initialFormData);
      }
    } else {
      setIsSuccess(false);
      setModalMessage('Failed to submit the form. Please fill in all fields.');
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='form__container'>
      <h1 className='form__heading'>Get in touch</h1>
      <form className='form' onSubmit={handleSubmit}>
        <div className='first__layer'>
          <div>
            <label htmlFor="name">NAME: <br/></label>
            <input
              className='text__input'
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
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='second__layer'>
          <label htmlFor="message"> MESSAGE: <br/> </label>
          <textarea
            className='text__area'
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder='Start typing here...'
          />
        </div>
        <button className='submit__button' type="submit">
          {isSubmiting? 'Please wait...' : 'SUBMIT' }</button>
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
