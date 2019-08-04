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
    aboutMe: [
      {
        details: [
          `Third year co-op Mobile Computing student at Sheridan College`,
          `Graduate of Sheridan\'s Software Development and Network Engineering advance diploma`,
          `Spending time expanding my knowledge into all advancements in computer science. Like using my skill\'s developing websites as well as picking up new languages and frameworks and seeing how to solve problems differently and more effectively`,
          `Currently focusing on expanding my knowledge in machine learning and deep learning application, while iterating them into web services and frontend application, Also planning to start focusing on mobile development more to borden my skill set even more`,
        ],
        link: "/work",
        section: 'Professional',
      },
      {
        details: [
          'I enjoy taking on difficult challenges and building out applications fast. I enjoy working with friends and spending time on school projects',
          'When I\'m not coding, I enjoy biking all over ontario, snowboarding (in the winter), ice skating, and spending a weekend camping at one of ontario\'s beautiful campsites',
          'Have I mentioned I really like animals? Especially cats',
        ],
        link: "/personal",
        section: 'Personal',
      }
    ]
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
