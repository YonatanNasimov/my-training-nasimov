import React from 'react'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Home from './home'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <header style={{minHeight:"48px"}} className='container-fluid bg-dark text-white'>
                <nav className='container'>
                    <Link to="/">Home</Link>
                </nav>
            </header>
            <Routes>
                <Route path='/' element={<Home/>}>Home</Route>
            </Routes>
        </BrowserRouter>
    )
}
