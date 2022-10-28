import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {add1} from "../features/counterSlice";

export default function Counter() {
    const dispatch = useDispatch()
    const counter = useSelector((myStore) => myStore.counterSlice.counter)
    return (
        <div className='container'>
            <h2>Counter:{counter}</h2>
            <button onClick={() => {
                dispatch(add1())
            }} className='btn btn-dark'>Add 1</button>
        </div>
    )
}
