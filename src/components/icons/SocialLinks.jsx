import React from 'react';
import './SocialLinks.css';
import { ReactComponent as FacebookIcon } from './svg/facebook.svg'; // https://simpleicons.org/
import { ReactComponent as InstagramIcon } from './svg/instagram.svg';
import { ReactComponent as GithubIcon } from './svg/github.svg';
import { ReactComponent as LinkedinIcon } from './svg/linkedin.svg';
import { ThemeContext } from '../../context/ThemeContext';






const SocialLinks = ({ isSmallScreen, isDesktop, showNavbar, fillColor}) => {
  const socialMediaLinks = [
    { name: 'LinkedIn', icon:  <LinkedinIcon />, url: 'https://linkedin.com/in/roniebenitez' },
    { name: 'Github', icon:  <GithubIcon/>, url: 'https://www.github.com/roniekun' },
    { name: 'Facebook', icon: <FacebookIcon/>, url: 'https://www.facebook.com/ronieuxjpg' },
    { name: 'Instagram', icon: <InstagramIcon/>, url: 'https://www.instagram.com/ronieuxjpg' },
 
    // Add more social media links as needed
    ];

  return (
    <ThemeContext.Consumer>
  {({ theme }) => (
   <div className='social__links__container' >

      <div className='btn__container'id={`component-${theme}`} >  
      
      {socialMediaLinks.map((link) => (
    <a
    id={`component-${theme}`}
    className='link__btn social__icon'
    key={link.name}
    href={link.url}
    target="_blank"
    style={{fill: fillColor}}
    rel="noopener noreferrer"
  >
    {link.icon} 

  </a>
        ))}</div>
      </div>
        )}
        </ThemeContext.Consumer>
  );
};

export default SocialLinks;
