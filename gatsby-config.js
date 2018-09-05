module.exports = {
  siteMetadata: {
    title: 'Josh Wilkerson | Front-End Developer | Franklin, TN',
    author: 'Josh Wilkerson',
    description: 'Josh Wilkerson - Front-End Developer & web designer from Franklin, TN'
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/projects`,
        name: "projects",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1060,
              linkImagesToOriginal: false,
              quality: 90,
            },
          },
          "gatsby-remark-copy-linked-files",
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/assets/`,
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
  ],
}
