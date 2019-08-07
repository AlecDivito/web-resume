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
        ready: true,
      },
      {
        title: `About`,
        link: `/about`,
        ready: true,
      },
      {
        title: `Projects`,
        link: `/personal`,
        ready: true,
      },
      {
        title: `Work`,
        link: "/work",
        ready: true,
      },
      {
        title: `Blog`,
        link: `/blog`,
        ready: false,
      },
      {
        title: `Contact`,
        link: `/contact`,
        ready: true,
      },
    ],
    aboutMe: [
      {
        details: [
          `Third year co-op Mobile Computing student at Sheridan College`,
          `Graduate of Sheridan\'s Software Development and Network Engineering advance diploma`,
          `Spending time expanding my knowledge into all advancements in computer science. Like using my skill\'s developing websites as well as picking up new languages and frameworks and seeing how to solve problems differently and more effectively`,
          `Currently focusing on expanding my knowledge in machine learning and deep learning application, while iterating them into web services and frontend application, Also planning to start focusing on mobile development more to borden my skill set even more`,
          `I tackled any challenge I was presented with, learning anything I needed to learn. I am capable of learning anything. I am eager to learn anything. I am interested in a breadth of context and understanding to create full pictures of the development ecosystem, allowing me to make intelligent decisions that allow our team to work across-team and across-projects and won't pigeonhole my team into a bad design.`
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
      },
      {
        details: [
          'Be awesome',
          'Study Machine Learning',
          'Study Math',
          'Get at least 85% in all my courses'
        ],
        link: null,
        section: 'Goals'
      }
    ],
    personalProjects: [
      {
        picId: "budgetise",
        title: "Budgetise",
        stage: "Completed",
        technologies: ["Angular 2+", "Nest.js", "Express", "Typescript", "SQL", "NGRX", "SCSS", "HTML", "Javascript"],
        githubLink: null,
      },
      {
        picId: "bombFinder",
        title: "MineSweeper Clone",
        stage: "Completed",
        technologies: ["Typescript", "React", "CRA", "Canvas2d", "Indexdb", "CSS", "HTML"],
        githubLink: "https://github.com/AlecDivito/bomb-finder"
      },
      {
        picId: "personalWebsite",
        title: "Personal Website",
        stage: "In Progress",
        technologies: ["Gatsby", "Javascript", "React", "Canvas2d", "SCSS", "HTML"],
        githubLink: "https://github.com/AlecDivito/bomb-finder"
      },
      {
        picId: "bitmap",
        title: "Rusty Bitmap",
        stage: "In Progress",
        technologies: ["Rust"],
        githubLink: "https://github.com/AlecDivito/rusty-bitmap"
      },
      {
        picId: "tetris",
        title: "Tetris Clone",
        stage: "In Progress",
        technologies: ["Rust", "Typescript", "Canvas2d", "CSS", "HTML"],
        githubLink: "https://github.com/AlecDivito/weby-rusty-tetris"
      },
    ],
    work: [
      {
        startDate: "Jan 2019",
        endDate: "May 2019",
        company: "Sheridan College",
        position: "Software Developer",
        description: `At sheridan I used MatLab, C++, Typescript and machine
          learning to detect when when people fell. I worked with PointClickCare
          into implementing a solution that was able to detect if someone has
          fallen or not`
      },
      {
        startDate: "Jan 2016",
        endDate: "Dec 2018",
        company: "Sheridan College",
        position: "Student",
        description: `I graduated from Sheridan's Software Development and Network
        Engineering course with a 3.84 GPA. At Sheridan There was lot's of hands
        on learning and real world projects with coops.`
      },
      {
        startDate: "May 2018",
        endDate: "Aug 2018",
        company: "Maple Leaf Foods",
        position: "IS Digital Developer",
        description: `While at Maple leaf foods I worked on multiple projects 
        (IOS, C#, .Net MVC5 and Core, as well as react + typescript). Helped
        extend backend and frontend functionality for IOS Plant down time app.`
      },
      {
        startDate: "Sep 2017",
        endDate: "Dec 2017",
        company: "Ontario Government",
        position: "Junior Software Developer",
        description: `Developed lots of skills working with Typescript and Angular 2+.
        Was given tasks to setup new projects Angular 2+ projects. UsedAzure,
        VSTS, Angular 2+, .Net Core 2, and NoSql to quickly develop user
        interface, and anticipate and react to UX needs`
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
