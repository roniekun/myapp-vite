import React from 'react';
import { ReactComponent as Busysvg } from './svg/busyIcon.svg';
import styled from 'styled-components';
import './BusyIcon.css';

const StyledBusyIcon = styled.div`
  position: relative;
  width: 700px; // Set the desired width
  height: 700px; // Set the desired height
`;



function BusyIcon() {
  return (
    <div className='busy__container'>
      <StyledBusyIcon>
        <Busysvg />
        <h1 className='busy__text'> He is currently busy...</h1>
      </StyledBusyIcon>
    </div>
  );
}

export default BusyIcon;
