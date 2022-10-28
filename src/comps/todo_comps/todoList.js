import React from 'react'

export default function TodoList() {
  return (
    <div className='mx-auto col-md-6 my-2 p-2 row'>
      <div className='col-md-6 p-2'>
        <div className='p-2 border shadow'>
          <img style={{ cursor: "pointer" }} className='float-end m-1 ' src='images/trash.png' alt='delete button' />
          <h4>Chest : push ups</h4>
          <p className='h5 text-danger'>15 X 3</p>
        </div>
      </div>
    </div>
  )
}
