import React from "react"

const HeadingTitle = ({ title, id, textSize }) => {
  return (
    <div id={id} className="text-center bg-orange-600 shadow-md">
      <h2
        className={`${textSize} text-white font-bold italic py-1 px-8 uppercase`}
      >
        {title}
      </h2>
    </div>
  )
}

export default HeadingTitle
