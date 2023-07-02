import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './PhotoCarousel.css';
import Images from './Images';
import { images, responsive } from './images/data';

const PhotoCarousel = () => {
  return (
    <div className='carousel'>
      <Carousel responsive={responsive}>
        {images.map((item) => (
          <div   key={item.id}>
         <Images
          
          id={item.id}
          url={item.imageUrl}
          description={item.description}
        />
          </div>
  
        ))}
      </Carousel>
    </div>
  );
};

export default PhotoCarousel;
