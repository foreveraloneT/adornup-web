import * as React from 'react';
import classNames from 'classnames';

import Button from '../Button';
import MouseIcon from '../../icons/mouse.icon.svg';

interface MouseSymbolProps {
  className?: string
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

const MouseSymbol: React.FC<MouseSymbolProps> = ({ className = '', onClick }) => (
  <div
    className={classNames(
      'w-fit flex flex-col gap-2 items-center text-white lg:hover:text-grey-hover active:text-grey-hover cursor-pointer select-none',
      className,
    )}
    onClick={onClick}
  >
    <MouseIcon
      className="w-7 h-10"
    />
    <div className="uppercase font-sans font-medium text-base lg:text-xl">
      scroll
    </div>
  </div>
);

interface MainSectionProps {
  onClickScroll?: () => void
  onClickContactUs?: () => void
}

const MainSection: React.FC<MainSectionProps> = ({ onClickScroll, onClickContactUs }) => (
  <section
    className='h-screen pt-[50px] lg:pt-[100px] px-4 lg:px-28 flex flex-col relative md:justify-center'
  >
    <h1
      className='font-quattrocento uppercase font-bold text-3.5xl lg:text-6.5xl mt-[15%] md:mt-0'
      style={{
        lineHeight: '1.1',
      }}
    >
      Adornup
    </h1>
    <p
      className='font-sans uppercase font-medium text-sm lg:text-1.5xl mt-2'
      style={{
        lineHeight: '1.1',
      }}
    >
      Transforming your vision into exquisite jewellery creations
    </p>
    <div className="bg-gold w-15 lg:w-[120px] h-px my-6" />
    <p className='md:w-3/5 lg:max-w-[632px] font-quattrocento font-normal text-grey-text1 text-base lg:text-lg'>
      ADORNUP offers end-to-end services for all types of jewellery businesses especially for startups. This starts from CAD designing to finished products. We specialises in helping small customers who prefer to start with small quantity orders or have unique designs that require special craftsmanship. We provide full support and professional services to assist our clients to fulfill their inventories.
    </p>
    <Button
      className='uppercase mt-4 lg:mt-8 lg:w-[270px] shadow-normal'
      onClick={onClickContactUs}
    >
      Contact us
    </Button>
    <MouseSymbol
      className='absolute bottom-6 left-0 right-0 mx-auto'
      onClick={onClickScroll}
    />
  </section>
);

export default MainSection;
