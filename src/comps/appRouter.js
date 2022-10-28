import React from 'react'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Counter from './counter'
import Home from './home'
import AppToDo from './todo_comps/appToDo'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <header style={{ minHeight: "48px", display: "flex", justifyItems: "center", alignItems: "center" }} className='container-fluid bg-dark text-white'>
                <nav className='container d-flex'>
                    <h1 className='me-5'>My Logo</h1>
                    <div style={{ display: "flex", justifyItems: "center", alignItems: "center" }}>
                        <Link className='me-3' to="/">Home</Link>
                        <Link className='me-3' to="/counter">Counter</Link>
                        <Link to="/todoList">Todo List</Link>
                    </div>
                </nav>
            </header>
            <Routes>
                <Route path='/' element={<Home />}>Home</Route>
                <Route path='/counter' element={<Counter />}>Counter</Route>
                <Route path='/todoList' element={<AppToDo/>}>AppToDo</Route>
            </Routes>
        </BrowserRouter>
    )
}
