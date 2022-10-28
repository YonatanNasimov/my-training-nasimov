import React from 'react'
import {useSelector} from "react-redux"

export default function Counter() {
    const counter = useSelector((myStore) => myStore.counterSlice.counter)
    return (
        <div className='container'>
            <h2>Counter:{counter}</h2>
            <button className='btn btn-dark'>Add 1</button>
        </div>
    )
}
