import type { GatsbyConfig } from 'gatsby';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Adornup',
    siteUrl: 'https://www.adornup.co',
    email: 'info@adornup.co',
    tel: '+6620129514',
    whatsapp: '+6620129514',
    address: '1233 Charoen Krung Road, Suriyawong, Bang Rak, Bangkok 10500',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.(graphic|icon)\.svg$/,
        },
      },
    },
  ],
};

export default config;
