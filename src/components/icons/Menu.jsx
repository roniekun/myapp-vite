import React from 'react';
import './Menu.css';
import { Turn as Hamburger } from 'hamburger-react';
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
              onClick={handleClick}
            >
              <Hamburger toggled={showNavbar} toggle={setShowNavbar} size={20} />
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
