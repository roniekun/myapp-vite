import React from 'react'
import './HomeContent.css';
// import ObjectParallax from '../../../assets/Parallax/ObjectParallax';
// import Logo from '../../../assets/Temp/Logo';
// import PscLogo from '../../../assets/Temp/PscLogo';
import ImageSlider from './elements/imageslider/ImageSlider';



const HomeContent = () => {

  return (
    <div className='home__content__container'>
     {/* <ObjectParallax/> */}
        <ImageSlider />


    </div>
  )
}

export default HomeContent