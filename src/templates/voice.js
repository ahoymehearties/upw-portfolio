import React from "react"
import { graphql } from "gatsby"
import Link from "gatsby-plugin-transition-link"

import Head from "../components/Head"

export const query = graphql`
  query($slug: String!) {
    contentfulVoice(slug: { eq: $slug }) {
      title
      position
      vocalRole
      year
      developer
      website
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
          excerpt
        }
      }
    }
  }
`

const Voice = props => {
  return (
    <>
      <Head
        title={props.data.contentfulVoice.title}
        description={
          props.data.contentfulVoice.body.childMarkdownRemark.excerpt
        }
      />

      <div className="md:flex shadow-lg mx-6 md:mx-auto max-w-screen-lg my-10 h-auto">
        <img
          className="h-full w-full md:w-1/2 object-cover md:rounded-lg rounded-r-none pb-5/6"
          src={props.data.contentfulVoice.headerImage.fluid.src}
          alt={props.data.contentfulVoice.title}
        />
        <div className="w-full md:w-1/2 md:pl-10 p-4 pt-2 bg-orange-100 rounded-lg flex items-center">
          <div>
            <div className="pb-4">
              {/* <span className="text-gray-800 text-3xl font-semibold">Title: </span> */}
              <h2 className="text-gray-800 text-4xl font-semibold uppercase underline">
                {props.data.contentfulVoice.title}
              </h2>
            </div>
            <div className="text-xl pb-2">
              <span className="font-semibold">Position: </span>
              {props.data.contentfulVoice.position && (
                <span>{props.data.contentfulVoice.position}</span>
              )}
            </div>
            <div className="text-xl pb-2">
              <span className="font-semibold">Vocal Role(s): </span>
              {props.data.contentfulVoice.vocalRole}
            </div>
            <div className="text-xl pb-2">
              <span className="font-semibold">Year: </span>
              {props.data.contentfulVoice.year}
            </div>
            <div className="text-xl pb-2">
              <span className="font-semibold">Developer: </span>
              {props.data.contentfulVoice.developer}
            </div>
            <div className="text-xl">
              <span className="font-semibold">Website: </span>
              <span className="underline italic font-semibold text-orange-400 hover:text-orange-600">
                <Link to={props.data.contentfulVoice.website}>
                  {" "}
                  Official Website{" "}
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mx-6 md:mx-auto max-w-screen-lg my-10"
        style={{ fontFamily: `Georgia,serif` }}
        dangerouslySetInnerHTML={{
          __html: props.data.contentfulVoice.body.childMarkdownRemark.html,
        }}
      ></div>
    </>
  )
}
export default Voice
