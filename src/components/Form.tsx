import React, { useRef, FormEvent, ChangeEvent } from 'react'

const Form = () => {

    const nameRef = useRef<HTMLInputElement>(null)
    const ageRef = useRef<HTMLInputElement>(null)
    const person = {
        name: '',
        age: 0
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        person.name = nameRef.current!.value
        person.age = parseInt(ageRef.current!.value)
        console.log('Person:', person)
    }

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        // console.log('Name:', event.target.value)
    }

    return (
        // div.mb-3>label.form-label+input.form-control
        // div.mb-3>label.form-label+input[type=number].form-control
        // button.btn.btn-primary
        <form onSubmit={(event) => {
            handleSubmit(event)
            console.log('Form submitted')
        }}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input ref={nameRef} id='name' type="text" className="form-control" onChange={handleNameChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input ref={ageRef} id='age' type="number" className="form-control" />
            </div>
            <button className="btn btn-primary" type='submit'>Submit</button>
        </form>
    )
}

export default Form