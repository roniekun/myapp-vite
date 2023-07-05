import React, { useState } from 'react';
import './StringCharacterMapper.css';

function StringCharacterMapper() {
  const customString = "RONIEKUN.";

  const characters = customString.split("");
  const [hoveredIndex, setHoveredIndex] = useState(4);


  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  return (
    <div className="string__container">
      {characters.map((char, index) => {
        const isHovered = hoveredIndex === index;
        const isAdjacent = hoveredIndex === index - 1 || hoveredIndex === index + 1;
        const leftAdjacent = hoveredIndex === index - 2;
        const rightAdjacent = hoveredIndex === index + 2;
        return (
          <div
            key={index}
            className={`char__item ${isHovered ? 'hovered' : ''} 
            ${isAdjacent ? 'adjacent' : ''}  
            ${rightAdjacent  ? 'far__adjacent' : ''}
            ${leftAdjacent  ? 'far__adjacent' : ''}`}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleHover(null)}
          >
            {char === " " ? "\u00A0" : char}
          </div>
        );
      })}
    </div>
  );
}

export default StringCharacterMapper;
