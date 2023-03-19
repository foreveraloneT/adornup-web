import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

interface SeoProps {
  title: string
}

const Seo: React.FC<SeoProps> = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <title>{data.site.siteMetadata.title} | {title}</title>
    </>
  );
};

export default Seo;
