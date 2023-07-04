import Navbar from './Navbar';
import { ThemeContext } from '../context/ThemeContext';
import './Header.css';
// import Logo from './icons/Logo';
import Menu from './icons/Menu';


function Header({ showNavbar, isSmallScreen, isDesktop, setShowNavbar }) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <>
          <div id={`component-${theme}`}  className='header__container'>
            <div className='menu__header'>
            <Menu
           showNavbar={showNavbar}
           isSmallScreen={isSmallScreen}
           setShowNavbar={setShowNavbar}
           displayNames={false}
            />
            </div>
            <div>
            <Navbar
              showNavbar={showNavbar}
              isDesktop={isDesktop}
              isSmallScreen={isSmallScreen}
              setShowNavbar={setShowNavbar}
            />
            </div>
            </div>
        </>
      )}
    </ThemeContext.Consumer>
  );
}

export default Header;
