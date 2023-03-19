import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Background: React.FC = () => (
  <div className="w-screen h-screen -z-40 fixed top-0 left-0 pointer-events-none">
    <div
      className='absolute bottom-0 left-0 h-[30%] w-screen z-10'
      style={{
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 111.72%)',
      }}
    />
    <StaticImage
      className="w-full h-full object-cover"
      alt="background"
      src="../images/background.png"
    />
  </div>
);

export default Background;
