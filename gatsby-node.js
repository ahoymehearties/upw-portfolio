const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const writingTemplate = path.resolve("./src/templates/writing.js")
  const voiceTemplate = path.resolve("./src/templates/voice.js")

  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "DD MMMM, YYYY")
          }
        }
      }
      allContentfulWriting {
        edges {
          node {
            title
            slug
          }
        }
      }
      allContentfulVoice {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `)
  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
  res.data.allContentfulWriting.edges.forEach(edge => {
    createPage({
      component: writingTemplate,
      path: `/writing/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
  res.data.allContentfulVoice.edges.forEach(edge => {
    createPage({
      component: voiceTemplate,
      path: `/voice/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
