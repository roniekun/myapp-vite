import React from 'react'
import './HomeContent.css';
import ObjectParallax from '../../../assets/Parallax/ObjectParallax';
import Logo from '../../../assets/Temp/Logo';


const HomeContent = () => {

  return (
    <div className='home__content__container'>
     <ObjectParallax/>
     <Logo/>

    </div>
  )
}

export default HomeContent