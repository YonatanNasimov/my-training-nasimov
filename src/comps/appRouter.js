import React from 'react'
import { BrowserRouter, Route, Routes, useNavigate} from "react-router-dom"
import Footer from '../comps_static/footer'
import Header from '../comps_static/header'
import Home from './home'
import AppToDo from './todo_comps/appToDo'

export default function AppRouter() {
    const nav = useNavigate();
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home />}>Home</Route>
                <Route path='/todoList' element={<AppToDo/>}>AppToDo</Route>
                <Route path='*' element={<div style={{minHeight:"600px"}} className='text-center mt-5 display-3'>Page not fund, 404 
                <button onClick={() => {
                    nav("/")
                }} className='btn btn-dark'>Back to home</button></div>}></Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}
