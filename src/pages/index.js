import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"
import Contact from "../components/Contact"

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
      allContentfulWriting(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            slug
            title
            description
            publishedDate(formatString: "DD MMMM, YYYY")
            thumbnail {
              fluid {
                src
              }
            }
          }
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
                <Link
                  to="/#contact"
                  role="button"
                  className="text-center bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded"
                >
                  Contact Me
                </Link>
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
                <div className="w-full rounded-md shadow-md overflow-hidden mx-4 mb-8 lg:mb-auto">
                  <div
                    className="flex items-end justify-end h-56 w-full bg-cover"
                    style={{
                      backgroundImage: `url(https://pbs.twimg.com/profile_banners/115216851/1600357930/1500x500)`,
                    }}
                  ></div>
                  <div className="px-5 py-3">
                    <h3 className="text-gray-700 uppercase">
                      Hades - Voice Acting
                    </h3>
                    <span className="text-gray-500 mt-2">
                      Vocal Role(s): Ares, Dionysus, Theseus
                    </span>
                  </div>
                </div>
                {/* item side1*/}
                {/* item side2*/}
                <div className="w-full rounded-md shadow-md overflow-hidden mx-4">
                  <div
                    className="flex items-end justify-end h-56 w-full bg-cover"
                    style={{
                      backgroundImage: `url(https://images.ctfassets.net/5owu3y35gz1g/7Kvhe2mHksgq4Su6kuY2oK/71902d1f38828cc3da069617bb86c0cf/Pyre_Wallpaper_01.jpg?w=1920&q=80)`,
                    }}
                  ></div>
                  <div className="px-5 py-3">
                    <h3 className="text-gray-700 uppercase">
                      Pyre Voice Acting
                    </h3>
                    <span className="text-gray-500 mt-2">Supergiant Games</span>
                  </div>
                </div>
                {/* item side2*/}
              </div>
            </div>
          </div>
        </section>
        {/* writing section */}
        <section id="writing" className="md:py-12 px-4">
          <h2 className="text-center text-orange-600 text-4xl underline pb-4">
            WRITING
          </h2>

          <div className="flex -mx-4">
            <div className="w-screen px-4 mb-8 lg:mb-0">
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                {/* item */}
                {data.allContentfulWriting.edges.map(post => {
                  return (
                    <div key={post.node.slug} className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                      <Link to={`/writing/${post.node.slug}`}>
                        <div
                          className="flex items-end justify-end h-56 w-full bg-cover"
                          style={{
                            backgroundImage: `url(${post.node.thumbnail.fluid.src})`,
                          }}
                        ></div>
                      </Link>
                      <div className="px-5 py-3">
                        <h3 className="text-gray-700 uppercase">
                          {post.node.title}
                        </h3>
                        <span className="text-gray-500 mt-2">
                          {post.node.description && post.node.description}
                        </span>
                      </div>
                    </div>
                  )
                })}
                {/* item */}
              </div>
            </div>
          </div>
        </section>
        {/* writing section end*/}
        {/* voice section */}
        <section id="voice" className="md:py-12 px-4">
          <h2 className="text-center text-orange-600 text-4xl underline pb-4">
            VOICE
          </h2>

          {/* embed */}
          <div className="videoWrapper">
            <iframe
              title="voice showcase"
              width="1280"
              height="720"
              src="https://www.youtube.com/embed/C51iwauiseo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          {/* soundcloud */}
          <iframe
            title="soundcloud demo reel"
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/233727591&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
          <div className="soundcloudTest">
            <a
              href="https://soundcloud.com/thecyrusvoice"
              title="TheCyrusVoice"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              TheCyrusVoice
            </a>{" "}
            ·{" "}
            <a
              href="https://soundcloud.com/thecyrusvoice/games-demo-2015"
              title="Games Demo 2015"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              Games Demo 2015
            </a>
          </div>
          {/* soundcloud */}
          {/* embed */}
          <div className="flex -mx-4">
            <div className="w-screen px-4 mb-8 lg:mb-0">
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                {/* item */}
                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                  <div
                    className="flex items-end justify-end h-56 w-full bg-cover"
                    style={{
                      backgroundImage: `url(https://images.ctfassets.net/5owu3y35gz1g/7Kvhe2mHksgq4Su6kuY2oK/71902d1f38828cc3da069617bb86c0cf/Pyre_Wallpaper_01.jpg?w=1920&q=80)`,
                    }}
                  ></div>
                  <div className="px-5 py-3">
                    <h3 className="text-gray-700 uppercase">
                      Pyre Voice Acting
                    </h3>
                    <span className="text-gray-500 mt-2">Supergiant Games</span>
                  </div>
                </div>
                {/* item */} {/* item */}
                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                  <div
                    className="flex items-end justify-end h-56 w-full bg-cover"
                    style={{
                      backgroundImage: `url(https://i2.wp.com/www.earplay.com/wp-content/uploads/2018/06/JWbillboard-large-1.jpg?resize=1200%2C600&ssl=1)`,
                    }}
                  ></div>
                  <div className="px-5 py-3">
                    <h3 className="text-gray-700 uppercase">
                      Jurasic World Revealed
                    </h3>
                    <span className="text-gray-500 mt-2">Supergiant Games</span>
                  </div>
                </div>
                {/* item */}
                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                  <div
                    className="flex items-end justify-end h-56 w-full bg-cover"
                    style={{
                      backgroundImage: `url(http://cyrusontheinternet.com/img/portfolio/kelvin.png)`,
                    }}
                  ></div>
                  <div className="px-5 py-3">
                    <h3 className="text-gray-700 uppercase">
                      KELVIN AND THE INFAMOUS MACHINE
                    </h3>
                    <span className="text-gray-500 mt-2">Supergiant Games</span>
                  </div>
                </div>
                {/* item */}
                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                  <div
                    className="flex items-end justify-end h-56 w-full bg-cover"
                    style={{
                      backgroundImage: `url(https://pbs.twimg.com/profile_banners/115216851/1600357930/1500x500)`,
                    }}
                  ></div>
                  <div className="px-5 py-3">
                    <h3 className="text-gray-700 uppercase">Hades</h3>
                    <span className="text-gray-500 mt-2">Supergiant Games</span>
                  </div>
                </div>
                {/* item */}
                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                  <div
                    className="flex items-end justify-end h-56 w-full bg-cover"
                    style={{
                      backgroundImage: `url(https://images.ctfassets.net/5owu3y35gz1g/7Kvhe2mHksgq4Su6kuY2oK/71902d1f38828cc3da069617bb86c0cf/Pyre_Wallpaper_01.jpg?w=1920&q=80)`,
                    }}
                  ></div>
                  <div className="px-5 py-3">
                    <h3 className="text-gray-700 uppercase">
                      Pyre Voice Acting
                    </h3>
                    <span className="text-gray-500 mt-2">Supergiant Games</span>
                  </div>
                </div>
                {/* item */}
                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                  <div
                    className="flex items-end justify-end h-56 w-full bg-cover"
                    style={{
                      backgroundImage: `url(https://images.ctfassets.net/5owu3y35gz1g/7Kvhe2mHksgq4Su6kuY2oK/71902d1f38828cc3da069617bb86c0cf/Pyre_Wallpaper_01.jpg?w=1920&q=80)`,
                    }}
                  ></div>
                  <div className="px-5 py-3">
                    <h3 className="text-gray-700 uppercase">
                      Pyre Voice Acting
                    </h3>
                    <span className="text-gray-500 mt-2">Supergiant Games</span>
                  </div>
                </div>
                {/* item */}
                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                  <div
                    className="flex items-end justify-end h-56 w-full bg-cover"
                    style={{
                      backgroundImage: `url(https://images.ctfassets.net/5owu3y35gz1g/7Kvhe2mHksgq4Su6kuY2oK/71902d1f38828cc3da069617bb86c0cf/Pyre_Wallpaper_01.jpg?w=1920&q=80)`,
                    }}
                  ></div>
                  <div className="px-5 py-3">
                    <h3 className="text-gray-700 uppercase">
                      Pyre Voice Acting
                    </h3>
                    <span className="text-gray-500 mt-2">Supergiant Games</span>
                  </div>
                </div>
                {/* item */}
                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                  <div
                    className="flex items-end justify-end h-56 w-full bg-cover"
                    style={{
                      backgroundImage: `url(https://images.ctfassets.net/5owu3y35gz1g/7Kvhe2mHksgq4Su6kuY2oK/71902d1f38828cc3da069617bb86c0cf/Pyre_Wallpaper_01.jpg?w=1920&q=80)`,
                    }}
                  ></div>
                  <div className="px-5 py-3">
                    <h3 className="text-gray-700 uppercase">
                      Pyre Voice Acting
                    </h3>
                    <span className="text-gray-500 mt-2">Supergiant Games</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* voice section end*/}
        <Contact />
      </Layout>
    </div>
  )
}
export default IndexPage
