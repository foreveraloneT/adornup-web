import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

interface ServiceItemProps {
  title: string
  detail: string
  children?: React.ReactNode
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, detail, children }) => (
  <div className="flex gap-2 lg:gap-6">
    <div className='w-[100px] lg:w-[120px]'>
      {children}
    </div>
    <div className='flex-1 flex flex-col gap-2'>
      <h3 className='uppercase font-sans font-medium text-lg lg:text-xl text-black'>
        {title}
      </h3>
      <p className="font-quattrocento font-normal text-sm lg:text-lg text-grey-text1">
        {detail}
      </p>
    </div>
  </div>
);

const ServiceList: React.FC = () => (
  <div className="flex flex-col gap-8 lg:gap-16">
    <ServiceItem
      title="Free consultation"
      detail="An opportunity to obtain professional advice or guidance without incurring any cost."
    >
      <StaticImage
        src="../../images/services/consult.png"
        alt="Free consultation"
      />
    </ServiceItem>

    <ServiceItem
      title="Production process"
      detail="Guiding you through production processes that suit with your items or other alternative options."
    >
      <StaticImage
        src="../../images/services/production-process.png"
        alt="Production process"
      />
    </ServiceItem>

    <ServiceItem
      title="Follow up our team"
      detail="Stay in touch with our team or keep up with our team's progress.."
    >
      <StaticImage
        src="../../images/services/follow-up.png"
        alt="Follow up our team"
      />
    </ServiceItem>
  </div>
);

interface PureContactSectionProps {
  className?: string
  // name: string
  // email: string
  // tel: string
  // text: string
}

const PureContactSection = React.forwardRef<HTMLElement, PureContactSectionProps>(function PureContactSection (props, ref) {
  // const {
  //   name = '',
  //   email = '',
  //   tel = '',
  //   text = '',
  // } = props;

  return (
    <section
      className='py-6 lg:py-20 px-4 lg:px-28 bg-white flex flex-col lg:flex-row gap-12 lg:gap-4 lg:justify-between'
      ref={ref}
    >
      <div className='lg:flex-1'>
        <h2 className='uppercase font-sans font-medium text-2.5xl lg:text-3.5xl text-black whitespace-nowrap'>
          Get in touch
        </h2>
        <p className='uppercase font-sans font-medium text-sm lg:text-xl text-grey-text1 mt-1'>
          We are here for you how can we help?
        </p>

        <div className="my-4 lg:mb-10 h-px w-15 lg:w-[120px] bg-gold"/>

        <ServiceList />
      </div>

      <div className='lg:flex-1'>
        --space for form--
      </div>
    </section>
  );
});

const ContactSection = React.forwardRef<HTMLElement>(function ContactSection (_, ref) {
  return (
    <PureContactSection ref={ref} />
  );
});

export default ContactSection;
