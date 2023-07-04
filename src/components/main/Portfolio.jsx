import React from 'react';
import './Portfolio.css';
import PortfolioContent from './sections/PortfolioContent';
import Footer from '../Footer';
import PhotoCarousel from './sections/elements/PhotoCarousel';


function Portfolio({showNavbar, isSmallScreen}) {
  return (
    <>
        <div className='portfolio__container'>
        <PortfolioContent/>
          <h1 style={{width: '100Vw', display: 'flex', justifyContent: 'center'}}>Featured</h1>
          <div className='carousel__container'>
          {/* <PhotoCarousel/> */}
          </div>
    </div>
      <Footer  isSmallScreen={isSmallScreen}/>
    </>
  );
}

export default Portfolio;
