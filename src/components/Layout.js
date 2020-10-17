import React from "react"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import "../styles/index.scss"

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div
        id="home"
        className="max-w-screen-xl mx-auto flex flex-col min-h-screen pt-24"
      >
        <div className="flex-grow">{children}</div>
      </div>
      <Footer />
    </>
  )
}

export default layout
