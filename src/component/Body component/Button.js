// import React from 'react'


const Button = ({ name, color, sayHellos }) => {
  console.log(color)

  

  return (
    <>
      <button onClick={() => sayHellos(666)} className={color} >{name}</button>
    </>
  )
}

export default Button