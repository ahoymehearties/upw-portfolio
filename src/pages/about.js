import React from "react"

import Layout from "../components/Layout"
import Head from "../components/Head"

const About = () => {
  return (
    <Layout>
      <Head title="About" />
      <div className="mt-12 m-auto">
        <h1>About</h1>
        Built with:
        <p>About page</p>
      </div>
    </Layout>
  )
}

export default About
