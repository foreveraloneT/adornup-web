import * as React from 'react';

import LogoGraphic from '../graphics/logo.graphic.svg';

const Logo: React.FC = () => (
  <div className="flex items-center gap-x-2 select-none">
    <LogoGraphic
      className="w-6 h-6 lg:w-15 lg:h-15"
    />
    <div
      className="text-base lg:text-4xl font-bold font-quattrocento uppercase"
    >
      Adornup
    </div>
  </div>
);

export default Logo;
