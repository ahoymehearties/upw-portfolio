import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"

export const query = graphql`
  query($slug: String!) {
    contentfulVoice(slug: { eq: $slug }) {
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

const Voice = props => {
  return (
    <Layout>
      <Head title={props.data.contentfulVoice.title} />
      {/* header */}
      <div className="text-center">
        <h1 className="font-bold break-normal text-3xl md:text-5xl">
          {props.data.contentfulVoice.title}
        </h1>
      </div>
      <div class="mx-0 sm:mx-6">
        {/* header */}

        <div
          className=" w-full p-8 md:p-24 md:pt-2 text-xl md:text-2xl text-grey-darkest leading-normal"
          style={{ fontFamily: `Georgia,serif` }}
          dangerouslySetInnerHTML={{
            __html: props.data.contentfulVoice.body.childMarkdownRemark.html,
          }}
        ></div>
      </div>
    </Layout>
  )
}
export default Voice
