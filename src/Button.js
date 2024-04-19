import React from 'react'


const Button = () => {
    return (
        <div className='m-4'>
            <button className='btn btn-primary m-4'>btn</button>
            <button className='btn btn-info'>btn</button>


            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid bg-info">
                    <a class="navbar-brand" href='m'>Navbar</a>
                </div>
            </nav>


            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1">Navbar</span>
                </div>
            </nav>
        </div>
    )
}

export default Button