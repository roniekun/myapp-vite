import React from 'react';
import './Portfolio.css';
// import Footer from '../Footer';
import PhotoCarousel from './sections/elements/PhotoCarousel';


function Portfolio({showNavbar}) {
  return (
    <>
        <div className='portfolio__container'>
          <h1>Featured</h1>
          <div className='carousel__container'>
          <PhotoCarousel/>
          </div>
    </div>
      {/* <Footer/> */}
    </>
  );
}

export default Portfolio;
