import React from 'react'
import { useSelector } from "react-redux"

export default function TodoList() {
  const todos_ar = useSelector(state => state.todoSlice.todo_ar);
  return (
    <div className='mx-auto col-md-6 my-2 p-2 row'>

      {todos_ar.map(item => {
        return (
          <div className='col-md-6 p-2'>
            <div key={item.id} className='p-2 border shadow'>
              <img style={{ cursor: "pointer" }} className='float-end m-1 ' src='images/trash.png' alt='delete button' />
              <h4>{item.muscleGroup} : {item.exerciseName}</h4>
              <p className='h5 text-danger'>{item.numberOfRepetitions} X {item.numberOfSets}</p>
            </div>
          </div>
        )
      })}

    </div>
  )
}
