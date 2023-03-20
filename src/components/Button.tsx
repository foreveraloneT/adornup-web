import * as React from 'react';
import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  compact?: boolean
}

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  compact = false,
  type = 'button',
  children,
  className = '',
  disabled = false,
  ...props
}) => (
  <button
    className={classNames(
      'bg-green text-white font-sans font-medium w-fit rounded-4xl',
      'lg:hover:bg-grey-hover active:bg-grey-hover',
      'disabled:bg-grey-disabled disabled:text-grey-text2',
      'py-3 lg:py-[14.5px] px-11 lg:px-12 text-base lg:text-xl',
      className,
    )}
    type={type}
    {...props}
  >
    {children}
  </button>
);

export default Button;
