const url = process.env.GATSBY_URL || 'http://walkerrandolphsmith.com/laces/';

module.exports = {
  pathPrefix: '/laces',
  siteMetadata: {
    title: 'Laces',
    description: 'Collection of common string utilities in JavaScript',
    url: url,
    author: 'walkerrandolphsmith',
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
                  {
                      resolve: `gatsby-remark-images`,
                      options: {
                          maxWidth: 250,
                          linkImagesToOriginal: false,
                          sizeByPixelDensity: true,
                      },
                  },
              ]
          }
      },
  ],
};
