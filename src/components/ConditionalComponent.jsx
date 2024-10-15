import React from 'react'
import Code from './Code'
import Welcome from './Welcome'

function ConditionalComponent() {
    const display = false
    return display ? <h1>Welcome 1</h1> : <h1>Welcome 2</h1>
}

export default ConditionalComponent
