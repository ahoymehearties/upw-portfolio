import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
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
    <Layout>
      <Head title={props.data.contentfulWriting.title} />
      {/* hero test */}
      <div
        class="py-20 h-64"
        style={{
          backgroundImage: `url(${props.data.contentfulWriting.thumbnail.fluid.src})`,
          backgroundColor: "#fff",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      {/* hero test */}
      {/* <div
        className="container w-full max-w-4xl mx-auto bg-white bg-cover mt-8 rounded"
        style={{
          width: "100%",
          backgroundImage: `url(${props.data.contentfulVoice.headerImage.fluid.src})`,
          height: "75vh",
        }}
      ></div> */}
      <Head title={props.data.contentfulWriting.title} />

      {/* header */}
      <div className="text-center pt-12 md:pt-32">
        <h1 className="font-bold break-normal text-3xl md:text-5xl">
          {props.data.contentfulWriting.title}
        </h1>
      </div>
      <div class="mx-0 sm:mx-6">
        {/* header */}
        <div
          className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-grey-darkest leading-normal"
          style={{ fontFamily: `Georgia,serif` }}
          dangerouslySetInnerHTML={{
            __html: props.data.contentfulWriting.body.childMarkdownRemark.html,
          }}
        ></div>
      </div>
    </Layout>
  )
}
export default Writing
