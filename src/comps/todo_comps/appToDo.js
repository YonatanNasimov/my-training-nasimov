import React from 'react'
import TodoInput from './todoInput'
import TodoList from './todoList'


export default function AppToDo() {
  return (
    <div style={{backgroundImage:"/images/cover.jpg"}}>
      <h1 className='display-4 text-center py-3'>App to do:</h1>
     <TodoInput/>
     <TodoList/>
    </div>
  )
}
