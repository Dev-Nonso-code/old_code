import React from "react";
import { useState } from "react";
import axios from "axios";
// import './Post.css'
import { useNavigate } from "react-router-dom"
// import Signup from './Signup';

// const endpoint = "https://localhost:9000/users/signup"
const Post = () => {
  const [firstname, setfirstname] = useState("firstname");
  const [lastname, setlastname] = useState("lastname");
  const [password, setpassword] = useState("password");
  // const [mobile, setmobile] = useState("");
  const [email, setemail] = useState("email");

  const userDetails = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password,
    // mobile: mobile,
  };

  const endpoint = "http://localhost:5100/log/signup";
  let navigate = useNavigate()

  const Signup = (e) => {
    // let userDetails = { firstname, lastname, password, email, mobile };
    e.preventDefault();

    // const data = { firstname, lastname, password, email, mobile }
    // setallStudent([...allStudent, data])
    console.log(userDetails);
    alert(userDetails.firstname);

    axios
      .post(endpoint, userDetails)
      .then((response) => {
        console.log(response.data);
        alert(response.message);
        //   alert(response)
        alert("signup went through");
        navigate("/dashboard")
      })
      .catch((err) => {
        console.log(err);
        alert(userDetails);
        alert(err);
        alert("ssignup faild");
      });
  };

  return (
    <>
      <div id="contain" className="d-block border border-2 border-info shadow-primary">
      <div className="col-9 shadow-bg mx-auto ">
        <form method="POST" typeof="submit" className="form-group ">

          {/* <div>
                        <input onChange={(e) => setemail(e.target.value)} type="email" placeholder="Email Adddress" className="form-control w-50 m-2" />
                    </div> */}

          <div className="text-center">
            <input
              onChange={(e) => setfirstname(e.target.value)}
              type="text"
              className="form-control w-50 m-2"
              placeholder="First Name"
            />
          </div>
          <div>
            <input
              onChange={(e) => setlastname(e.target.value)}
              type="text"
              className="form-control w-50 m-2"
              placeholder="Last Name"
            />
          </div>
          <div>
            <input
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              placeholder="password"
              className="form-control w-50 m-2"
            />
          </div>
          <div>
            <input
              onChange={(e) => setemail(e.target.value)}
              placeholder="Email"
              className="form-control w-50 m-2"
            />
          </div>
          <div>
            {/* <input
              onChange={(e) => setmobile(e.target.value)}
              type="number"
              placeholder="Mobile Number"
              className="form-control w-50 m-2"
            /> */}
          </div>

          {/* <div>
                        <h1 onChange={(e) => setid(e.target.value)}> {Math.floor(Math.random() * 9999999)} </h1>
                    </div> */}
          <div className="text-center">
            <button onClick={Signup} className="btn btn-primary">
              Add User
            </button>
          </div>

        </form>
</div>
      </div>
      {/* <div>
                <Signup />
            </div> */}
    </>
  );
};

export default Post;
