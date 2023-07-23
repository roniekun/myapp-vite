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

        <div style={{backgroundColor: 'white'}}>
        <div className="intro">
          <h1 className='intro__heading'>Hi, I'm <span>Ron</span>. <br/></h1>
          <p className="intro__text">
                         This is my portfolio website focuses on two things: <br/>
          </p>
          <p className='intro__text'>
                      
                        <span>Web Development </span>  <br/>
                                                       <br/>     
                        I make website using ReactJS Framework, currently expanding my expertise in front-end development. <br/>
          </p>
            <p className="intro__text">
                         <span>Photography</span>  <br/>
                                                   <br/>
                        I find joy in the art of Photography. While I don't limit myself to a specific niche,<br/>
                        my portfolio reflects a diverse array of captivating shots.
            </p>
    
        </div>

    </div>

        <div className='outro'>
          <p className='outro__text'>
                        <span>Stay awhile </span><br/> immerse yourself in the fusion of technology and artistic expression.<br/> 

                        Whether you're intrigued by my coding wizardry or drawn to the beauty of my <br/>visual storytelling,<br/>
                        I hope my work leaves you inspired and eager to embark on future collaborations.
          </p>
        </div>


        <div className='tech'>
          <h1 className='tech__heading'>Technology I use </h1> 
          <>
          <ul className='tech__lists'>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript ES7/ES8</li>
          <li>React</li>
          <li>Git/Github</li>
          <li>Firebase</li>
          <li>Sony Alpha</li>
          <li>Adobe Ligthroom</li>
          </ul>
          </>

          
        </div>
        

    </div>
    
  )
}

export default HomeContent