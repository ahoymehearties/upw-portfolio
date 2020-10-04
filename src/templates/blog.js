import React from "react"
import { graphql } from "gatsby"

// import Layout from "../components/Layout"
import Head from "../components/Head"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      headerImage {
        fluid {
          src
        }
      }
      thumbnail {
        fluid {
          src
        }
      }
      publishedDate(formatString: " DD MMMM, YYYY")
      postBody {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

const Blog = props => {
  return (
    <>
      <Head title={props.data.contentfulBlogPost.title} />

      <div className="text-center pt-12 md:pt-32">
        <p className="text-sm md:text-base text-teal-500 font-bold uppercase">
          {props.data.contentfulBlogPost.publishedDate}{" "}
        </p>
        <h1 className="font-bold break-normal text-3xl md:text-5xl">
          {props.data.contentfulBlogPost.title}
        </h1>
        <div
          className="container w-full max-w-4xl mx-auto bg-white bg-cover mt-8 rounded"
          style={{
            backgroundImage: `url(http://benjaminway.co.uk/wp-content/uploads/2019/05/cropped-header-image-5-1.jpg)`,
            height: "75vh",
          }}
        ></div>
      </div>
      <div class="mx-0 sm:mx-6">
        <div
          className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-grey-darkest leading-normal"
          style={{ fontFamily: `Georgia,serif` }}
          dangerouslySetInnerHTML={{
            __html:
              props.data.contentfulBlogPost.postBody.childMarkdownRemark.html,
          }}
        ></div>
      </div>
      {/* <div className="container max-w-2xl mx-auto -mt-32"
        dangerouslySetInnerHTML={{
          __html:
            props.data.contentfulBlogPost.postBody.childMarkdownRemark.html,
        }}
      /> */}
      <div className="container max-w-5xl mx-auto -mt-32">
        <div className="mx-0 sm:mx-6">
          <div className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal"></div>
        </div>
      </div>
    </>
  )
}

export default Blog
