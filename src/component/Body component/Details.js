import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
  let { nonso } = useParams()
  console.log(nonso);
  const items = (localStorage.getItem('writing'));
  return (
    <>
      <h1>
        welcomme to more details about
        <p>
          {nonso}
        </p>
      </h1>
      <h3>{items}</h3>
    </>
  )
}

export default Details