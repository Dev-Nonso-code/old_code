// import React from 'react'
// import { useState } from 'react'
// import axios from "axios";
// const endpoint = "https://localhost:9000/users/signup"
// const Post = ()=> {
//     const [firstname, setfirstname] = useState("");
//     const [lastname, setlastname] = useState("");
//     const [password, setpassword] = useState("");
//     const [mobile, setmobile] = useState("");
//     const [email, setemail] = useState("");
//     const addStudent = (e) => {
//         e.preventDefault()
//         const data = { firstname, lastname, password, email, mobile }
//         // setallStudent([...allStudent, data])
//         console.log(data)
//         alert("SignUp Successfully")
//         axios
//         .post(endpoint, data)
//         .then((res) => {
//           console.log(res.data);
//           alert(res);
//           localStorage.setItem("token", res.data.token);
//         })
//         .catch((err) => {
//           console.log(err);
//           alert(err);
//         });
//     }
//   return (
//     <>
//      <form className="form-group text-center" key={email} method='POST'>
//                 <div className="d-block border border-2 border-info shadow text-center m-auto">
//                 {/* <div>
//                         <input onChange={(e) => setemail(e.target.value)} type="email" placeholder="Email Adddress" className="form-control w-50 m-2" />
//                     </div> */}
//                     <div className="text-center">
//                         <input onChange={(e) => setfirstname(e.target.value)} type="text" className="form-control w-50 m-2" placeholder="First Name" />
//                     </div>
//                     <div>
//                         <input onChange={(e) => setlastname(e.target.value)} type="text" className="form-control w-50 m-2" placeholder="Last Name" />
//                     </div>
//                     <div>
//                         <input onChange={(e) => setpassword(e.target.value)} type="password" placeholder="password" className="form-control w-50 m-2" />
//                     </div>
//                     <div>
//                         <input onChange={(e) => setemail(e.target.value)} type='email' placeholder='Email' className="form-control w-50 m-2"/>
//                     </div>
//                     <div>
//                         <input onChange={(e) => setmobile(e.target.value)} type="number" placeholder="Mobile Number" className="form-control w-50 m-2" />
//                     </div>
//                     {/* <div>
//                         <h1 onChange={(e) => setid(e.target.value)}> {Math.floor(Math.random() * 9999999)} </h1>
//                     </div> */}
//                     <div className="text-center">
//                         <button onClick={addStudent} className="btn btn-primary">Add User</button>
//                     </div>
//                 </div>
//             </form>
//     </>
//   )
// }
// export default Post
"use strict";