import React from 'react'
import Code from './Code'
import Welcome from './Welcome'

function ConditionalComponent() {
    const display = true
    return display ? <Welcome /> : <Code />
}

export default ConditionalComponent
