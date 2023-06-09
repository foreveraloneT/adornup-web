import * as React from 'react';
import classNames from 'classnames';

import EmailIcon from '../icons/email.icon.svg';
import WhatappsIcon from '../icons/whatsapp.icon.svg';
import PhoneIcon from '../icons/phone.icon.svg';
import { graphql, useStaticQuery } from 'gatsby';
import { formatPhoneNumber } from '../utils/phone';

interface PureContactsProps {
  email: string
  tel: string
  whatsapp: string
  whatsappLink: string
  className?: string
  variant?: 'primary' | 'secondary'
}

const PureContacts: React.FC<PureContactsProps> = ({ email, tel, whatsapp, whatsappLink, className = '', variant = 'primary' }) => (
  <div
    className={classNames(
      'flex flex-col lg:flex-row gap-6 text-grey-icon font-sans font-medium text-base lg:text-lg',
      {
        'text-white': variant === 'secondary',
      },
      className,
    )}>
    <a href={`mailto:${email}`}>
      <div className="flex gap-2 justify-center uppercase">
        <EmailIcon />
        <div>{email}</div>
      </div>
    </a>

    <a href={whatsappLink} target="_blank" rel="noreferrer">
      <div className="flex gap-2 justify-center">
        <WhatappsIcon />
        <div>{whatsapp}</div>
      </div>
    </a>

    <a href={`tel:${tel}`}>
      <div className="flex gap-2 justify-center">
        <PhoneIcon />
        <div>{formatPhoneNumber(tel)}</div>
      </div>
    </a>
  </div>
);

type ContactProps = Pick<PureContactsProps, 'className' | 'variant'>;

const Contacts: React.FC<ContactProps> = (props) => {
  const { site: { siteMetadata: { email, tel, whatsapp, whatsappLink } } } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
          tel
          whatsapp
          whatsappLink
        }
      }
    }
  `);

  return (
    <PureContacts
      email={email}
      tel={tel}
      whatsapp={whatsapp}
      whatsappLink={whatsappLink}
      {...props}
    />
  );
};

export default Contacts;
