import { graphql, Link, useStaticQuery } from 'gatsby';
import * as React from 'react';

import Logo from './Logo';
import Contacts from './Contacts';

interface PureFooterProps {
  address: string
}

const PureFooter: React.FC<PureFooterProps> = ({ address }) => (
  <footer
    className='flex flex-col items-center py-20 px-4 bg-black/80'
  >
    <Link to="/">
      <Logo
        className="mb-4"
        variant='secondary'
      />
    </Link>
    <p className='uppercase font-sans text-xs lg:text-xl text-medium text-center text-white opacity-70'>
      {address}
    </p>
    <div className="my-12 h-px w-30 bg-white/50" />
    <Contacts className='opacity-70' variant='secondary' />
  </footer>
);

const Footer: React.FC = () => {
  const { site: { siteMetadata: { address } } } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          address
        }
      }
    }
  `);

  return (
    <PureFooter address={address} />
  );
};

export default Footer;
