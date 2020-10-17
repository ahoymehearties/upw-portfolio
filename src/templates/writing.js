import React from "react"
import { graphql } from "gatsby"
import Link from "gatsby-plugin-transition-link"

import Head from "../components/Head"

export const query = graphql`
  query($slug: String!) {
    contentfulWriting(slug: { eq: $slug }) {
      title
      position
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

const Writing = props => {
  return (
    <>
      <Head title={props.data.contentfulWriting.title} />

      <div className="md:flex shadow-lg mx-6 md:mx-auto max-w-screen-lg my-10 h-auto">
        <img
          className="h-full w-full md:w-1/2 object-cover md:rounded-lg rounded-r-none pb-5/6"
          src={props.data.contentfulWriting.headerImage.fluid.src}
          alt={props.data.contentfulWriting.title}
        />
        <div className="w-full md:w-1/2 md:pl-10 p-4 pt-2 bg-orange-100 rounded-lg flex items-center">
          <div>
            <div className="pb-4">
              {/* <span className="text-gray-800 text-3xl font-semibold">Title: </span> */}
              <h2 className="text-gray-800 text-4xl font-semibold uppercase underline">
                {props.data.contentfulWriting.title}
              </h2>
            </div>
            <div className="text-xl pb-2">
              <span className="font-semibold">Position: </span>
              <span>{props.data.contentfulWriting.position}</span>
            </div>
            {/* <div className="text-xl pb-2">
              <span className="font-semibold">Vocal Role(s): </span>
              {props.data.contentfulWriting.vocalRole}
            </div> */}
            <div className="text-xl pb-2">
              <span className="font-semibold">Year: </span>
              {props.data.contentfulWriting.year}
            </div>
            <div className="text-xl pb-2">
              <span className="font-semibold">Developer: </span>
              {props.data.contentfulWriting.developer}
            </div>
            <div className="text-xl">
              <span className="font-semibold">Website: </span>
              <span className="underline italic font-semibold text-orange-400 hover:text-orange-600">
                <Link to={props.data.contentfulWriting.website}>
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
          __html: props.data.contentfulWriting.body.childMarkdownRemark.html,
        }}
      ></div>
    </>
  )
}
export default Writing
