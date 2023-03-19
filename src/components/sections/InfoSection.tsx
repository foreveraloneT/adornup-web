import * as React from 'react';

const InfoSection = React.forwardRef<HTMLElement>(function InfoSection (_, ref) {
  return (
    <section
      className='bg-black h-[1000px]'
      ref={ref}
    ></section>
  );
});

export default InfoSection;
