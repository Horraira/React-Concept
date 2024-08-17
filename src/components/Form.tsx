import React, { FormEvent, useState } from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {

    const [person, setPerson] = useState({ name: '', age: '' })

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        console.log('Person:', person)
    }

    return (
        // div.mb-3>label.form-label+input.form-control
        // div.mb-3>label.form-label+input[type=number].form-control
        // button.btn.btn-primary
        <form onSubmit={(event) => {
            handleSubmit(event)
        }}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input id='name' type="text"
                    className="form-control"
                    // for single source of truth
                    value={person.name}
                    onChange={(event) => setPerson({ ...person, name: event.target.value })} />
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input id='age' type="number"
                    className="form-control"
                    // for single source of truth
                    value={person.age}
                    onChange={(event) => setPerson({ ...person, age: parseInt(event.target.value) })} />
            </div>
            <button className="btn btn-primary" type='submit'>Submit</button>
        </form>
    )
}

export default Form