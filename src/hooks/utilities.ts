import * as React from 'react';

export const usePrevious = <T>(value: T): T | undefined => {
  const prev = React.useRef<T>(value);

  React.useEffect(() => {
    prev.current = value;
  }, [value]);

  return prev.current;
};
