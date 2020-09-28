import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAboutMe {
        name
        whatIdo
        image {
          fluid {
            src
          }
        }
        bio {
          bio
        }
      }
    }
  `)

  return (
    <div>
      <Layout>
        <Head title="Home" />
        <section className="py-12 px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
              {/* About title*/}
              <div className="text-left">
                <h3>About Me:</h3>
              </div>
              {/* About*/}

              <div className="flex flex-col h-full p-8 bg-gray-200 rounded">
                <div className="md:flex">
                  {/* avatar */}
                  <div className="w-48 h-48 mx-auto md:mx-0">
                    <div className="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
                      <img
                        src={data.contentfulAboutMe.image.fluid.src}
                        alt="lovely avatar"
                        className="object-cover object-center w-full h-full visible group-hover:hidden"
                      />
                    </div>
                  </div>
                  {/* avatar */}
                  <div className="md:w-3/4 md:pl-6 pb-2 text-center md:text-left align-middle">
                    <h2 className="text-5xl font-heading pb-2">
                      {data.contentfulAboutMe.name}
                    </h2>
                    <h3 className="text-2xl font-heading ">
                      {data.contentfulAboutMe.whatIdo}
                    </h3>
                  </div>
                </div>
                <p className="max-w mt-auto mb-2 text-gray-500 leading-relaxed">
                  {data.contentfulAboutMe.bio.bio}
                </p>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Contact Me
                </button>
              </div>
            </div>

            {/* featured container */}
            <div className="w-full lg:w-1/2 px-4 mt-8 lg:m-0">
              {/* Featured title*/}
              <div className="text-center mt-6 mb-4 lg:m-0">
                <h3>Featured:</h3>
              </div>

              {/* Featured title*/}
              <div className="flex flex-wrap lg:h-full">
                {/* item side1*/}
                <div class="w-full rounded-md shadow-md overflow-hidden mx-4 mb-8 lg:mb-auto">
                  <div
                    class="flex items-end justify-end h-56 w-full bg-cover"
                    style={{
                      backgroundImage: `url(https://pbs.twimg.com/profile_banners/115216851/1600357930/1500x500)`,
                    }}
                  ></div>
                  <div class="px-5 py-3">
                    <h3 class="text-gray-700 uppercase">
                      Hades - Voice Acting
                    </h3>
                    <span class="text-gray-500 mt-2">
                      Vocal Role(s): Ares, Dionysus, Theseus
                    </span>
                  </div>
                </div>
                {/* item side1*/}
                {/* item side2*/}
                <div class="w-full rounded-md shadow-md overflow-hidden mx-4">
                  <div
                    class="flex items-end justify-end h-56 w-full bg-cover"
                    style={{
                      backgroundImage: `url(https://images.ctfassets.net/5owu3y35gz1g/7Kvhe2mHksgq4Su6kuY2oK/71902d1f38828cc3da069617bb86c0cf/Pyre_Wallpaper_01.jpg?w=1920&q=80)`,
                    }}
                  ></div>
                  <div class="px-5 py-3">
                    <h3 class="text-gray-700 uppercase">Pyre Voice Acting</h3>
                    <span class="text-gray-500 mt-2">Supergiant Games</span>
                  </div>
                </div>
                {/* item side2*/}
              </div>
            </div>
          </div>
        </section>
        <section>
          {/* item */}
          <div class="w-full max-w-sm rounded-md shadow-md overflow-hidden">
            <div
              class="flex items-end justify-end h-56 w-full bg-cover"
              style={{
                backgroundImage: `url(https://images.ctfassets.net/5owu3y35gz1g/7Kvhe2mHksgq4Su6kuY2oK/71902d1f38828cc3da069617bb86c0cf/Pyre_Wallpaper_01.jpg?w=1920&q=80)`,
              }}
            ></div>
            <div class="px-5 py-3">
              <h3 class="text-gray-700 uppercase">Pyre Voice Acting</h3>
              <span class="text-gray-500 mt-2">Supergiant Games</span>
            </div>
          </div>
          {/* item */}
        </section>
      </Layout>
    </div>
  )
}
export default IndexPage
