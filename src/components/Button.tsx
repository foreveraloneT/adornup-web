import * as React from 'react';
import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  compact?: boolean
  full?: boolean
}

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  full = false,
  type = 'button',
  children,
  className = '',
  ...props
}) => (
  <button
    className={classNames(
      'bg-green text-white font-sans font-medium w-fit rounded-4xl select-none',
      'lg:hover:bg-grey-hover active:bg-grey-hover',
      'disabled:bg-grey-disabled disabled:text-grey-text2 disabled:pointer-events-none disabled:cursor-not-allowed',
      'py-3 lg:py-[14.5px] px-11 lg:px-12 text-base lg:text-xl',
      {
        'w-full': full,
      },
      className,
    )}
    type={type}
    {...props}
  >
    {children}
  </button>
);

export default Button;
