/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `14-de-agosto`,
    siteUrl: `https://www.14deagosto.com`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};