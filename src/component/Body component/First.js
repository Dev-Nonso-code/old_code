import { useState } from 'react'

import Game from "./Game"
import './First.css'
import React from "react"
import { Nav } from '../Navbar component/Nav'
const GetName = () => {
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [nationaallty, setnationaallty] = useState("");
    const [mobile, setmobile] = useState("");
    const [email, setemail] = useState("");
    const [id, setid] = useState("")

    const [allStudent, setallStudent] = useState([
        { firstname: "Kule", lastname: "ololo", nationaallty: "Nigeria" },
        { firstname: "Koplo", lastname: "Tube", nationaallty: "Ghana" },
        { firstname: "Sola", lastname: "Oke", nationaallty: "China" },
        { firstname: "Mula", lastname: "Molo", nationaallty: "Nigeria" },
    ])

    const addStudent = (e) => {
        e.preventDefault()
        const data = { firstname, lastname, nationaallty, email, mobile, id }
        setallStudent([...allStudent, data])
        console.log(data)
        alert("SignUp Successfully")
    }
    let myName = "Nonso"
    let gender = "30"
    let nationallty = "Nigeria"
    // let allStudent = [
    //     { firstname: "Kule", lastname: "ololo" },
    //     { firstname: "Solo", lastname: "Dan" },
    //     { firstname: "Wale", lastname: "Wolo" },
    //     { firstname: "Obasi", lastname: "Wale" },
    // ]
    return (
        <>
        <Nav />
            <h1 className="{gender=='female'?
         'bg-danger':'bg-info'}" >Hello{myName}</h1>
            <h3>you are {gender} Old</h3>
            <h4>you  are from {nationallty} </h4>

            <form className="form-group text-center" key={email} method='POST'>
                <div className="d-block border border-2 border-info shadow text-center m-auto">
                    <div className="text-center">
                        <input onChange={(e) => setfirstname(e.target.value)} type="text" className="form-control w-50 m-2" placeholder="First Name" />
                    </div>
                    <div>
                        <input onChange={(e) => setlastname(e.target.value)} type="text" className="form-control w-50 m-2" placeholder="Last Name" />
                    </div>
                    <div>
                        <input onChange={(e) => setnationaallty(e.target.value)} type="text" placeholder="Nationalty" className="form-control w-50 m-2" />
                    </div>
                    <div>
                        <input onChange={(e) => setmobile(e.target.value)} type="number" placeholder="Mobile Number" className="form-control w-50 m-2" />
                    </div>
                    <div>
                        <input onChange={(e) => setemail(e.target.value)} type="email" placeholder="Email Adddress" className="form-control w-50 m-2" />
                    </div>
                    <div>
                        <h1 onChange={(e) => setid(e.target.value)}> {Math.floor(Math.random() * 9999999)} </h1>
                    </div>
                    <div className="text-center">
                        <button onClick={addStudent} className="btn btn-primary">Add User</button>
                    </div>
                </div>
            </form>
            <table className="table table-striped">
                <tr className="text-center">
                    <td>S/N</td>
                    <td>firstname</td>
                    <td>lastname</td>
                    <td>email</td>
                    <td>Mobile</td>
                    <td>Country</td>
                    <td className="">Action</td>
                </tr>
                {allStudent.map((item, index) => (
                    // <div className="d-flex p-3">
                    <tr key={email} className="boder border-info border-2 text-center mt-3">
                        <td>{index + 1}</td>
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td>{item.email}</td>
                        <td>{item.mobile}</td>
                        <td>{item.nationaallty}</td>
                        <td>
                            <button className="btn btn-warning bg-warning mx-2">Edit</button>
                            <button className="btn btn-danger bg-danger mx-2">Delete</button>
                        </td>
                    </tr>
                    // </div>
                ))}
            </table>
            <Game />
        </>
    )
}

export default GetName