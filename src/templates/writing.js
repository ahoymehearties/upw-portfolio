import React from "react"
import { graphql } from "gatsby"

import Head from "../components/Head"

export const query = graphql`
  query($slug: String!) {
    contentfulWriting(slug: { eq: $slug }) {
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
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

const Writing = props => {
  return (
    <>
      <Head title={props.data.contentfulWriting.title} />
      {/* header */}
      <div className="text-center mt-12">
        <h1 className="font-bold break-normal text-3xl md:text-5xl">
          {props.data.contentfulWriting.title}
        </h1>
      </div>
      <div className="mx-0 sm:mx-6">
        {/* header */}
        <div
          className="w-full p-8 md:p-24 md:pt-2 text-xl md:text-2xl text-grey-darkest leading-normal"
          style={{ fontFamily: `Georgia,serif` }}
          dangerouslySetInnerHTML={{
            __html: props.data.contentfulWriting.body.childMarkdownRemark.html,
          }}
        ></div>
      </div>
    </>
  )
}
export default Writing
