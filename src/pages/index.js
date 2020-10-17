import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import Link from "gatsby-plugin-transition-link"

import Head from "../components/Head"
import Contact from "../components/Contact"
import HeadingTitle from "../components/HeadingTitle"

import scrollTo from "gatsby-plugin-smoothscroll"

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
      allContentfulWriting {
        edges {
          node {
            slug
            title
            description
            featured
            category

            thumbnail {
              fluid(maxWidth: 1024, quality: 100) {
                src
              }
            }
          }
        }
      }
      allContentfulVoice {
        edges {
          node {
            slug
            title
            description
            featured
            category
            thumbnail {
              fluid(maxWidth: 1024, quality: 100) {
                src
              }
            }
          }
        }
      }
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            slug
            title
            featured
            description
            category
            publishedDate(formatString: "DD MMMM, YYYY")
            postBody {
              childMarkdownRemark {
                timeToRead
                excerpt
              }
            }
            thumbnail {
              fluid(maxWidth: 1024, quality: 100) {
                src
              }
            }
          }
        }
      }
    }
  `)

  const featuredPosts = []
  data.allContentfulVoice.edges.forEach(featured => {
    featured.node.featured && featuredPosts.push(featured.node)
  })
  data.allContentfulBlogPost.edges.forEach(featured => {
    featured.node.featured && featuredPosts.push(featured.node)
  })
  data.allContentfulWriting.edges.forEach(featured => {
    featured.node.featured && featuredPosts.push(featured.node)
  })

  return (
    <>
      <Head title="Home | Cyrus on the Internet" />
      <section className="px-4 mt-6 -mb-6">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <div className="flex flex-col h-full p-8 bg-gray-200 rounded shadow-md">
              <div className="md:flex">
                {/* avatar */}
                <div className="w-48 h-48 mx-auto md:mx-0">
                  <div className="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
                    <img
                      width="190"
                      height="160"
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
                  <h3 className="text-2xl font-heading text-gray-900 ">
                    {data.contentfulAboutMe.whatIdo}
                  </h3>
                </div>
              </div>
              <p className="max-w mt-auto mb-2 text-gray-700 leading-relaxed">
                {data.contentfulAboutMe.bio.bio}
              </p>
              {/* This is where you link your cv:
              Step 1. Comment or delete <Link> below*/}
              <Link
                onClick={() => scrollTo("#contact")}
                to="/#contact"
                role="button"
                className="text-center bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent hover:shadow-md rounded"
              >
                Contact Me
              </Link>
              {/* Step 2. Uncomment link below, 
              add file name to href, 
              it must be placed in the STATIC folder in the root of the project,
              There is curently one file and you can delete it put your file in there and rebuild page, 
              you can trigger the rebuild from netlify, but it should trigger a build when you 'push' on the master branch by adding the file */}
              {/* <Link
                href="/resume.pdf"
                download
                role="button"
                className="text-center bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent hover:shadow-md rounded"
              >
                Contact Me
              </Link> */}
            </div>
          </div>

          {/* featured container */}
          <div className="w-full lg:w-1/2 px-4 mt-8 lg:m-0">
            <div className="flex flex-wrap lg:h-full justify-center">
              {/* item side1*/}
              <div className="mb-6 md:mb-3">
                <HeadingTitle textSize="text-2xl" title="featured" />
              </div>
              {/* featured*/}
              {featuredPosts.slice("0", "2").map((featured, index) => {
                const cls = index === 0 ? "mb-4" : ""
                return (
                  <div
                    key={featured.slug}
                    className={`w-full rounded-md shadow-md overflow-hidden mx-4 h-auto ${cls}`}
                  >
                    <AniLink
                      cover
                      to={`/${featured.category}/${featured.slug}`}
                    >
                      <div
                        className="flex items-end justify-end h-48 w-full bg-cover"
                        style={{
                          backgroundImage: `url(${featured.thumbnail.fluid.src})`,
                        }}
                      ></div>
                    </AniLink>
                    <div className="px-5 py-3">
                      <h3 className="text-gray-700 uppercase">
                        {featured.title}
                      </h3>
                      {featured.description && (
                        <span className="text-gray-600 mt-2">
                          {featured.description}
                        </span>
                      )}
                    </div>
                  </div>
                )
              })}
              {/* featured*/}
            </div>
          </div>
        </div>
      </section>
      {/* writing section */}
      <div id="writing" className="flex justify-center py-20">
        <HeadingTitle textSize="text-4xl" title="writing" />
      </div>
      <section className="px-4 -my-8">
        <div className="flex -mx-4">
          <div className="w-screen px-4 mb-8 lg:mb-0">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
              {/* item */}
              {data.allContentfulWriting.edges.map(post => {
                return (
                  <AniLink
                    key={post.node.slug}
                    cover
                    to={`/writing/${post.node.slug}`}
                  >
                    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                      <div
                        className="flex items-end justify-end h-56 w-full bg-cover"
                        style={{
                          backgroundImage: `url(${post.node.thumbnail.fluid.src})`,
                        }}
                      ></div>
                      <div className="px-5 py-3">
                        <h3 className="text-gray-700 uppercase">
                          {post.node.title}
                        </h3>
                        {post.node.description && (
                          <span className="text-gray-500 mt-2">
                            {post.node.description}
                          </span>
                        )}
                      </div>
                    </div>
                  </AniLink>
                )
              })}
              {/* item */}
            </div>
          </div>
        </div>
      </section>
      {/* writing section end*/}
      {/* voice section */}
      <div id="voice" className="flex justify-center py-20">
        <HeadingTitle textSize="text-4xl" title="voice" />
      </div>
      <section className="px-4 -my-6">
        {/* embeds */}
        <div className="videoWrapper mb-2">
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

        {/* soundcloud */}
        {/* embed */}

        <div className="flex -mx-4">
          <div className="w-screen px-4 mb-8 lg:mb-0">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
              {/* item */}
              {data.allContentfulVoice.edges.map(post => {
                return (
                  <AniLink
                    key={post.node.slug}
                    cover
                    to={`/voice/${post.node.slug}`}
                  >
                    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                      {post.node.thumbnail && (
                        <div
                          className="flex items-end justify-end h-56 w-full bg-cover"
                          style={{
                            backgroundImage: `url(${post.node.thumbnail.fluid.src})`,
                          }}
                        ></div>
                      )}
                      <div className="px-5 py-3">
                        <h3 className="text-gray-700 uppercase">
                          {post.node.title}
                        </h3>
                        {post.node.description && (
                          <span className="text-gray-500 mt-2">
                            {post.node.description}
                          </span>
                        )}
                      </div>
                    </div>
                  </AniLink>
                )
              })}
              {/* item */}
            </div>
          </div>
        </div>
      </section>
      {/* voice section end*/}
      <Contact />
    </>
  )
}
export default IndexPage
