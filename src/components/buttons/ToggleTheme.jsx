import React, { useContext } from 'react';
import { ThemeContext } from "../../context/ThemeContext";
import './ToggleTheme.css';

const ToggleTheme = ({ isSmallScreen, fontColor, position }) => {
  const { toggleTheme,theme } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <div className='toggle__component'>
      {isSmallScreen && <h3  style={{ color: fontColor, position: 'position', padding: '20px' }}>Toggle theme</h3>}
      <input
        type="checkbox"
        id="checkboxInput"
        onChange={handleToggleTheme}
        checked={theme==='dark'}
      
      />
      <label  htmlFor="checkboxInput" className="toggleSwitch" />
    </div>
  );
};

export default ToggleTheme;
