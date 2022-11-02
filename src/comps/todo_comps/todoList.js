import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { deleteSingleItem } from '../../features/todoSlice';
import {sortBy} from "lodash"

export default function TodoList() {

  const dispatch = useDispatch();

  const todos_ar = useSelector(state => state.todoSlice.todo_ar);

  let sort_ar = sortBy(todos_ar,"muscleGroup");

  return (
    <div className='mx-auto col-md-6 m-0 p-2 row'>

      {sort_ar.map(item => {
        return (
          <div key={item.id} className='col-md-6 p-2'>
            <div className='p-2 border shadow h-100 overflow-hiden'>
              <img onClick={() => {
                
                window.confirm("are you sure you want to delete exercise "+item.exerciseName) && dispatch(deleteSingleItem({ delId: item.id }))

              }}
                style={{ cursor: "pointer" }} className='float-end m-1 ' src='images/trash.png' alt='delete button' />
              <h4>{item.muscleGroup} : {item.exerciseName}</h4>
              <p className='h5 text-danger'>{item.numberOfRepetitions} X {item.numberOfSets}</p>
            </div>
          </div>
        )
      })}

    </div>
  )
}
