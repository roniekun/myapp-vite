import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { ThemeContext } from '../context/ThemeContext';
import ToggleTheme from './buttons/ToggleTheme';
import SocialLinks from './socialLinks/SocialLinks';
import { useState } from 'react';
import ActiveIcon from './icons/ActiveIcon';

const Navbar = ({ showNavbar, isDesktop, isSmallScreen, setShowNavbar }) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(true);

  const containerVariants = {
    hidden: {
      x: isSmallScreen ? -100 : 0,
      y: isSmallScreen ? 0 : -10,
      opacity: 1,
      transition: {
        type: isSmallScreen ? 'keyframes' : 'spring',
        stiffness: 200,
        damping: 25,
        duration: 0.5,
      },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 25,
        duration: 0.5,
      },
    },
  };
  
  const linkVariants = {
    hidden: isSmallScreen
      ? { y: 20, opacity: 0, transition: { duration: 0.5, ease: 'linear' } }
      : { x: -20, opacity: 0, transition: { duration: 0.5, ease: 'linear' } },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'linear' },
    },
    hover: {
      scale: 1.1,
    },
    tap: {
      scale: 0.8,
    },
  };
  

  const links = [
    { to: '/', text: 'home' },
    { to: '/about', text: 'about' },
    { to: '/portfolio', text: 'portfolio' },
    { to: '/contact', text: 'contact' },
  ];

  const handleLinkClick = () => {
    setIsActive(true);
    setShowNavbar(!isSmallScreen);
    console.log('Link clicked and active');
  };

  return (
    <ThemeContext.Consumer>
      {(themeContext) => (
        <AnimatePresence >
      
            <motion.nav
              className={showNavbar? 'navbar__container': ''}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={containerVariants}
              id={`component-${themeContext.theme}`}
            >
             { showNavbar && (
              <div className="links__container">
                {links.map((link, index) => (
                  <AnimatePresence key={link.to}>
                    {showNavbar && (
                      <motion.div
                        className="link__wrapper"
                        key={link.to}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={linkVariants}
                        transition={{ delay: isSmallScreen ? index * 0.2 : 0 }}
                        whileHover={isSmallScreen ? 'hover' : {}}
                        whileTap={'tap'}
                      >
                        <Link
                          onClick={() =>
                            handleLinkClick(location.pathname === link.to)
                          }
                          id={`component-${themeContext.theme}`}
                          className={`${showNavbar ? 'navbar__link' : ''} ${
                            location.pathname === link.to ? 'active' : ''
                          }`}
                          to={link.to}
                        >
                          {link.text}
                          {isSmallScreen && isActive && location.pathname === link.to &&<ActiveIcon />} 
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                     
                ))}
              </div>
                 )}
              <>
              {showNavbar &&(
              <ToggleTheme isSmallScreen={isSmallScreen} showNavbar={showNavbar} fontColor="white" position="relative" />
              )}
              {isSmallScreen && showNavbar && (
                <SocialLinks showNavbar={showNavbar}  fontColor={'white'} position={'relative'} />
              )}
            </>
            </motion.nav>
        </AnimatePresence>
      )}
    </ThemeContext.Consumer>
  );
};

export default Navbar;
