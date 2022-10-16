import React from 'react'

function VodInput() {
  return (
    <header style={{background:"black"}} className='container-fluid p-2'>
      <div className='container'>
        <div className='row'>
          <div className='logo col-auto border'>
            <h2 className='text-white'>V.O.D</h2>
          </div>
          <nav className='d-flex col-md-11'>
            <input placeholder='search for movie or game...' type={'search'} className="form-control" />
            <button className='btn btn-warning'>Search</button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default VodInput