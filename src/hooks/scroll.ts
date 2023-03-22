import * as React from 'react';
import { usePrevious } from './utilities';

interface ScrollInfo {
  scrollY: number
  prevScrollY: number
}

export const useWindowScroll = (handler: (info: ScrollInfo) => void): void => {
  const [scrollY, setScrollY] = React.useState(0);
  const prevScrollY = usePrevious(scrollY);

  React.useEffect(() => {
    const onScroll = (): void => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  React.useEffect(() => {
    handler({
      scrollY,
      prevScrollY: prevScrollY ?? 0,
    });
  }, [scrollY]);
};

export const useResetScrollOnReload = (): void => {
  React.useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);
};
