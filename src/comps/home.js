import React from 'react'
import { useSelector } from "react-redux"
import { useForm } from 'react-hook-form';

export default function Home() {
    const counter = useSelector((state) => state.counterSlice.counter)

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSub = (dataBody) => {
        console.log(dataBody)
    }
    const nameRef = register("name", { required: true, minLength: 2 })
    const passRef = register("password", { required: true, minLength: 6 })
    const emailRef = register("email", {
        required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    })


    return (
        <div className='container'>
            <p className='text-danger'>{counter}</p>
            <h2 className='text-center m-0 display-4'>Log In:</h2>
            <form onSubmit={handleSubmit(onSub)} className='col-md-5 p-2 mx-auto'>
                <label className='pt-1 h5'>User Name:</label>
                <input {...nameRef} type="text" className='form-control col-md-8' />
                {errors.name && <div className='text-danger'>* Enter valid name</div>}
                <label className='pt-1 h5'>PassWord:</label>
                <input {...passRef} type="PassWord" className='form-control col-md-8' />
                {errors.password && <div className='text-danger'>* Enter valid password</div>}
                <label className='pt-1 h5'>Email:</label>
                <input {...emailRef} type="text" className='form-control col-md-8' />
                {errors.email && <div className='text-danger'>* Enter valid email</div>}
                <div className='text-center py-2'>
                    <button className='btn btn-info mt-3 mx-auto'>Send</button>
                </div>
            </form>
        </div>
    )
}
