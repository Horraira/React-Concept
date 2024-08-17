import React, { FormEvent, useState } from 'react'
import { useForm } from 'react-hook-form'

interface FromData {
    name: string,
    age: number
}

const Form = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FromData>()
    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <form onSubmit={
            handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input id='name' type="text"
                    className="form-control"
                    {...register('name', { required: true, minLength: 3 })} />
                {errors.name?.type == 'required' && <span className='text-danger'>This field is required</span>}
                {errors.name?.type == 'minLength' && <span className='text-danger'>Name length must be at least three char</span>}
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input id='age' type="number"
                    className="form-control"
                    {...register('age')} />
            </div>
            <button className="btn btn-primary" type='submit'>Submit</button>
        </form>
    )
}

export default Form