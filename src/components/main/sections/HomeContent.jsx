// import React, { useState } from 'react';
import './HomeContent.css';
import { ReactComponent as TrendingFlat } from './trending_flat.svg'
// import ContactForm from './elements/ContactForm';
// import PageModal from './PageModal';

const HomeContent = () => {
  // const [showContactForm, setShowContactForm] = useState(false);


  const email = 'roniebenitez01@gmail.com';
  const subject = 'Request Project';
  
  const handleClick = () => {

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className='home__content__container'>
      <div className='first_container'>
        <h1 className='hero'> 
          Unlock your visual story:<br /> 
          </h1>
          <h3 className='sub_hero'>Transforming Visions into Digital Masterpiece</h3>
   
        <b className='request_btn shadow' data-copy-text='roniebenitez01@gmail.com'  onClick={handleClick}>
          Request Project <span className="material-symbols-outlined"><TrendingFlat/></span>
        </b>
      </div>

      <div className='second_container'>
        <h3 className='ptag_title'>Web Development</h3>
        <p className='p_tag_home'>
          He creates websites using React and is currently expanding his expertise in front-end development.
          <br />
        </p>
      </div>

      <div className='third__container'>
        <h3 className='ptag_title'>Photography</h3>
        <p className='p_tag_home qoute'>
          I find joy in the art of Photography.<br />
          While I don't limit myself to a specific niche,
          my portfolio reflects a diverse array of captivating shots.
        </p>
      </div>
      <div className='forth__container'>
        <p className='p_tag_home'>
          <span>Stay awhile </span><br /> immerse yourself in the fusion of technology and artistic expression.<br />
          Whether you're intrigued by my coding wizardry or drawn to the beauty of visual storytelling,<br />
          I hope my work leaves you inspired and eager to embark on future collaborations.
        </p>
      </div> 
      {/* {showContactForm && <PageModal zIndex={'9999'} showContactForm={showContactForm}/>}
      {showContactForm &&
       <div className= {showContactForm  ? 'contact_form_container' : 'hidden'}>
        <span  onClick={handleClick} style={{color: 'white', position: 'absolute', right: '0', cursor: 'pointer', margin: '5%', 
        background:'black'}} className="material-symbols-outlined">
        close
        </span>
       <ContactForm /></div> 
     } */}
     <div className='fifth_container'>

          <h1 className='ptag_title'>Technology I use </h1> 
          <div className='tech_lists'>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Git/Github</li>
        <li>npm</li>
        <li>Firebase</li>
        <li>Sony Alpha</li>
        <li>Adobe Ligthroom</li>
    </ul>
</div>
     
        </div>
    </div>
  );
};

export default HomeContent;
