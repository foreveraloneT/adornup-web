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
import { useWindowScroll } from '../hooks/scroll';

interface PureHeaderProps {
  email: string
  tel: string
  whatsappLink: string
  showMobileMenu?: boolean
  hide?: boolean
  onOpenMobileMenu: () => void
  onCloseMobileMenu: () => void
}

const PureHeader: React.FC<PureHeaderProps> = ({
  email,
  tel,
  whatsappLink,
  showMobileMenu = false,
  hide = false,
  onOpenMobileMenu,
  onCloseMobileMenu,
}) => (
  <header
    className={classNames(
      'fixed w-full top-0 left-0 h-[50px] lg:h-[100px] overflow-y-hidden bg-white z-10 hide',
      'transition-all ease-in-out shadow-normal',
      {
        'h-screen': showMobileMenu,
        '-translate-y-full shadow-none': hide,
      },
    )}
  >
    <nav className="h-[50px] lg:h-[100px] px-4 lg:px-28 flex justify-between items-center" >
      <Link to="/">
        <Logo />
      </Link>
      <div className='hidden lg:flex lg:gap-4 text-grey-icon'>
        <a href={`mailto:${email}`}><EmailIcon className="cursor-pointer" /></a>
        <a href={whatsappLink}><WhatappsIcon className="cursor-pointer" /></a>
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

const Header: React.FC = () => {
  const { site: { siteMetadata: { email, tel, whatsappLink } } } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
          tel
          whatsappLink
        }
      }
    }
  `);

  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const [hide, setHide] = React.useState(false);

  useWindowScroll(({ scrollY, prevScrollY }) => {
    if (!showMobileMenu && scrollY > prevScrollY) {
      setHide(true);
    } else if (scrollY < prevScrollY) {
      setHide(false);
    }
  });

  return (
    <PureHeader
      email={email}
      tel={tel}
      whatsappLink={whatsappLink}
      showMobileMenu={showMobileMenu}
      hide={hide}
      onOpenMobileMenu={() => { setShowMobileMenu(true); }}
      onCloseMobileMenu={() => { setShowMobileMenu(false); }}
    />
  );
};

export default Header;
