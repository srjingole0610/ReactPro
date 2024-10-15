import React from 'react'

function ConditionalComponent() {
    const display = true
    if (display) {
        return (
            <div>
                <h1>Conditional Component</h1>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>Code with me</h1>
            </div>
        )
    }
}

export default ConditionalComponent
