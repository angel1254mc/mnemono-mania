import React from 'react'
import '../css/Heading1.css'
function Heading1({title, subheading}) {
  return (
    <div className="stretch-content">
        <h1 className="heading-1">{title}</h1>
        <p className="subheading-1">{subheading}</p>
        <hr className="horizontal-line-1"></hr>
    </div>
  )
}

export default Heading1