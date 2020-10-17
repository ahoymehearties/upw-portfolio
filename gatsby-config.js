module.exports = {
  siteMetadata: {
    title: `Cyrus on the Internet`,
    description: `Telling stories with tons of tools.`,
    url: "https://cyrusontheinternet.com",
    twitterUsername: "@ahoymehearties",
    lang: "en_US",
    author: `Edin Džabija`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/components/Layout.js`),
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"),
        ],
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              quality: 90,
              maxWidth: 1024,
              loading: "lazy",
            },
          },
        ],
      },
    },
    `gatsby-plugin-smoothscroll`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        lang: `en`,
        start_url: `/`,
        theme_color_in_head: false,
        icon: "src/images/favicon.svg",
      },
    },
  ],
}
