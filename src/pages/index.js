import React from "react"
// import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"

const IndexPage = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
  //       edges {
  //         node {
  //           postDescription
  //           title
  //           slug
  //           publishedDate(formatString: "DD MMMM, YYYY")
  //           thumbnail {
  //             fluid {
  //               src
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  // console.log(data.allContentfulBlogPost.edges[0].node.thumbnail.fluid.src)
  return (
    <div>
      <Layout>
        <Head title="Home" />
        <main className="mt-12">
          <h1>content goes here</h1>
        </main>
      </Layout>
    </div>
  )
}
export default IndexPage
