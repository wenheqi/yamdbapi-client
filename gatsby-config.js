/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `YamDB - Yet Another Movie Database API`,
    description: `A free, simple yet powerful movie database API.`,
    author: `Wenhe Qi`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-react-helmet`,
  ],
}
