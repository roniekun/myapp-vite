import React from 'react';
import './About.css';
import Footer from '../Footer';
import AboutContent from './sections/AboutContent';

function About({isSmallScreen }) {
  return (
    <div className='about__container'>
      <AboutContent />
      <Footer isSmallScreen={isSmallScreen} />
    </div>
  );
}

export default About;
