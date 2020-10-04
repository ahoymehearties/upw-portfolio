import React from "react"
import Link from "gatsby-plugin-transition-link"

import Head from "../components/Head"

const NotFound = () => {
  return (
    <>
      <Head title="404" />
      <main className="mt-2">
        <h1>Page not found</h1>
        <p>
          <Link to="/">Take me Back!</Link>
        </p>
      </main>
    </>
  )
}

export default NotFound
