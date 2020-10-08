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
        }
      }
    }
  }
`

const Voice = props => {
  return (
    <>
      <Head title={props.data.contentfulVoice.title} />
      {/* banner */}
      {/* <div
        className="bg-cover bg-center h-auto text-white py-24 px-10 object-fit flex bg-gradient-to-r from-black"
        style={{
          background: `linear-gradient: (90deg, rgba(246,246,246,0.7063200280112045) 0%, rgba(0,0,0,0.5298494397759104) 51%, rgba(5,5,5,1) 100%), url(${props.data.contentfulVoice.thumbnail.fluid.src}) `,
        }}
      >
        <div className="w-1/2"></div>
        <div className="md:w-1/2">
          <p className="font-bold text-sm uppercase">Services</p>
          <p className="text-3xl font-bold">Multimedia products</p>
          <p className="text-2xl mb-10 leading-none">
            Atractive designs for your brand!
          </p>
          <a
            href="#"
            className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
          >
            Contact us
          </a>
        </div>
      </div> */}
      {/* banner */}
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
              <span>{props.data.contentfulVoice.position}</span>
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
