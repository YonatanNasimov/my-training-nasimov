import React from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Header from '../comps_static/header'
import Home from './home'
import AppToDo from './todo_comps/appToDo'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home />}>Home</Route>
                <Route path='/todoList' element={<AppToDo/>}>AppToDo</Route>
            </Routes>
        </BrowserRouter>
    )
}
