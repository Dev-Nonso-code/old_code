import { useState } from "react";
import { Nav } from "../Navbar component/Nav";

const Game = () => {
    const [myName, setmyName] = useState("Obasi")
    const [username, setusername] = useState("")
    
    const changeName = ()=>{
       
        console.log(myName);
        setmyName(username)
    // console.log(1)
    // setTimeout(() => {
    //     console.log(2)
    //     console.log(myName);
    // }, 3000);
    
    // console.log(3)
    
    }
    return ( 
    <>
    <Nav />
    <h1 className="m-3">{myName}</h1>
    <input type="text" onChange={(e)=>setusername(e.target.value)
    } className="form-control w-50" />
    <button onClick={changeName} className="btn btn-warning m-3">Change Name</button>
    {/* <button onClick={()=>setmyName("Chinonso")} className="btn btn-warning m-3">Change Name</button> */}
    </> 
    );
}
 
export default Game;