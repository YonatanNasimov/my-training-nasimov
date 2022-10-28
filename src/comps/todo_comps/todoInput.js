import React from 'react'
import { useForm } from 'react-hook-form';

export default function TodoInput() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSub = (dataBody) => {
        delete dataBody.phone2;
        console.log(dataBody)
    }

    const exerciseNameRef = register("exerciseName", { required: true, minLength: 2 });
    const numberOfSetsRef = register("numberOfSets", { required: true, minLength: 1 });
    const numberOfRepetitionsRef = register("numberOfRepetitions", { required: true, minLength: 1 });
    const muscleGroupRef = register("muscleGroup", { required: true });

    return (
        <div className='container'>
            <form onSubmit={handleSubmit(onSub)} className='mx-auto col-md-6 p-2 row border shadow'>
                <div className='col-md-8 mb-2'>
                    <label className='h5'>Exercise Name:</label>
                    <input {...exerciseNameRef} type="text" className='form-control' />
                    {errors.exerciseName && <div className='text-danger'>* Required !!</div>}
                </div>
                <div className='col-md-4'>
                    <label className='h5'> Muscle Group:</label>
                    <select {...muscleGroupRef} className='form-select m-0'>
                        <option value="">Choose muscle group...</option>
                        <option value="chest">Chest</option>
                        <option value="back">Back</option>
                        <option value="legs">Legs</option>
                        <option value="hands">Hands</option>
                        <option value="shoulders">Shoulders</option>
                    </select>
                    {errors.muscleGroup && <div className='text-danger'>* Required !!</div>}
                </div>
                <div className='col-md-6'>
                    <label className='h5'>Number of Sets:</label>
                    <input {...numberOfSetsRef} type="number" className='form-control' />
                    {errors.numberOfSets && <div className='text-danger'>* Required !!</div>}
                </div>
                <div className='col-md-6'>
                    <label className='h5'>Number of repetitions:</label>
                    <input {...numberOfRepetitionsRef} type="number" className='form-control' />
                    {errors.numberOfRepetitions && <div className='text-danger'>* Required !!</div>}
                </div>
                <button className='btn btn-info mt-3'>Add exercise to the list</button>
                <button type='button' className='btn btn-danger mt-3'>Reast all</button>
            </form>
        </div>
    )
}
