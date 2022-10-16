import React from 'react'

function VodItem(props) {

    let item = props.item;
    return (
        <article className='col-md-3 p-2'>
            <div className='border shadow h-100 overflow-hiden'>
                <img src={item.Poster} className='me-2 w-100' alt={item.Title} />
                <div className='p-2'>
                    <h4>{item.Title}</h4>
                    <p><strong>Year:</strong> {item.Year}</p>
                    <button className='btn btn-dark'>More info</button>
                </div>
            </div>
        </article>
    )
}

export default VodItem