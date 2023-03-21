import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Adornup',
    siteUrl: 'https://www.adornup.co',
    email: 'info@adornup.co',
    tel: '+66932434242',
    whatsapp: '+66932434242',
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
