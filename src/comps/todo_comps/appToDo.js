import React from 'react'
import TodoInput from './todoInput'
import TodoList from './todoList'
import "../style/home.css"


export default function AppToDo() {
  return (
    <div style={{backgroundImage: "url(images/cover.jpg)"}} className='container-fluid p-0 '>
      <div className='text-white myBg h-75 mx-auto container' style={{minHeight: "600px" }}>
        <h1 className='display-4 text-center py-3'>App to do:</h1>
        <TodoInput />
        <TodoList />
      </div>
    </div>
  )
}
