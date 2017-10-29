const path = require('path');

module.exports = {
  pathPrefix: '/stringy',
  siteMetadata: {
    title: 'Stringy',
  },
  plugins: [
      'gatsby-plugin-react-helmet',
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              name: 'methods',
              path: `${path.resolve(__dirname, '..', 'packages')}/**/README.md`,
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
}
