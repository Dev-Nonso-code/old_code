import React from 'react'
import Fecth from './Fecth'
// import { Nav } from '../Navbar component/Nav'
import { Routes, Route } from 'react-router-dom'
import Bag from '..//Body component/Bag'

const Products = () => {
  return (
    <>
    <h1>PRODUCTS</h1>
    <Routes>
      <Route path='/image' element={<Bag />} />
    </Routes>
    {/* <Nav /> */}
    <Fecth />
    </>
  )
}

export default Products