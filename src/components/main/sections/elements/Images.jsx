import React from 'react';
import './Images.css';
const Images = ({ id, imageUrl, description }) => {
  return (

      <img
        className='carousel__img'
        id={id}
        src={imageUrl}
        alt={description}
      />

  );
};

export default Images;
