import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import MainSection from '../components/sections/MainSection';
import InfoSection from '../components/sections/InfoSection';
import Background from '../components/Background';
import Seo from '../components/Seo';
import Header from '../components/Header';

const IndexPage: React.FC<PageProps> = () => {
  const infoSectionElm = React.useRef<HTMLElement>(null);

  const scrollToInfo = React.useCallback(() => {
    infoSectionElm.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <>
      <main>
        <Header />
        <MainSection onClickScroll={scrollToInfo} />
        <InfoSection ref={infoSectionElm} />
        <div className="h-[3000px] bg-white" />
      </main>
      <Background />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (<Seo title="Home page" />);
