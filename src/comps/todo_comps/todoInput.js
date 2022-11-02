import React, { useRef } from 'react'
import { useDispatch } from "react-redux"
import { addNewItem, resetAllItems } from '../../features/todoSlice';


export default function TodoInput() {
    const dispatch = useDispatch();

    const exerciseName = useRef();
    const numberOfSets = useRef();
    const numberOfRepetitions = useRef();
    const muscleGroup = useRef();

    const onAddClick = () => {
        let todoObj = {
            exerciseName: exerciseName.current.value,
            numberOfSets: numberOfSets.current.value,
            numberOfRepetitions: numberOfRepetitions.current.value,
            muscleGroup: muscleGroup.current.value,
            id: Date.now()
        }
        console.log(todoObj);
        dispatch(addNewItem({ todoItem: todoObj }))
    }

    return (
        <div className='container'>
            <form onSubmit={(e) => e.preventDefault()}
                className='mx-auto col-md-6 p-2 row border shadow'>
                <div className='col-md-8 mb-2'>
                    <label className='h5'>Exercise Name:</label>
                    <input ref={exerciseName} type="text" className='form-control' />
                </div>
                <div className='col-md-4'>
                    <label className='h5'> Muscle Group:</label>
                    <select ref={muscleGroup} className='form-select m-0'>
                        <option value="">Choose muscle group...</option>
                        <option value="Chest">Chest</option>
                        <option value="Back">Back</option>
                        <option value="Legs">Legs</option>
                        <option value="Hands">Hands</option>
                        <option value="Shoulders">Shoulders</option>
                    </select>
                </div>
                <div className='col-md-6'>
                    <label className='h5'>Number of Sets:</label>
                    <input ref={numberOfSets} type="number" className='form-control' />
                </div>
                <div className='col-md-6'>
                    <label className='h5'>Number of repetitions:</label>
                    <input ref={numberOfRepetitions} type="number" className='form-control' />
                </div>
                <button onClick={onAddClick} className='btn btn-info mt-3'>Add exercise to the list</button>
                <button onClick={() => {
                    window.confirm("are you sure?") && dispatch(resetAllItems());
                }} className='btn btn-danger mt-3'>Reset all</button>
            </form>
        </div>
    )
}
