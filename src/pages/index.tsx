import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import Background from '../components/Background';
import Seo from '../components/Seo';
import Header from '../components/Header';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <main>
        <Header />
        <h1>Hello world</h1>
      </main>
      <Background />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (<Seo title="Home page" />);
