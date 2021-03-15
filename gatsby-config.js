module.exports = {
  siteMetadata: {
    title: "Gatsby Prismic Test",
  },
  plugins: [
      "gatsby-plugin-sass",
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'gatsby-prismic-preview',
        prismicToolbar: true,
        accessToken: '',
        schemas: {
          homepage: require('./custom_types/homepage.json'),
        },
      },
    },
  ],
};
