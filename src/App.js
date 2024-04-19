import Start from './Start';

import Button from './Button';
import Something from './Something';
import First from './component/Body component/First';
// import Game from './component/Body component/Game'
import './App.css';
import Fecth from './component/Body component/Fecth';
import Butotons from './component/Body component/Button';
import Todo from './component/Body component/Todo';
import Signup from './component/Body component/Signup';
import { useEffect, useRef, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Nav } from './component/Navbar component/Nav';
import Notfound from './component/Body component/Notfound';
import { useNavigate } from "react-router-dom"
import Details from './component/Body component/Details';
import Bag from './component/Body component/Bag';
import Products from './component/Body component/Products';
import Formikform from './component/Body component/Formikform';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, changeMyName, incrementByUser } from './redux/counter';
import Class from './component/Body component/Class';
import Post from './component/Body component/Post';
import Signin from './component/Body component/Signin';
import socketClient from 'socket.io-client'
import Chat from './component/Body component/Chat';
import Time from './Time'
import Alluser from './component/Body component/Allusers';
import Cloud from './component/Body component/Cloud';
// import { useRef } from 'react';


const App = () => {
  let token = localStorage.token
  let endpoint = "http://localhost:5100/"
  const socket = useRef(socketClient(endpoint))
  console.log(socket.current);
  // const [number, setnumber] = useState(0)
  let myNumber = useRef(0)
  let myHeader = useRef()
  useEffect(() => {
    myNumber.current = 9
    // let number = setnumber
  })
  // console.log(myNumber);

  const count = useSelector(state => state.counterReducer.count)
  let dispatch = useDispatch()

  // console.log(count)
  // console.log(incrementByUser);


  const sayHellos = (opo) => {
    alert(opo + "welcome to board")
    console.log(opo)


  }

  const sayHelloss = (onee) => {
    // let indexs = indexedDB
    alert(onee + "more inffo");
    console.log(onee)

  }

  const [allTodo, setallTodo] = useState([])
  let navigate = useNavigate()
  const addTodo = (newTodo) => {
    setallTodo([...allTodo, newTodo])
    console.log(allTodo)
    alert(newTodo)
    navigate("/Todo")

  }
  const changemyHeader = () => {
    console.log(myHeader.current.innerText);
    myHeader.current.innerText = "Hello Obasi Famly"
  }
  // console.log(myHeader);
  return (
    <>

      <Routes>
        <Route path='//Nav' element={<Nav />} />
        <Route path='/Increase' element={<div>
          <Nav />
          <div>
            <h1 ref={myHeader}>Hello Now</h1>
            <button onClick={changemyHeader}>change</button>
          </div>
          <h1>${count}</h1>
          <h1>{changeMyName}</h1>
          <button onClick={() => dispatch(increment())}
            className='btn btn-primary'>increment</button>
          {/* <button onClick={() => dispatch(changeMyName())} 
         className='btn btn-primary'>myName</button> */}

          <button onClick={() => dispatch(decrement())}
            className='btn btn-danger'>Decrease</button>
          <button onClick={() => dispatch(incrementByUser(3))}
            className='btn btn-warning'>users press</button>
        </div>} />
        <Route path='/' element={<First />} />
        {/* <Route path='/Increase' element={} /> */}
        <Route path='/Home' element={<Navigate to="/" />} />
        <Route path='/DashBord' element={<Start />} />
        <Route path='/Dash' element={<Post />} />
        <Route path='/Login' element={<Signin />} />
        <Route path='/users' element={<Alluser />} />
        <Route path='/class' element={<Class title="nonso" />} />
        <Route path='/About' element={<Something />} />
        <Route path='/Dashboard' element={token ? <Fecth className='btn btn-info' />
          : <Navigate to="/Login" />} />
        <Route path='/Bob' element={<Button />} />
        <Route path='/cloud' element={<Cloud />} />
        <Route path='/Boy' element={<Butotons />} />
        <Route path='/SingTodo' element={< Signup addTodo={addTodo} />} />
        <Route path='/Todo' element={< Todo allTodo={allTodo} />} />
        <Route path='/Chat' element={< Chat socket={socket.current} />} />

        <Route path='/About/:nonso' element={<Details />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/Products/Bag' element={<Bag />} />

        <Route path='Delets' element={< Butotons name="Delet" color="btn btn-warning" sayHellos={sayHellos} />} />
        <Route path='Edtes' element={< Butotons name="Edite" color="btn btn-danger" sayHellos={sayHellos} />} />
        <Route path='More' element={< Butotons name="Infos" color="btn btn-primary" sayHellos={sayHelloss} />} />
        <Route path='/Signup' element={<Formikform />} />
        <Route path='/Time' element={<Time />} />
        <Route path='*' element={<Notfound />} />
      </Routes>

      {/* < Butotons name="Edite" color="btn btn-danger" sayHellos={sayHellos}/>
      < Butotons name="Delet" color="btn btn-warning" sayHellos={sayHellos} />
      < Butotons name="Infos" color="btn btn-primary" sayHellos={sayHelloss}/> */}
      {/* <Game /> */}

    </>
  );
}

export default App;
