import React, { FormEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
    name: z.string().min(5, { message: 'Name must be at least 8 characters' }),
    age: z.number({ invalid_type_error: 'Age field required' }).min(18, { message: 'Age must be at least 18' })
})

type FormData = z.infer<typeof schema>

const Form = () => {

    const { register, handleSubmit,
        formState: { errors } } = useForm<FormData>({
            resolver: zodResolver(schema)
        })

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
                    {...register('name')} />
                {errors.name && <span className='text-danger'>{errors.name.message}</span>}
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input id='age' type="number"
                    className="form-control"
                    {...register('age', { valueAsNumber: true })} />
                {errors.age && <span className='text-danger'>{errors.age.message}</span>}
            </div>
            <button className="btn btn-primary" type='submit'>Submit</button>
        </form>
    )
}

export default Form