import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom';

function MovieInfo(props) {
    const params = useParams();
    const [qurey] = useSearchParams();
    return (
        <main style={{ minHeight: "600px" }}>
         <h2> movieInfo -- {params.id}</h2>  
        </main>
    )
}

export default MovieInfo