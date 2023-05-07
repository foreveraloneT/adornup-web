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
      src="../images/slide-images/slide1.jpg"
      alt="team slide show image 1"
    />
    <StaticImage
      src="../images/slide-images/slide2.jpg"
      alt="team slide show image 2"
    />
    <StaticImage
      src="../images/slide-images/slide3.jpg"
      alt="team slide show image 3"
    />
    <StaticImage
      src="../images/slide-images/slide4.jpg"
      alt="team slide show image 4"
    />
    <StaticImage
      src="../images/slide-images/slide5.jpg"
      alt="team slide show image 5"
    />
    <StaticImage
      src="../images/slide-images/slide6.jpg"
      alt="team slide show image 6"
    />
  </Carousel>
);

export default ImageSliderShow;
