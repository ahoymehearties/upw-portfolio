import React from "react"
import { graphql } from "gatsby"

import Head from "../components/Head"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      description
      headerImage {
        fluid(maxWidth: 1280, quality: 100) {
          src
        }
      }
      thumbnail {
        fluid(maxWidth: 1280, quality: 100) {
          src
        }
      }
      publishedDate(formatString: " DD MMMM, YYYY")
      postBody {
        childMarkdownRemark {
          html
          excerpt
        }
      }
    }
  }
`

const Blog = props => {
  return (
    <>
      <Head title={props.data.contentfulBlogPost.title} />
      <div className="text-center pt-12 px-2 lg:px-0">
        <p className="text-sm md:text-base text-teal-500 font-bold uppercase">
          {props.data.contentfulBlogPost.publishedDate}{" "}
        </p>
        <h1 className="font-bold break-normal text-3xl md:text-5xl">
          {props.data.contentfulBlogPost.title}
        </h1>

        <div
          className="container w-full mx-auto my-4 bg-white bg-cover max-w-screen-lg p-2 md:p-0"
          style={{
            height: "40vh",
            backgroundImage: `url(${props.data.contentfulBlogPost.headerImage.fluid.src} )`,
            backgroundPosition: "center 40%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
          }}
        ></div>
      </div>

      <div
        className="bg-white w-full max-w-screen-lg mx-auto text-xl md:text-2xl text-grey-darkest leading-normal px-4 lg:px-0"
        style={{ fontFamily: `Georgia,serif` }}
        dangerouslySetInnerHTML={{
          __html:
            props.data.contentfulBlogPost.postBody.childMarkdownRemark.html,
        }}
      ></div>
      <div className="container max-w-5xl mx-auto -mt-32">
        <div className="mx-0 sm:mx-6">
          <div className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal"></div>
        </div>
      </div>
    </>
  )
}

export default Blog
