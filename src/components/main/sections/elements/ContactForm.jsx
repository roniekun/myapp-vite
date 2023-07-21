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
    firstname: '',
    lastname: '',
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

    if (formData.firstname && formData.lastname && formData.email && formData.message) {
      formData.name = formData.firstname + ' ' + formData.lastname;
      setIsSubmitting(true);
      try {
        const submissionData = {
          ...formData,
          date: firebase.firestore.Timestamp.fromDate(new Date())
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
            <label htmlFor="firstname">FIRSTNAME: <br/></label>
            <input
              className='text__input'
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="lastname">LASTNAME: <br/></label>
            <input
              className='text__input'
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
          </div>
        </div>
         <div className='second__layer'>
          <label htmlFor="message"> EMAIL: <br/> </label>
          <input
            className='email__input'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='example@gmail.com'
          />
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
          {isSubmiting? 'Kindly wait' : 'SUBMIT' }</button>
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
