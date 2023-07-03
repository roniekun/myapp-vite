import React from 'react';
import './Menu.css';
import { Sling as Hamburger } from 'hamburger-react';
import { ThemeContext } from '../../context/ThemeContext';

const Menu = ({ showNavbar, isSmallScreen, setShowNavbar }) => {
  const handleClick = () => {
    setShowNavbar(!showNavbar);
    console.log("clicking");
  };

  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className='menu__container'>
          {isSmallScreen ? (
            <div
              id={`component-${theme}`}
              className='menu__btn'
              style={{
                position: 'fixed',
                top: '0',
                right: '15px',
                zIndex: '9999',
                opacity: '0.7',
                height: 'fit-content',
                width: 'auto'
              }}
              onClick={handleClick}
            >
              <Hamburger toggled={showNavbar} toggle={setShowNavbar} size={23} />
            </div>
          ) : (
            <h1
            id={`component-${theme}`}
              onClick={handleClick}
              className='menu__text' 
            >
              MENU
            </h1>
          )}
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Menu;
