import React from "react"
import Link from "gatsby-plugin-transition-link"

import Head from "../components/Head"
import HeadingTitle from "../components/HeadingTitle"

const NotFound = () => {
  return (
    <>
      <Head title="404" />
      <div className="flex flex-col w-auto">
        <div className="py-12 ">
          <HeadingTitle textSize="text-3xl" title="Page not found" />
        </div>
        <button className="text-2xl text-white rounded bg-gray-700 hover:bg-gray-600 transition ease-in-out duration-500">
          <Link to="/">Take me Back!</Link>
        </button>
      </div>
    </>
  )
}

export default NotFound
