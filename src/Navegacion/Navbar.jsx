import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from '../Components/Home'
import About from '../Components/About'
import Dashboard from '../Components/Dashboard'
import Header from '../Components/Header'
function Navbar() {
  return (
    <BrowserRouter>
    <header className='menu'>
        <nav>
            <ul className='ul-menu'>
                <NavLink to="/Home">
                <li>Home</li>
                </NavLink>
                <NavLink to="/About">
                <li>About</li>
                </NavLink>
                <NavLink to="/Dashboard">
                <li>Dashboard</li>
                </NavLink>
                <NavLink to="/Header">
                <li>Header</li>
                </NavLink>
            </ul>
        </nav>
    </header>

    <Routes>
        <Route path='/Home' element={ <Home/> } />
        <Route path='/About' element={ <About/> } /> 
        <Route path='/Dashboard' element={ <Dashboard/> } />
        <Route path='/Header' element={ <Header/> } />
        <Route path='/*' element={ <Home/> } />
    </Routes>
</BrowserRouter>
  )
}

export {Navbar}