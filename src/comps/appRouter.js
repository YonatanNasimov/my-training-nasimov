import React from 'react'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Counter from './counter'
import Home from './home'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <header style={{minHeight:"48px"}} className='container-fluid bg-dark text-white'>
                <nav style={{display:"flex",justifyItems:"center",alignItems:"center"}} className='container'>
                    <Link className='me-2' to="/">Home</Link>
                    <Link to="/counter">Counter</Link>
                </nav>
            </header>
            <Routes>
                <Route path='/' element={<Home/>}>Home</Route>
                <Route path='/counter' element={<Counter/>}>Counter</Route>
            </Routes>
        </BrowserRouter>
    )
}
