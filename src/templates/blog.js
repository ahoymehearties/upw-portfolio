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

      <div className="text-center pt-12">
        <p className="text-sm md:text-base text-teal-500 font-bold uppercase">
          {props.data.contentfulBlogPost.publishedDate}{" "}
        </p>
        <h1 className="font-bold break-normal text-3xl md:text-5xl">
          {props.data.contentfulBlogPost.title}
        </h1>

        <div
          className="container w-full mx-auto mt-1 bg-white bg-cover max-w-screen-lg"
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
