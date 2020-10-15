import React from "react"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import "../styles/index.scss"
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}
const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div
        id="home"
        className="max-w-screen-xl mx-auto flex flex-col min-h-screen pt-24 pb-6"
      >
        <div>{children}</div>
      </div>
      <Footer />
    </>
  )
}

export default layout
