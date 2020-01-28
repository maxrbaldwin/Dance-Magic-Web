module.exports = {
  siteMetadata: {
    title: `Dance Magic Dance Studio Hammonton New Jersey`,
    description: `Dance Magic Dance Studio Hammonton New Jersey`,
    author: `Dance Magic Dance Studio Hammonton New Jersey`,
    keywords: `Dance Magic, Dance Studio Hammonton New Jersey, Dance Studio South Jersey, Dance Studio Berlin New Jersey, Dance Studio Atlantic City, Dance Studio Atco New Jersey, Dance Studio Mullica New Jersey`,
    siteUrl: 'https://dancemagicnj.com',
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
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        createLinkInHead: true,
      }
    }
  ],
}
