module.exports = {
  siteMetadata: {
    title: `Dance Magic, Hammonton New Jersey`,
    description: `Dance Magic, Hammonton New Jersey, Dance Studio`,
    author: `@maxrbaldwin`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          '@components': './components',
          '@styles': './styles',
          '@utils': './utils'
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'PT Serif',
          'Merriweather\:400',
        ],
        display: 'swap'
      }
    }
  ],
}
