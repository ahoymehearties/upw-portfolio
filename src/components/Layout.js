import React from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"

import "../styles/index.scss"
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
  
}
const layout = props => {
  return (
    <>
      <Header />
      <div className="max-w-screen-xl mx-auto flex flex-col min-h-screen">
        <div className="flex-grow">{props.children}</div>
        <Footer />
      </div>
    </>
  )
}

export default layout
