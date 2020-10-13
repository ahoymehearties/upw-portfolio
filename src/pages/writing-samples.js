import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import AniLink from "gatsby-plugin-transition-link/AniLink"

import Head from "../components/Head"

const WritingSamplePage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulWritingSample(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            id
            title
            slug
            publishedDate
            postBody {
              childMarkdownRemark {
                timeToRead
                excerpt
              }
            }
            thumbnail {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `)
  console.log(data)

  return (
    <div>
      <>
        <Head title="Samples" />
        <main className="mt-12">
          <div className="flex mb-4 px-4 lg:px-0 justify-center">
            <h2 className="font-bold text-4xl uppercase italic">Samples</h2>
          </div>
          <div className="grid gap-2 md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-3 m-5 mb-10">
            {data.allContentfulWritingSample.edges.map(post => {
              return (
                <div key={post.node.slug} className="w-full mb-2 single-post">
                  <AniLink cover to={`/writing-sample/${post.node.slug}`}>
                    <img
                      src={post.node.thumbnail.fluid.src}
                      className="object-cover h-64 lg:h-48 w-full  "
                      alt="technology"
                    />
                  </AniLink>
                  <div className="lg:p-2 flex flex-col justify-between h-64">
                    <div>
                      <h2 className="font-bold text-2xl ">
                        {post.node.title.length > 50
                          ? post.node.title.slice(0, 50) + "..."
                          : post.node.title}
                      </h2>
                      <p className="mt-2">
                        {post.node.postBody.childMarkdownRemark.excerpt}
                      </p>
                    </div>

                    <AniLink
                      cover
                      to={`/blog/${post.node.slug}`}
                      className="inline-block py-2"
                    >
                      {" "}
                      Read more ▶
                    </AniLink>
                  </div>
                </div>
              )
            })}
          </div>
        </main>
      </>
    </div>
  )
}

export default WritingSamplePage
