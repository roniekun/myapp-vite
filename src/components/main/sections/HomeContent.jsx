import React from 'react';
import './HomeContent.css';
// import ImageSlider from './elements/imageslider/ImageSlider';

const HomeContent = () => {

  return (
    <div className='home__content__container'>
      <div className='first__container'>
        <p>
          Ronie is a web-developer and photography enthusiast.<br/> He also has a keen eye for designs. <br/>
        </p>
      </div>

      <div className='second__container'>
        <h3>Web Development</h3> 
        <p>
          He creates websites using the ReactJS Framework and is currently expanding his expertise in front-end development. <br/>
        </p>
      </div>

      <div className='third__container'>
        <h3>Photography</h3>
        <p className='qoute'>
          I find joy in the art of Photography.<br/>
          While I don't limit myself to a specific niche,
          my portfolio reflects a diverse array of captivating shots.
        </p>
      </div>
      <div className='forth__container'>
          <p >
          <span>Stay awhile </span><br/> immerse yourself in the fusion of technology and artistic expression.<br/> 
          Whether you're intrigued by my coding wizardry or drawn to the beauty of visual storytelling,<br/>
          I hope my work leaves you inspired and eager to embark on future collaborations.
          </p>
        </div>
    </div>
  );
}

export default HomeContent;
