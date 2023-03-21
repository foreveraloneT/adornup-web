import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import MainSection from '../components/sections/MainSection';
import InfoSection from '../components/sections/InfoSection';
import TeamSection from '../components/sections/TeamSection';
import Background from '../components/Background';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCalculateHeightScreen } from '../hooks/screen';

const IndexPage: React.FC<PageProps> = () => {
  useCalculateHeightScreen();

  const infoSectionElm = React.useRef<HTMLElement>(null);

  const scrollToInfo = React.useCallback(() => {
    infoSectionElm.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <>
      <main>
        <Header />
        <MainSection onClickScroll={scrollToInfo} />
        <InfoSection ref={infoSectionElm} />
        <TeamSection />
        <div className="h-[1000px] bg-gold" />
        <Footer />
      </main>
      <Background />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (<Seo title="Home page" />);
