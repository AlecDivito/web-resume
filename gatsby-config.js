module.exports = {
  siteMetadata: {
    title: `Alec Divitos Resume website`,
    description: `Alright so this is just a simple desctipion`,
    author: `@alecdivito`,
    email: `divitoa@sheridancollege.ca`,
    linkedinLink: "https://www.linkedin.com/in/alec-divito-3a1922140/",
    githubLink: "https://github.com/Alecdivito",
    resumePdfLink: `/AlecDivito-resume.pdf`,
    siteLinks: [
      {
        title: `Home`,
        link: `/`,
      },
      {
        title: `About`,
        link: `/about`,
      },
      {
        title: `Projects`,
        link: `/personal`,
      },
      {
        title: `Work`,
        link: "/work",
      },
      {
        title: `Blog`,
        link: `/blog`,
      },
      {
        title: `Contact`,
        link: `/contact`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
