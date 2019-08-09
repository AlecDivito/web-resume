module.exports = {
  siteMetadata: {
    title: `Alec Divito's Resume website`,
    description: `Hi! I'm Alec Di Vito and I'm just another fullstack javascript engineer`,
    author: `@alecdivito`,
    email: `divitoa@sheridancollege.ca`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-sharp`, // images
    `gatsby-plugin-sharp`,      // image optimization
    `gatsby-transformer-json`,  // graphql for data files
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            }
          }
        ]
      }
    },// md files to html
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alec Di Vito`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/data/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
