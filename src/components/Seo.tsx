import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

const Seo: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  const { siteMetadata: meta } = data.site;
  const pictureUrl = `${meta.siteUrl as string}/seo.png`;

  return (
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="image" content={pictureUrl} />
      <meta property="og:url" content={meta.siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={pictureUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:url" content={meta.siteUrl} />
      <meta name="twitter:description" content={meta.description} />
      <meta property="twitter:image" content={pictureUrl} />
    </>
  );
};

export default Seo;
