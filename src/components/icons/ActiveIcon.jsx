import React from 'react';
import styled from 'styled-components';
import moredownImg from './png/moredown.png';

const StyledDiv = styled.div`
  .icon__active {
    align-self: center;
    width: 20px;
    transition: fill 0.3s ease;

    img {
      fill: yellow;
      height: 20px;
      width: 20px;
      stroke-width: 5px;
      transition: transform 0.3s ease;
    }

    &:hover {
      img {
        transform: scale(1.2);
      }
    }
  }
`;

const ActiveIcon = () => {
  return (
    <StyledDiv>
      <div className="icon__active">
        <img src={moredownImg} alt="Moredown" />
      </div>
    </StyledDiv>
  );
};

export default ActiveIcon;
