import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {add1,reastCounter,addcustom} from "../features/counterSlice";

export default function Counter() {
    const dispatch = useDispatch()
    const counter = useSelector((myStore) => myStore.counterSlice.counter)
    return (
        <div className='container'>
            <h2>Counter:{counter}</h2>
            <button onClick={() => {
                dispatch(add1())
            }} className='btn btn-dark'>Add 1</button>
            <button onClick={() => {
                dispatch(reastCounter())
            }} className='btn btn-dark'>Reast</button>
            <button onClick={() => {
                dispatch(addcustom({counterVal:5}))
            }} className='btn btn-dark'>Add 5</button>
            <button onClick={() => {
                dispatch(addcustom({counterVal:-6}))
            }} className='btn btn-dark'>Reduce 5</button>
        </div>
    )
}
