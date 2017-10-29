var path = require('path');

const methodPath = path.resolve(__dirname, '..', 'packages') + '/**/' + 'README.md';

console.log(methodPath)

module.exports = {
  pathPrefix: `/stringy`,
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
      `gatsby-plugin-react-helmet`,
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              name: `methods`,
              path: methodPath,
          },
      },
      {
          resolve: `gatsby-transformer-remark`,
          options: {
              plugins: [
                  `gatsby-remark-prismjs`,
              ]
          }
      },
  ],
}
