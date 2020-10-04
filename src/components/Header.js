import React, { useState } from "react"
import Link from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"

// import DarkModeToggle from "../components/DarkModeToggle"
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const mobileMenuHandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="header shadow-md">
      <nav className="flex items-center justify-between flex-wrap  p-6 max-w-screen-xl mx-auto">
        <div className="flex items-center flex-shrink-0 mr-6">
          <Link to="/">
            <div className="text-xl font-semibold">CYRUS ON THE INTERNET</div>
          </Link>
          <span className="font-semibold text-xl tracking-tight"></span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={mobileMenuHandler}
            className="flex items-center px-3 py-2 border rounded "
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={
            isOpen
              ? "transition duration-500 ease-in-out w-full block lg:flex lg:items-center lg:w-auto"
              : "lg:flex hidden"
          }
        >
          <div className="text-sm lg:flex-grow">
            <ul className="lg:flex lg:flex-row">
              <li>
                <AniLink
                  cover
                  bg="#da5e0c"
                  className="font-medium block mt-4 lg:inline-block lg:mt-0 hover:text-orange-400 mr-4"
                  activeClassName="text-orange-600"
                  to="/"
                >
                  Home
                </AniLink>
              </li>
              <li>
                {" "}
                <AniLink
                  cover
                  className="font-medium block mt-4 lg:inline-block lg:mt-0 hover:text-orange-400 mr-4"
                  activeClassName="text-orange-600"
                  to="/#writing"
                >
                  Writing
                </AniLink>
              </li>
              <li>
                {" "}
                <AniLink
                  cover
                  className="font-medium block mt-4 lg:inline-block lg:mt-0 hover:text-orange-400 mr-4"
                  activeClassName="text-orange-600"
                  to="/#voice"
                >
                  Voice{" "}
                </AniLink>
              </li>
              <li>
                {" "}
                <AniLink
                  cover
                  className="font-medium block mt-4 lg:inline-block lg:mt-0 hover:text-orange-400 mr-4"
                  activeClassName="text-orange-600"
                  to="/blog"
                >
                  Blog
                </AniLink>
              </li>

              <li>
                {" "}
                <AniLink
                  cover
                  className="font-medium block mt-4 lg:inline-block lg:mt-0 hover:text-orange-400 mr-4"
                  activeClassName="text-orange-600"
                  to="/#contact"
                >
                  Contact
                </AniLink>
              </li>
              <li> {/* <DarkModeToggle /> */}</li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="flex justify-end"></div>
    </header>
  )
}

export default Header
