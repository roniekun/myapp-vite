import React, { useState, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './Footer.css'; 
import SocialLinks from './icons/SocialLinks';


function Footer({ showNavbar, isSmallScreen}) {
  const [showFooter, setShowFooter] = useState(window.innerWidth > 768);

  useEffect(() => {
    if (window.innerWidth <= 768 && showNavbar ){ 
      setShowFooter(false)
      }
      else{
        setShowFooter(true)
      }
  }, [showNavbar,showFooter]);

  return (
    <ThemeContext.Consumer>
  {({ theme }) => (

    <div id={`component-${theme}`} className={`footer__container ${showFooter ? 'footer__container' :'hidden'}`}>

    <> 
      <SocialLinks fillColor={"white"} 
      displayNames={true} 
      isSmallScreen={isSmallScreen} 
      flexDirection={"column"}/>

      <p id={`component-${theme}`}  className='text'>© 2023. All rights reserved. This site is a work in progress :)</p>  
    </>

</div>

)}
</ThemeContext.Consumer>
  );
}

export default Footer;


