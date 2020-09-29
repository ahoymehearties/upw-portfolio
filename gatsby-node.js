const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const res = await graphql(`
    query {
      allContentfulWriting {
        edges {
          node {
            title
            slug
            
          }
        }
      }
    }
  `)

  res.data.allContentfulWriting.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/writing/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
