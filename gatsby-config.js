const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Jeff Lupinski — Digital Designer',
    description: 'Jeff Lupinski is an independent designer that focuses on digital experiences and products from Denver, Colorado.',
    author: '@lupinskij',
    siteUrl: 'https://jefflupinski.com',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-90529229-3",
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        background_color: '#fff',
        theme_color: '#21201f',
        name: 'jeff-lupinski',
        short_name: 'lupinski',
        start_url: '/',
        display: 'minimal-ui',
        icon: 'static/favicon.png',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-eslint',
    'gatsby-plugin-stylelint',
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
