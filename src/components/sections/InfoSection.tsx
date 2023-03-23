import * as React from 'react';
import Info1Graphic from '../../graphics/info1.graphic.svg';
import Info2Graphic from '../../graphics/info2.graphic.svg';
import Info3Graphic from '../../graphics/info3.graphic.svg';

interface InfoCardProps {
  title: string
  content: string
  Graphic: React.ComponentType<{ className?: string }>
}

const InfoCard: React.FC<InfoCardProps> = ({ title, content, Graphic }) => (
  <div className='flex flex-col items-center w-fit pt-6 lg:flex-1 lg:max-w-[300px]'>
    <div className="w-[230px] h-40 mb-6 flex justify-center items-center">
      <Graphic />
    </div>
    <h2 className='text-lg text-black font-medium font-sans uppercase mb-2 whitespace-nowrap'>{title}</h2>
    <p className='text-base text-grey-text1 font-normal font-quattrocento text-justify'>{content}</p>
  </div>
);

const InfoSection = React.forwardRef<HTMLElement>(function InfoSection (_, ref) {
  return (
    <section
      className='bg-white px-4 md:px-[25%] lg:px-28 py-12 lg:pt-8 lg:pb-13 flex flex-col lg:flex-row gap-2 lg:gap-6 lg:justify-center'
      ref={ref}
    >
      <InfoCard
        Graphic={Info1Graphic}
        title="Free consultation"
        content="We can help you solidify your idea into model by our CAD designer and plan your budget by giving you variety of selections, metal, gemstone or diamond to suit your price range to start with."
      />
      <InfoCard
        Graphic={Info2Graphic}
        title="High-quality production"
        content="Our production department in Thailand where is renown for manufacturing high-quality jewellery can manufacture both large and small quantity to supply both big and small businesses."
      />
      <InfoCard
        Graphic={Info3Graphic}
        title="Welcome all business scale"
        content="If you are a jewellery designer who is looking for the way to make physical samples or perhaps a designer who cannot keep up with increasing demands. Our production can manufacture both large and small quantity to supply both big and small businesses."
      />
    </section>
  );
});

export default InfoSection;
