import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import AutoscrollButton from './components/buttons/AutoscrollButton';
import Home from './components/main/Home';
import Contact from './components/main/Contact';
import About from './components/main/About';
import Portfolio from './components/main/Portfolio';
import NotFound from './components/main/NotFound';
import Logo from './components/icons/Logo';
import Menu from './components/icons/Menu';
import './App.css';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';


const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 600);
  const [showNavbar, setShowNavbar] = useState(window.innerWidth > 600);

  const handleResize = useCallback(() => {
    const screenWidth = window.innerWidth;
    setIsDesktop(screenWidth > 600);
    setShowNavbar(screenWidth > 600);
    setIsSmallScreen(screenWidth <= 600);
  }, []);

  const handleScroll = useCallback(() => {
    const currentScroll = window.scrollY;
    setShowNavbar(scrollPosition > currentScroll || currentScroll === 0);
    // setShowNavbar(true); shows Navigation bar
    setScrollPosition(currentScroll);
  }, [scrollPosition]);

  useEffect(() => {
    const handleResizeEvent = () => {
      handleResize(isDesktop);
    };

    const handleScrollEvent = () => {
      handleScroll(scrollPosition);
    };

    window.addEventListener('resize', handleResizeEvent);
    if (isDesktop) {
      window.addEventListener('scroll', handleScrollEvent);
    }

    return () => {
      window.removeEventListener('resize', handleResizeEvent);
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, [handleResize, handleScroll, isDesktop, scrollPosition]);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ThemeContext.Consumer>
          {({ theme }) => {
            return (
              <div className='app__container' id={`component-${theme}`}>
                <Header
                  showNavbar={showNavbar}
                  isDesktop={isDesktop}
                  isSmallScreen={isSmallScreen}
                  setShowNavbar={setShowNavbar}
                />
               {showNavbar &&<Logo fontColor={isSmallScreen ? "white" : ""} />} 
                <Menu
                  showNavbar={showNavbar}
                  isSmallScreen={isSmallScreen}
                  setShowNavbar={setShowNavbar}
                />
                <Routes>
                  <Route path='/' element={<Home showNavbar={showNavbar} />} />
                  <Route path='/about' element={<About showNavbar={showNavbar} />} />
                  <Route path='/portfolio' element={<Portfolio showNavbar={showNavbar} />} />
                  <Route path='/contact' element={<Contact showNavbar={showNavbar} />} />
                  <Route component={NotFound} />
                </Routes>
                <AutoscrollButton
                  isSmallScreen={isSmallScreen}
                  isDesktop={isDesktop}
                  showNavbar={showNavbar}
                />
                {/* <Footer showNavbar={showNavbar} setShowNavbar={setShowNavbar} /> */}
              </div>
            );
          }}
        </ThemeContext.Consumer>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

