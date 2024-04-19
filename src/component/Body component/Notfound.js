import React from 'react'
// import First from './First'
import { Link } from 'react-router-dom'

function Notfound() {
    return (
        <>
            <div className='text-center bg-primary h-100'>
                <h1>ERROR 404</h1>
                <h1>PAGE NO FOUND</h1>
                <h3>Please To</h3>
                <div>
                    <Link className='text-info fw-bolder fs-3' to='/'>Home</Link>
                    {/* <First /> */}
                </div>
            </div>
        </>

    )
}

export default Notfound