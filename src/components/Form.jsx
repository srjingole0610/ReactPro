import React, { useState } from 'react'

function Form() {
    const [name, setName] = useState({ firstName: "", middleName: "", lastName: "" })
    const handleFirstName = (e) => {
        setName({ ...name, firstName: e.target.value })
    }
    const handleMiddleName = (e) => {
        setName({ ...name, middleName: e.target.value })
    }
    const handleLastName = (e) => {
        setName({ ...name, lastName: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name)
    }
    return (
        <div>
            <h1>{name.firstName} - {name.middleName} - {name.lastName}</h1>
            <br />
            <form >
                <input onChange={handleFirstName} type="text" value={name.firstName} />
                <input onChange={handleMiddleName} type="text" value={name.middleName} />
                <input onChange={handleLastName} type="text" value={name.lastName} />
                <button onClick={handleSubmit}>Submit</button>
            </form>

        </div>
    )
}

export default Form
