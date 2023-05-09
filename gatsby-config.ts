import type { GatsbyConfig } from 'gatsby';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'ADORNUP | Transforming your vision into exquisite jewellery creations',
    description: 'ADORNUP offers end-to-end services for all types of jewellery businesses especially for startups. This starts from CAD designing to finished products. We specialises in helping small customers who prefer to start with small quantity orders or have unique designs that require special craftsmanship. We provide full support and professional service to assist our client to fulfil their inventory.',
    siteUrl: 'https://www.adornup.co',
    email: 'info@adornup.co',
    tel: '+6620129514',
    whatsapp: '+6620129514',
    whatsappLink: 'https://wa.me/6620129514',
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
