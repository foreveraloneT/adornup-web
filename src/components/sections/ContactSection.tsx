import * as React from 'react';

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
      className='bg-white'
      ref={ref}
    >
      <div className='h-[1000px]' />
    </section>
  );
});

const ContactSection = React.forwardRef<HTMLElement>(function ContactSection (_, ref) {
  return (
    <PureContactSection ref={ref} />
  );
});

export default ContactSection;
