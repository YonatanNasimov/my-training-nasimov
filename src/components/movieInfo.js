import React from 'react'
import { useParams } from 'react-router-dom';

function MovieInfo(props) {
    const params = useParams();

    return (
        <main className='container' style={{ minHeight: "600px" }}>
            <article className='mx-auto col-md-8 border shadow overflow-hiden h-100'>
                <div className='bg-info col-md-5 float-end'></div>
                
                <div className='bg-dark text-white col-md-7 p-2'>
                    <h2>movie name</h2>
                    <p><strong>Runtime: </strong>100min</p>
                    <p><strong>Genere: </strong>Action</p>
                    <p><strong>Float: </strong>lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
                </div>
            </article>
        </main>
    )
}

export default MovieInfo

{/* <img className='float-start h-100 overflow-hiden' src='https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX300.jpg' alt='lego' /> */}