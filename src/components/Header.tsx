import * as React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import classNames from 'classnames';

import Logo from '../components/Logo';
import Contacts from '../components/Contacts';
import EmailIcon from '../icons/email.icon.svg';
import WhatappsIcon from '../icons/whatsapp.icon.svg';
import PhoneIcon from '../icons/phone.icon.svg';
import HamburgerIcon from '../icons/hamburger.icon.svg';
import CloseIcon from '../icons/close.icon.svg';

interface PureHeaderProps {
  email: string
  tel: string
  whatsapp: string
  showMobileMenu: boolean
  onOpenMobileMenu: () => void
  onCloseMobileMenu: () => void
}

const PureHeader: React.FC<PureHeaderProps> = ({
  email,
  tel,
  whatsapp,
  showMobileMenu,
  onOpenMobileMenu,
  onCloseMobileMenu,
}) => (
  <header
    className={classNames(
      'fixed w-full top-0 left-0 h-[50px] lg:h-[100px] overflow-y-hidden bg-white z-10',
      'transition-height ease-in-out shadow-normal',
      {
        'h-screen': showMobileMenu,
      },
    )}
  >
    <nav className="h-[50px] lg:h-[100px] px-4 lg:px-28 flex justify-between items-center" >
      <Link to="/">
        <Logo />
      </Link>
      <div className='hidden lg:flex lg:gap-4 text-grey-icon'>
        <a href={`mailto:${email}`}><EmailIcon className="cursor-pointer" /></a>
        <a href={`tel:${whatsapp}`}><WhatappsIcon className="cursor-pointer" /></a>
        <a href={`tel:${tel}`}><PhoneIcon className="cursor-pointer" /></a>
      </div>
      <div className='lg:hidden'>
        {
          showMobileMenu
            ? (
            <CloseIcon
              className="cursor-pointer"
              onClick={onCloseMobileMenu}
            />
              )
            : (
            <HamburgerIcon
              className="cursor-pointer"
              onClick={onOpenMobileMenu}
            />
              )
        }
      </div>
    </nav>
    <div className='lg:hidden mt-[145px]'>
      <Contacts />
    </div>
  </header>
);

PureHeader.defaultProps = {
  showMobileMenu: false,
};

const Header: React.FC = () => {
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

  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <PureHeader
      email={email}
      tel={tel}
      whatsapp={whatsapp}
      showMobileMenu={showMobileMenu}
      onOpenMobileMenu={() => { setShowMobileMenu(true); }}
      onCloseMobileMenu={() => { setShowMobileMenu(false); }}
    />
  );
};

export default Header;
