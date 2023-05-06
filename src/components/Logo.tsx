import * as React from 'react';
import classNames from 'classnames';

import logoPrimary from '../images/logo-primary.png';
import logoSecondary from '../images/logo-secondary.png';

interface LogoProps {
  className?: string
  variant?: 'primary' | 'secondary'
}

const Logo: React.FC<LogoProps> = ({ className = '', variant = 'primary' }) => (
  <div className={ classNames('w-[150px] lg:w-[190px]', className)}>
  {
  variant === 'primary'
    ? (
    <img
      src={logoPrimary}
      alt="logo"
    />
      )
    : (
    <img
      src={logoSecondary}
      alt="logo"
    />)
  }
  </div>
);

export default Logo;
