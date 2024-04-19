// import React from 'react'
// import {useState} from 'react'

// const Something = ()=>{
//     const [student, setStudet] = useState ("Nonso")
//     const [allStudent, setallStudent] = useState(["Danile", "Smauel", "Nonso"])
//     const [student, setstudent] = useState("")
//     const [allStudent, setallStudent] = useState(["Daniel", "Samuel", "Victor", "Micheal"])
//     const [check, setcheck] = useState(true)
//     let arr1 = ["Who", "When", "How", "Which", "Where"]
//     let arr2 = ["Since", "1902", ...arr1]
//     console.log(arr2);

//     return(
//         <div>
//             {
//                 allStudent.map((el, i)=>(
//                     <ul>
//                         <li>{i+i}.{el}</li>
//                     </ul>
//                 ))
//             }
//             <h1>{student}</h1>
//             <h1 style={{fontSize: "50px", fontFamily: "cursive"}}>This is the {Math.floor(Math.random()*9999)} start component</h1>
//             <button onClick={()=>setStudet("GOD")} className='btn btn-info'>change</button>
//             <h1 className='text-info'>i want to make a requesst</h1>
//         </div>
//     )
// }

import { useState } from "react";
import { Nav } from "./component/Navbar component/Nav";
// import Something from './Something'
// import './Start.css'
const Something = () => {
  const [student, setstudent] = useState("");
  const [allStudent, setallStudent] = useState([
    "Daniel",
    "Samuel",
    "Victor",
    "Micheal",
  ]);
  const [check, setcheck] = useState(true);
  let arr1 = ["Who", "When", "How", "Which", "Where"];
  let arr2 = ["Since", "1902", ...arr1];
  console.log(arr2);
  const changeStud = () => {
    console.log(student);
  };
  const addStudents = () => {
    setallStudent([...allStudent, student]);
  };
  const toggleTable = () => {
    setcheck(!check);
  };
  const myStyle = {
    backgroundColor: "tomato",
    textAlign: "center",
  };
  return (
    <>
      <Nav />
      {/* <Something />
            <Something /> */}
      <div>
        <input onChange={(e) => setstudent(e.target.value)} type="text" />
        <button onClick={addStudents}>Add stud</button>
      </div>
      <div>
        {check === true ? (
          allStudent.map((el, i) => (
            <div
              key={i}
              className="border border-rounded border-2 border-primary m-2"
            >
              <ul className="d-flex justify-content-around">
                <li>
                  {i + 1}.{el}
                </li>
                <dv>
                  <button className="btn btn-info ml-4 mt-2 m-3"> Edite</button>
                  <button className="btn btn-primary ml-4 mt-2 m-3">
                    {" "}
                    Delet
                  </button>
                </dv>
              </ul>
            </div>
          ))
        ) : (
          <h1>Switch check to true</h1>
        )}
        <button onClick={toggleTable}>
          {check ? "Hide Table" : "Show Table"}
        </button>
        {/* {
                    allStudent.map((el, i)=>(
                        <ul>
                            <li>{i+1}.{el}</li>
                        </ul>
                    ))
                } */}
        <h1>{student}</h1>
        {/* <button onClick={()=>setstudent("Samuel")}>Change student</button> */}
        <button onClick={changeStud}>Change student</button>
        <h1 style={{ fontSize: "50px", fontFamily: "cursive" }}>
          This is the {Math.floor(Math.random() * 9999999)} start component
        </h1>
        <h1 style={myStyle}>Lorem ipsum dolor sit.</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <i className="bi bi-3-circle fs-1 text-danger"></i>
        <img src={require("./img/logo.jpg")} alt="" />
        <button className="mybtn">Click me</button>
      </div>
      <div>
        <h1>Lorem, ipsum dolor.</h1>
      </div>
      {/* <Something /> */}
    </>
  );
};

export default Something;
