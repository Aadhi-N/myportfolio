// Initialize dotenv
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Aadhilah Nizamdeen - Portfolio Site",
    author: "Aadhilah Nizamdeen",
    description: "Portfolio site to showcase projects and web development skills",
    gTagSrc: `https://www.googletagmanager.com/gtag/js?id=${process.env.MEASUREMENT_ID}`
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
   {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `data`,
      path: `${__dirname}/src/data/`,
    },
  },
  "gatsby-remark-normalize-paths"
  ],
};
