import React from "react"

const HeadingTitle = ({ title, id }) => {
  return (
    <div id={id} className="flex justify-center py-20">
      <div className="text-center bg-orange-600 shadow-md">
        <h2 className="text-white text-4xl font-bold italic py-1 px-8 uppercase">
          {title}
        </h2>
      </div>
    </div>
  )
}

export default HeadingTitle
