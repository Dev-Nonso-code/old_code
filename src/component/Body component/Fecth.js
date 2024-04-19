import axios from "axios"
// import { name } from "ejs"
import { useState, useEffect, } from "react"
import './Fecth.css'

import { Nav } from '../Navbar component/Nav'
import { useNavigate } from "react-router-dom"
// import hotEmitter from "webpack/hot/emitter.js";

const Fecth = () => {
  const navigate = useNavigate()
  let token = localStorage.token
  const firstname = localStorage.firstname
  const endpoint2 = "https://api.github.com/users"
  // const endpoint22 = "http://localhost:5100/log/signup"
  const endpoint3 = "http://localhost:5100/log/dashboard"
  const [isloading, setisloasding] = useState(false)

  useEffect(() => {
    getData()
    // console.log("Hello World")

  },)

  useEffect(() => {
     
    axios.get(endpoint3, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json"
      }  
    })
      .then((res) => {
        console.log(res);
      }).catch((err)=>{
        if (err) {
          localStorage.removeItem("token")
          navigate("/login")
        } 
      })
  },[navigate, token])

 

  // const endpoint = "https://jsonplaceholder.typicode.com/users"
  

  const [data, setdata] = useState([])
  const getData = () => {
    axios.get(endpoint2, data)
      .then((Response) => {
        // const datas = (Response.data)
        // console.log(datas);
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
        <h4>welcome {firstname}</h4>


        <h1>Fecth</h1>
        <button onClick={getData} className="btn btn-info">Get Data</button>

        {!isloading ?
          <h1 id="load"><img src={require('..//..//img/logo.jpg')} alt="" />
            <p className="text-center">LOADING PLS WAIT...</p>
          </h1> : data.map((item, index) => (

            <div id="body" className="text-light text-center border 
            border-2 border-primary m-2" key={index}>

              <span>{item.node_id}</span>
              {/* <h1>{data.firstname}</h1> */}
              <h1>{item.login + 1}</h1>
              {/* <h1>{data.message}</h1> */}
              <h1>{item.site_admin}</h1>
               <img src={item.avatar_url} alt="" />
              <div>{item.subscriptions_url}</div>
              <div>{item.organizations_url}</div>
              <div>{item.following_url}</div> 
              {/* <img src={item.subscriptions_url} alt="" /> */}
              {/* <h1>{item.subscriptions_url}</h1> */}

            </div>
          ))
        }
      </div>
    </>
  )
}

export default Fecth