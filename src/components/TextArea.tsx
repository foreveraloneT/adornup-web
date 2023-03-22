import classNames from 'classnames';
import * as React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  full?: boolean
}

const Textarea: React.FC<TextareaProps> = ({
  full = false,
  className = '',
  ...props
}) => (
  <textarea
    className={classNames(
      'outline-none placeholder:uppercase placeholder:text-grey-text2 placeholder:font-sans placeholder:font-normal',
      'text-black text-base font-sans font-normal resize-none',
      'px-4 py-3 border border-solid border-grey-text1',
      'disabled:bg-grey-disabled disabled:cursor-not-allowed',
      {
        'w-full': full,
      },
      className,
    )}
    {...props}
  />
);

export default Textarea;
