import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { Carousel } from 'react-responsive-carousel';

const ImageSliderShow: React.FC = () => (
  <Carousel
    autoPlay
    emulateTouch
    infiniteLoop
    interval={3000}
    showArrows={false}
    showThumbs={false}
    showIndicators={true}
    showStatus={false}
  >
    {/* TODO: update image src */}
    <StaticImage
      src="../images/slide-images/slide1.png"
      alt="team slide show image 1"
    />
    <StaticImage
      src="../images/slide-images/slide2.png"
      alt="team slide show image 2"
    />
    <StaticImage
      src="../images/slide-images/slide3.png"
      alt="team slide show image 3"
    />
    <StaticImage
      src="../images/slide-images/slide4.png"
      alt="team slide show image 4"
    />
  </Carousel>
);

export default ImageSliderShow;
