import { useState } from "react";
import { slides } from './ImageSliderData'; 

const slideStyles = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  display:'flex',
  position: "relative",
  height: 'fit-content',
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
  width: 'fit-content'
};

const leftArrowStyles = {
  position: "relative",
  height: 'fit-content',
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
  width: 'fit-content'
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
  zIndex: '1',
  position: 'absolute',
  width: '100vw',
  bottom: 0,
  alignItmes: 'center',
  backgroundColor: 'transparent'
  

};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div style={sliderStyles}>
     <div style={dotsContainerStyles}>

    
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
 <div style={{
            position:'absolute',
            height: '100%',
            left:'10px',
            width: '2%',
            display: 'flex',
            alignItems:'center',
            justifyContent: 'center'


}}>
      <div onClick={goToPrevious} style={leftArrowStyles}>
    ❰
       </div>
</div>

<div style={{
            position:'absolute',
            height: '100%',
            right:'10px',
            width: '2%',
            display: 'flex',
            alignItems:'center',
            justifyContent: 'center'


}}>
       <div onClick={goToNext} style={rightArrowStyles}>
    ❱
       </div>
</div>

    <div style={slideStylesWidthBackground}>

      </div>
    </div>
  );
};

export default ImageSlider;
