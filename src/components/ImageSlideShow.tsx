import * as React from 'react';
import { Slide } from 'react-slideshow-image';

const ImageSliderShow: React.FC = () => (
  <Slide
    cssClass='w-[100px]'
    arrows={false}
    duration={3000}
    transitionDuration={800}
  >
    {/* TODO: update image src */}
    <img
      src="/images/slide-images/slide1.png"
      alt="team slide show image 1"
    />
    <img
      src="/images/slide-images/slide2.png"
      alt="team slide show image 2"
    />
    <img
      src="/images/slide-images/slide3.png"
      alt="team slide show image 3"
    />
    <img
      src="/images/slide-images/slide4.png"
      alt="team slide show image 4"
    />
  </Slide>
);

export default ImageSliderShow;
