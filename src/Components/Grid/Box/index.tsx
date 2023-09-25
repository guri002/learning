import React from 'react'

const Box = ({
    title,
    description,
}: {
     title : string,
     description : string
}) => {
  return (
    <div>
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
  )
}

export default Box