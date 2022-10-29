import React from 'react'
import TodoInput from './todoInput'
import TodoList from './todoList'
import "../style/home.css"


export default function AppToDo() {
  return (
    <div className='text-white myBg h-75' style={{backgroundImage:"url(images/cover.jpg)"}}>
      <h1 className='display-4 text-center py-3'>App to do:</h1>
     <TodoInput/>
     <TodoList/>
    </div>
  )
}
