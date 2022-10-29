import React from 'react'
import { Link } from "react-router-dom"

export default function Header() {
    return (
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
    )
}
