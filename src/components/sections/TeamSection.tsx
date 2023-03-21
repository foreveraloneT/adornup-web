import * as React from 'react';
import ImageSliderShow from '../ImageSlideShow';

const TeamSection: React.FC = () => (
  <section className='w-full py-8 lg:py-20 px-4 lg:px-0 bg-grey-bg flex flex-col gap-4 lg:relative'>
    <div className="lg:w-2/5">
      <ImageSliderShow />
    </div>

    <div className="block lg:w-2/5 lg:absolute lg:right-[112px] lg:top-1/2 lg:-translate-y-1/2">
      <h2 className="uppercase font-medium text-2.5xl text-white">Our team</h2>

      <div className="my-4 lg:mb-10 h-px w-15 lg:w-[120px] bg-gold"/>

      <h3 className='uppercase whitespace-nowrap font-medium text-lg text-white mb-2'>
        Cad designer
      </h3>
      <p className='font-quattrocento font-normal text-base text-grey-text2 mb-6'>
        Our cad designer is well-experienced with all kinds of design. We can transfer your ideas into 3D models or finished samples.
      </p>

      <h3 className='uppercase whitespace-nowrap font-medium text-lg text-white mb-2'>
        Jeweller
      </h3>
      <p className='font-quattrocento font-normal text-base text-grey-text2'>
      Our jewellers have expertise in fine jewellery and renown craftsmanship. They are the ones who will make your imagination come true by implementing both old and technology aided techniques.
      </p>
    </div>
  </section>
);

// const TeamSection: React.FC = () => {
//   return (
//     <div className='bg-green'>
//       <div className='w-1/2'>
//         <ImageSliderShow />
//       </div>
//     </div>
//   );
// };

export default TeamSection;
