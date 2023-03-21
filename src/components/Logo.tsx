import * as React from 'react';
import classNames from 'classnames';

import LogoGraphic from '../graphics/logo.graphic.svg';

interface LogoProps {
  className?: string
  variant?: 'primary' | 'secondary'
}

const Logo: React.FC<LogoProps> = ({ className = '', variant = 'primary' }) => (
  <div className={classNames('flex items-center gap-x-2 select-none', className)}>
    <LogoGraphic
      className="w-6 h-6 lg:w-15 lg:h-15"
    />
    <div
      className={classNames(
        'text-lg lg:text-4xl font-bold font-quattrocento uppercase text-black',
        {
          'text-white': variant === 'secondary',
        },
      )}
    >
      Adornup
    </div>
  </div>
);

export default Logo;
