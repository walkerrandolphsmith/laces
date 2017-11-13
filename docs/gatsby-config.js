const url = process.env.GATSBY_URL || 'http://quillio.io/stringy/';

module.exports = {
  pathPrefix: '/stringy',
  siteMetadata: {
    title: 'Stringy',
    description: 'Collection of common string utilities in JavaScript',
    url: url,
    author: 'quillio',
    logo: url + 'logo.png',
    smallLogo: url + 'apple-icon-57x57.png',
    mediumLogo: url + 'apple-icon-72x72.png',
    largeLogo: url + 'apple-icon-114x114.png',
    extraLargeLogo: url + 'apple-icon-144x144.png',
  },
  plugins: [
      'gatsby-plugin-react-helmet',
      `gatsby-transformer-documentationjs`,
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              name: `source`,
              path: `${__dirname}/../packages/`,
          },
      },
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              name: 'main',
              path: `${__dirname}/../README.md`,
          },
      },
      {
          resolve: 'gatsby-transformer-remark',
          options: {
              plugins: [
                  'gatsby-remark-prismjs',
              ]
          }
      },
  ],
};
