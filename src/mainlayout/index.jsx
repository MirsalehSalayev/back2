import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import Navbar from '../navbar'
import Footer from '../footer'

function Layout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout