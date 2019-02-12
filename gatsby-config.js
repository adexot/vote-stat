module.exports = {
  siteMetadata: {
    title: `Election 2019`,
    description: `The coming Election in 2019 is coming soon...`,
    author: `Oadex_09`,
  },
  plugins: [
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
        name: `Election 2019`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#23272B`,
        theme_color: `#23272B`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    'gatsby-plugin-sass'
  ],
}
