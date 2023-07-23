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


        <div className="intro">
          <h1 className='intro__heading'>Hi, I'm Ron. <br/></h1>
          <p className="intro__text">
                         This is my portfolio website focuses on two things: <br/>
          </p>
          <p className='intro__text'>
                      
                        <span>Web Development </span>  <br/>
                                                       <br/>     
                        I make website using Reactjs Framework, currently expanding my expertise in front-end development. <br/>
          </p>
            <p className="intro__text">
                         <span>Photography</span>  <br/>
                                                   <br/>
                        I find joy in the art of Photography. While I don't limit myself to a specific niche,<br/>
                        my portfolio reflects a diverse array of captivating shots.
            </p>
    
        </div>

        <div className='intro'>
          <p className='intro__text'>
                        Stay awhile <br/> and immerse yourself in the fusion of technology and artistic expression.<br/> 

                        Whether you're intrigued by my coding wizardry or drawn to the beauty of my visual storytelling,<br/>
                        I hope my work leaves you inspired and eager to embark on future collaborations.
          </p>
        </div>

    </div>
    
  )
}

export default HomeContent