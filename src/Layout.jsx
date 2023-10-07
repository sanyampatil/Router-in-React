import React from 'react'
// import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'
import Header from './Component/Header/Header'
import Footer from './Component/footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout