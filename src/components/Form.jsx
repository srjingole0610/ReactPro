import React, { useState } from 'react'

function Form() {
    const [name, setName] = useState("")
    const handleChange = (e) => {
        console.log(e.target.value)
        setName(e.target.value)
    }
    return (
        <div>
            <br />
            <form >
                <input onChange={handleChange} type="text" value={name} />
            </form>
        </div>
    )
}

export default Form
