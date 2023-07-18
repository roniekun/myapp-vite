import { ThemeContext } from '../context/ThemeContext';
import './Header.css';
// import Logo from './icons/Logo';
import Menu from './icons/Menu';
import ToggleTheme from './buttons/ToggleTheme';


function Header({ showNavbar, isSmallScreen, isDesktop, setShowNavbar }) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <>
          <div id={`component-${theme}`}  className='header__container'>
            </div>
        </>
      )}
    </ThemeContext.Consumer>
  );
}

export default Header;
