import React from "react"

const HeadingTitle = ({ title }) => {
  return (
    <div className="text-center bg-orange-600 my-16">
      <h2 className="text-white text-4xl font-bold underline py-2 my-2 uppercase">{title}</h2>
    </div>
  )
}

export default HeadingTitle
