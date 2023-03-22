import classNames from 'classnames';
import * as React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  full?: boolean
}

const Input: React.FC<InputProps> = ({
  full = false,
  className = '',
  type = 'text',
  ...props
}) => (
  <input
    className={classNames(
      'outline-none placeholder:uppercase placeholder:text-grey-text2 placeholder:font-sans placeholder:font-normal',
      'text-black text-base font-sans font-normal',
      'px-4 py-3 border border-solid border-grey-text1',
      'disabled:bg-grey-disabled disabled:cursor-not-allowed',
      {
        'w-full': full,
      },
      className,
    )}
    type={type}
    {...props}
  />
);

export default Input;
