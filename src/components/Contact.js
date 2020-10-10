import React, { useState } from "react"
import { navigate } from "gatsby-link"

// import HeadingTitle from './HeadingTitle'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Contact = () => {
  const [state, setState] = useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }
  return (
    <section id="contact" className="mt-20">
      <h1 className="text-center text-orange-600 text-4xl font-semibold underline pb-4">
        CONTACT ME
      </h1>
      {/* <HeadingTitle id="contact" title="contact" /> */}
      <div className="flex flex-wrap mx-3 mb-6 justify-center">
        <form
          className="w-full max-w-3xl"
          name="Contact-Portfolio"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <div className="w-full mb-6 md:mb-0">
            <p>
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="first-name"
              >
                Your name:
                <br />
                <input
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="first-name"
                  placeholder="Your Name"
                  type="text"
                  name="name"
                  required
                  onChange={handleChange}
                />
              </label>
            </p>
          </div>
          <p>
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="email"
            >
              Your email:
              <br />
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="email"
                name="email"
                id="email"
                required
                placeholder="Your Email"
                onChange={handleChange}
              />
            </label>
          </p>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Message
              </label>
              <textarea
                className=" no-resize appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                name="message"
                id="message"
                required
                onChange={handleChange}
              />
            </div>
          </div>

          <p className="flex justify-center">
            <button
              className="transition duration-500 ease-in-out w-screen shadow-sm bg-orange-500 hover:bg-orange-700 hover:shadow-lg focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Send
            </button>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact
