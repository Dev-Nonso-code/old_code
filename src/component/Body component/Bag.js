import axios from "axios"
import React from 'react'
import { useState, useEffect } from 'react'
import './Fecth.css'
import { Nav } from '../Navbar component/Nav'

const Bag = () => {
  useEffect(() => {
    getData()
    console.log("Hello World")

  }, [])

  // const endpoint = "https://jsonplaceholder.typicode.com/users"
  const endpoint2 = "https://api.github.com/users"
  const [isloading, setisloasding] = useState(false)

  const [data, setdata] = useState([])
  const getData = () => {
    axios.get(endpoint2)
      .then((Response) => {
        const datas = (Response.data)
        console.log(datas);
        setisloasding(true)
        setdata(Response.data)
        // alert("RAM & GOAT CHOOSE ONE")
      })
      .catch((err) => {
        console.log(err)
      })

  }
  return (
    <>
    <Nav />
      <div id="allbody">

     
      <h1>Fecth</h1>
      <button onClick={getData} className="btn btn-info">Get Data</button>
     
      {!isloading ?
       <h1 id="load"><img src={require('..//..//img/logo.jpg')} alt="" />
       <p className="text-center">LOADING PLS WAIT...</p>
      </h1> : data.map((item, index) => (
       
        <div id="body" className="text-light text-center" key={index}>
          
          {/* <span>{item.id}</span>
          <h1>{item.login + 1}</h1> */}
          <img src={item.avatar_url} alt="" className="p-2" />
          {/* <img src={item.subscriptions_url} alt="" /> */}
          {/* <h1>{item.subscriptions_url}</h1> */}
         
        </div>
      ))}
       </div>
    </>
  )
}

export default Bag