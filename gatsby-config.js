module.exports = {
  siteMetadata: {
    title: "Aadhilah Nizamdeen - Portfolio Site",
    author: "Aadhilah Nizamdeen",
    description: "Portfolio site to showcase projects and web development skills",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
         icon: 'src/images/favicon.ico',
      }
   },
   `gatsby-transformer-yaml`,
   {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `data`,
      path: `${__dirname}/src/data/`,
    },
  },
  ],
};
