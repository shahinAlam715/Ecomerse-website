import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Fotter from './Fotter'
import { Outlet } from 'react-router-dom'

const Rootlayout = () => {
  return (
  
    <>
    <Header/>
    <Navbar/>
    <Outlet />
    <Fotter/>
    </>
  
  )
}

export default Rootlayout