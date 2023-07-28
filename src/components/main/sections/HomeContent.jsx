import React, { useState } from 'react';
import './HomeContent.css';
import ContactForm from './elements/ContactForm';
import PageModal from './PageModal';

const HomeContent = () => {
  const [showContactForm, setShowContactForm] = useState(false);


  const handleClick = () => {

    setShowContactForm(!showContactForm);
   
  };

  return (
    <div className='home__content__container'>
      <div className='first_container'>
        <h1 className='hero'>
          Unlock your visual story:<br /> 
          <h3><span>Transforming Visions into Digital Masterpiece</span></h3>
        </h1>
        <b className='request_btn' data-copy-text='roniebenitez01@gmail.com'  onClick={handleClick}>
          Request Project <span className="material-symbols-outlined">trending_flat</span>
        </b>
      </div>

      <div className='second_container'>
        <h3>Web Development</h3>
        <p className='p_tag_home'>
          He creates websites using the ReactJS Framework and is currently expanding his expertise in front-end development.
          <br />
        </p>
      </div>

      <div className='third__container'>
        <h3>Photography</h3>
        <p className='qoute'>
          I find joy in the art of Photography.<br />
          While I don't limit myself to a specific niche,
          my portfolio reflects a diverse array of captivating shots.
        </p>
      </div>
      <div className='forth__container'>
        <p>
          <span>Stay awhile </span><br /> immerse yourself in the fusion of technology and artistic expression.<br />
          Whether you're intrigued by my coding wizardry or drawn to the beauty of visual storytelling,<br />
          I hope my work leaves you inspired and eager to embark on future collaborations.
        </p>
      </div>
      {showContactForm && <PageModal zIndex={'9999'} showContactForm={showContactForm}/>}
      {showContactForm &&
       <div className= {showContactForm  ? 'contact_form_container' : 'hidden'}>
        <span  onClick={handleClick} style={{color: 'white', position: 'absolute', right: '0', cursor: 'pointer', margin: '5%', 
        background:'black'}} className="material-symbols-outlined">
        close
        </span>
       <ContactForm /></div> 
     }
  

 
    </div>
  );
};

export default HomeContent;
