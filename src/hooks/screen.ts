import * as React from 'react';

// REF: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
export const useCalculateHeightScreen = (): void => {
  const setVhVar = (): void => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    const vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  React.useEffect(() => {
    setVhVar();

    window.addEventListener('resize', setVhVar);

    return () => {
      window.removeEventListener('resize', setVhVar);
    };
  }, []);
};
