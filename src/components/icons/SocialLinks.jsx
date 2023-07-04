import React from 'react';
import './SocialLinks.css';
import { ReactComponent as FacebookIcon } from './svg/facebook.svg'; // https://simpleicons.org/
import { ReactComponent as InstagramIcon } from './svg/instagram.svg';
import { ReactComponent as GithubIcon } from './svg/github.svg';
import { ReactComponent as LinkedinIcon } from './svg/linkedin.svg';
import { ThemeContext } from '../../context/ThemeContext';






const SocialLinks = ({ isSmallScreen, isDesktop, showNavbar, fillColor, displayNames, flexDirection}) => {
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
  <div className='social__links__container' style={isSmallScreen ? { flexDirection: flexDirection } : {}}>
      {displayNames && isSmallScreen &&
       <div><h2 style={{
        color: fillColor, fontFamily: 'Inter', margin: "20px", fontWeight: '500'}}>Follow</h2>
        </div> }
      {socialMediaLinks.map((link) => (
    <a
    id={`component-${theme}`}
    className='link__btn social__icon'
    key={link.name}
    href={link.url}
    target="_blank"
    style={{fill: fillColor,color:fillColor}}
    rel="noopener noreferrer"
  >
 
    <div style={{ marginRight: '7px' }}> 
    {link.icon}
    </div>
    <div style={{fontSize: '13px'}}>
      {displayNames && <span>{link.name}</span>}
      </div>

  </a>
        ))}</div>
        )}
        </ThemeContext.Consumer>
  );
};

export default SocialLinks;
