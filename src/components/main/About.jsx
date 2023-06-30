import React from 'react';
import './About.css';
import Footer from '../Footer';
import AboutContent from './elements/AboutContent';

function About({ showNavbar }) {
  return (
    <div className='about__container'>
      <AboutContent />
      <Footer />
    </div>
  );
}

export default About;