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
            <div className='menu__text__container'>
            <h1
            id={`component-${theme}`}
              onClick={handleClick}
              className='menu__text' 
            >
              menu
            </h1>
            </div>
          )}
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Menu;
