import React from 'react'
import { useForm } from 'react-hook-form';

export default function TodoInput() {
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();

  const onSub = (dataBody) => {
      delete dataBody.phone2;
      console.log(dataBody)
  }

  const nameRef = register("name", { required: true, minLength: 2 })
  const phoneRef = register("phone", { required: true, minLength: 5 })
  const phone2Ref = register("phone2", { required: true, validate:(val) => {
      return val == getValues("phone")
  } })
  const emailRef = register("email", {
      required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  })
  const colortRef = register("color", { required: true})

  return (
      <div className='container'>
          <h2>Form in react</h2>
          <form onSubmit={handleSubmit(onSub)} className='col-md-6 p-2'>
              <label>Name:</label>
              <input {...nameRef} type="text" className='form-control' />
              {errors.name && <div className='text-danger'>* Enter valid name: min 2 chars</div>}
              <label>Phone:</label>
              <input {...phoneRef} type="tel" className='form-control' />
              {errors.phone && <div className='text-danger'>* Enter valid name: min 5 chars</div>}
              <label>Enter Phone again:</label>
              <input {...phone2Ref} type="tel" className='form-control' />
              {errors.phone2 && <div className='text-danger'>* Enter the same phone!</div>}
              <label>Email:</label>
              <input {...emailRef} type="text" className='form-control' />
              {errors.email && <div className='text-danger'>* Enter valid email</div>}
              <label>Choose color</label>
              <select {...colortRef} className='form-select m-0'>
                  <option value="">Choose color...</option>
                  <option value="orange">Orange</option>
                  <option value="red">Red</option>
                  <option value="blue">blue</option>
              </select>
              {errors.color && <div className='text-danger'>* you must choose a color</div>}
              <button className='btn btn-info mt-3'>Send</button>
          </form>
      </div>
  )
}
