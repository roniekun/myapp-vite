import React from 'react'
import './HomeContent.css';
import ObjectParallax from '../../../assets/Parallax/ObjectParallax';
// import Logo from '../../../assets/Temp/Logo';
// import PscLogo from '../../../assets/Temp/PscLogo';
import ImageSlider from './elements/imageslider/ImageSlider';



const containerStyles = {
  width: "100vw",
  height: "100vh",
  margin: "0 auto",
};


const HomeContent = () => {

  return (
    <div className='home__content__container'>
     <ObjectParallax/>
     <div style={containerStyles}>
        <ImageSlider />
      </div>

    </div>
  )
}

export default HomeContent