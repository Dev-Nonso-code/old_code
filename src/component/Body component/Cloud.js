import React, { useState } from 'react'
import axios from 'axios';

const Cloud = () => {
    const endpoint = "http://localhost:5100/log/upload"
    const [myfile, setmyfile] = useState("");
    const [myImage, setmyImage] = useState(" ");
    const changeFile = (e) => {
        let myI = e.target.files[0];
        let reader = new FileReader()
        reader.readAsDataURL(myI)
        reader.onload = () => {
            setmyfile(reader.result);
        }
    }

    const upload = () => {
        axios.post(endpoint, { myfile })
            .then((response) => {
                console.log("check your sever");
                console.log(response.data);
                setmyImage(response.data.myImagelink)
            }).catch = (err) => {
                console.log(err);
            }
            
        console.log("result");
    }

    return (
        <>
            <main>
                <div>
                    <input type="file" onChange={(e) => changeFile(e)} />
                </div>
                <div>
                    <button className='my-2 btn btn-info w-50' onClick={upload}>Upload</button>
                </div>
            </main>
            <div>
                <img src={myImage} alt="" />
            </div>
        </>
    )
}

export default Cloud

