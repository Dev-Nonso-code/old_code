import React from 'react'
import './Todo.css'
import { Nav } from '../Navbar component/Nav'
// import  name from './Button'
// import { name } from 'ejs'

const Todo = ({ allTodo  }) => {
  console.log(allTodo)
  let name = 'Info'
  let names = 'Get'
  let colors = "btn btn-success"
  let  color="btn btn-info"

  const sayHelloss = (onee) => {
    alert(onee + "more inffo")
    console.log(name)
    
  }

  const sayHellos = (opo) => {
    alert(opo + "welcome to board")
    console.log(opo)

   
  }
  
  return (
    <>
    <Nav />
      {allTodo.map((todo, index) => (
        <div id='bodyz' className='text-center'>
          <h1>{todo}</h1>
          <p>{index +1}</p>
          <img src={require('..//..//img/logo.jpg')} alt="" />
          <div>

          <button onClick={() => sayHelloss(666)} className={color} >{name} </button>
          <button onClick={() => sayHellos(666)} className={colors} >{names} </button>

          
          </div>
          
        </div>
        
      ))}

    </>
  )
}

export default Todo