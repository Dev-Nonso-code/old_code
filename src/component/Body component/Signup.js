// import React, { useState } from 'react'
import { useState } from "react"
import { Nav } from "../Navbar component/Nav"




const Signup = ({ addTodo }) => {
  
  const [newTodo, setnewTodo] = useState([])


  

  return (
    <>
    <Nav />
      <h1> ADD TO DO </h1>
      <input type="text" onChange={(e) => (setnewTodo(e.target.value))}
        className="my-2 form-control w-50" placeholder="Place your ToDo" />
      <button onClick={() => addTodo(newTodo)}
        className="btn btn-primary m-5 w-75">addTodo<br /></button>
        
    </>
  )
}

export default Signup