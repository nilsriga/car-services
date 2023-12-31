const isDev = process.env.NODE_ENV === 'production';
const path = require('path');
module.exports = {
  siteMetadata: {
    siteUrl: 'https://carmaster.gatsbyjs.io',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        fileName: isDev,
        displayName: isDev,
        pure: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: '9fc0732a6d789e5a9902305e5941c6',
        localeFallbacks: {
          'lv': 'en',
          'ru': 'lv',
          'en': 'ru',
          
        },
      },
    },
    {
      resolve: '@builder.io/gatsby',
      options: {
        // Replace with your Public API Key
        publicAPIKey: "746be61c2558434bb2a8fa489a36b0b1",
        useCache: false,
        templates: {
          // Render every `page` model as a new page using the
          // src/templates/page.jsx template based on the URL provided in Builder.io
          page: path.resolve('src/templates/BuilderLandingPage.jsx'),
        },
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: ["/","/*"],
        // appendScript: require.resolve(`src/custom-sw-code.js`),
      },
    },
  ],
};
