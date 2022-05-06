module.exports = {
  siteMetadata: {
    title: `Redmine`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    'gatsby-plugin-postcss',
  ],
  proxy: {
    prefix: "/api",
    url: "https://redmine.bredband2.se",
  },
};