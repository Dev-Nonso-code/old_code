import React, { useState, useEffect } from 'react'
import './Chat.css';


function Chat({ socket }) {
    // let currentTime = localStorage.setItem
    // const [items, setItems] = useState([]);
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    const [message, setmessage] = useState();
    const [allchat, setallchat] = useState([]);
    const sendmessage = () => {
        console.log("im working");
        socket.emit('newmessage', message)
        console.log(message);
        localStorage.setItem('writing', message);
    }

    socket.on("receivemessage", (message) => {
        console.log(message);
        setallchat([...allchat, message])
    })
    useEffect(() => {
        setCurrentTime(new Date().toLocaleTimeString());
       
    }, []);
    const TiMe = new Date();
    const dateString = TiMe.toDateString([]);
    // useEffect(() => {

    //   }, [message]);



    return (

        <>
            {allchat.map(el => (
                <>
                    <div key={message} id='see' className='m-auto'>
                        <span>{currentTime}</span>
                        <h3 className='mr-3'>{el}</h3>
                        {/* <h6>{TiMe}</h6> */}
                        <h6>{dateString}</h6>
                        {/* <h3>{dateString}</h3> */}
                        {/* <h5>{socket.id}</h5> */}
                    </div>
                </>
            ))
            }
            <div id='form' className='m-auto w-100 fixed-bottom text-center bg-primary'>
                <div>
                    <input className='form-control w-75 ml-5 mt-2' type="text" name="" id=""
                        onChange={(e) => setmessage(e.target.value)} />
                </div>
                <button className='btn btn-primary mt-3' onClick={sendmessage}><i class="bi bi-send-fill">Send</i></button>
            </div>

        </>
    )
}

export default Chat
