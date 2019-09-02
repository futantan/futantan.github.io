module.exports = {
  siteMetadata: {
    title: 'LambdaIO',
    description: 'This is my cool blog.',
  },
  plugins: [
    {
      resolve: 'gatsby-transformer-remark',
      options: { plugins: [{ resolve: `gatsby-remark-prismjs`, options: {} }] },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'pages', path: `${__dirname}/src/blog` },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: { component: `${__dirname}/src/layout/Layout.jsx` },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: { pathToConfigModule: 'src/utils/typography' },
    },
  ],
}
