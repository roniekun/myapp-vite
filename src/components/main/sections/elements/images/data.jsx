import image1 from './img1.jpg';
import image2 from './img2.jpg';
import image3 from './img3.jpg';
import image4 from './img4.jpg';
import image5 from './img5.jpg';
import image6 from './img6.jpg';

export const responsive = {
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export const images = [
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
  },
  {
    id: 6,
    imageUrl: image6,
    description: 'falls'
  }
];
