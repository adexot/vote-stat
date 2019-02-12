module.exports = {
  siteMetadata: {
    title: `Election 2019`,
    description: `The coming Presidential Election in 2019 .`,
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
        icons: [
          {
            "src": "images/icon-32x32.png",
            "sizes": "32x32",
            "type": "image/png"
          },
          {
            "src": "images/icon-70x70.png",
            "sizes": "70x70",
            "type": "image/png"
          },
          {
            "src": "images/icon.png",
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "src": "images/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "images/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "images/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
          },
          {
            "src": "images/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": "images/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ]
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    'gatsby-plugin-sass'
  ],
}
