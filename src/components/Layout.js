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
      {/* hero test */}
      {/* hero test */}
      {/* <div
        class="py-20 h-64 w-full  pt-12 md:pt-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(https://www.nintendoenthusiast.com/wp-content/uploads/2020/08/hadesswitch.jpg)`,
          backgroundColor: "#fff",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div> */}
      {/* hero test */}
      {/* hero test */}
      <div className="max-w-screen-xl mx-auto flex flex-col min-h-screen">
        <div className="flex-grow">{props.children}</div>
        <Footer />
      </div>
    </>
  )
}

export default layout
