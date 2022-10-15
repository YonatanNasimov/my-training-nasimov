import React from 'react'

function VodItem() {
    return (
        <div className='col-md-3 p-2'>
            <div className='border shadow'>
                <img src='https://m.media-amazon.com/images/M/MV5BZWFkY2I1ZDAtNmZhNS00NjVlLWJiMGQtMGQ1ZmM0ZDA5ODg5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg' className='me-2 w-100' alt='Rambo 5' />
                <div className='p-2'>
                    <h4>Rambo 5</h4>
                    <p>Year: 2022</p>
                    <button className='btn btn-dark'>More info</button>
                </div>
            </div>
        </div>
    )
}

export default VodItem