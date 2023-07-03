import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './PhotoCarousel.css';
// import Images from './Images';
// import { images, responsive } from './images/data';
import image1 from './images/img1.jpg';
import image2 from './images/img2.jpg';
import image3 from './images/img3.jpg';
import image4 from './images/img4.jpg';
import image5 from './images/img5.jpg';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

 const images = [
  {
    id: 1,
    imageUrl: image1,
    description: 'mountain'
  },
  {
    id: 2,
    imageUrl: image2,
    description: 'green forest'
  },
  {
    id: 3,
    imageUrl: image3,
    description: 'blue forest'
  },
  {
    id: 4,
    imageUrl: image4,
    description: 'moody forest'
  },
  {
    id: 5,
    imageUrl: image5,
    description: 'valley'
  }
];

const Images = ({ id, imageUrl, description }) => {
  return (   
    <div key={id} className='image__container'>
       <img
        className='carousel__img'
        id={id}
        src={imageUrl}
        alt={description}
      />

    </div>

  );
};

const image = images.map((item) => ( 
<div key={item.id}>
    <Images
      id={item.id}
      imageUrl={item.imageUrl}
      description={item.description}
    />
        
</div>
));
const PhotoCarousel = () => {
  return (
      <Carousel className='carousel'
       responsive={responsive}
       swipeable={true}
       infinite={true}
       autoPlaySpeed={1000}
       keyBoardControl={true}
       customTransition="all .5"
       focusOnSelect={true}>
      {image}
      </Carousel>

  );
};

export default PhotoCarousel;
