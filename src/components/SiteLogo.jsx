import React from 'react'
import styled from 'styled-components';
import { ReactComponent as MyLogo } from './sitelogo.svg' ;

const StyledDiv = styled.div`
.site__logo__container {
    position:relative;
    display:flex; 
    justify-self: flex-start;
    align-self:flex-start;
    justify-content:center;
    align-items:center;
    color:white;
    zIndex:9999;
    cursor:pointer;
    font-family: 'VT323', monospace;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-left:50%;   
    background-color: #EA6E43;
    font-size:20px;
    width:fit-content;
}

    svg {
        fill: white;
      height: 20px;
      width: 20px;
      transition: transform 0.3s ease;
    }

    &:hover {
      svg {
        transform: scale(1.2);
      }
    }

    @media (max-width:600px){

      .site__logo__container{

        margin-left:10%;
        margin-block: 20px;   

      }
    }
  }

`;

const SiteLogo = () => {
  return (
    <StyledDiv>
    <div className='site__logo__container'>
    <MyLogo/><span>roniedev.</span>
    </div>
    </StyledDiv>
  )
}

export default SiteLogo