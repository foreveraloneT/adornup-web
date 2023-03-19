import * as React from 'react';

import EmailIcon from '../icons/email.icon.svg';
import WhatappsIcon from '../icons/whatsapp.icon.svg';
import PhoneIcon from '../icons/phone.icon.svg';
import { graphql, useStaticQuery } from 'gatsby';
import { formatPhoneNumber } from '../utils/phone';

interface PureContactsProps {
  email: string
  tel: string
  whatsapp: string
}

const PureContacts: React.FC<PureContactsProps> = ({ email, tel, whatsapp }) => (
  <div className="flex flex-col lg:flex-row gap-6 text-grey-icon font-sans font-medium text-sm lg:text-lg">
    <a href={`mailto:${email}`}>
      <div className="flex gap-2 justify-center uppercase">
        <EmailIcon />
        <div>{email}</div>
      </div>
    </a>

    <a href={`tel:${whatsapp}`}>
      <div className="flex gap-2 justify-center">
        <WhatappsIcon />
        <div>{formatPhoneNumber(whatsapp)}</div>
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

const Contacts: React.FC = () => {
  const { site: { siteMetadata: { email, tel, whatsapp } } } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
          tel
          whatsapp
        }
      }
    }
  `);

  return (
    <PureContacts
      email={email}
      tel={tel}
      whatsapp={whatsapp}
    />
  );
};

export default Contacts;
