import React from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Footer from '../comps_static/footer'
import Header from '../comps_static/header'
import Home from './home'
import AppToDo from './todo_comps/appToDo'

export default function AppRouter() {
    return (
        
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/todoList' element={<AppToDo/>}></Route>
                <Route path='*' element={<div style={{minHeight:"600px"}} className='text-center mt-5 display-3'>The page was not found , 404 </div>}></Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}
