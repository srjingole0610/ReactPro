import React from 'react'
import Code from './Code'
import Welcome from './Welcome'

function ConditionalComponent() {
    const display = false
    if (display) {
        return (
            <div>
                <Code />
            </div>
        )
    }
    else {
        return (
            <div>
                <Welcome />
            </div>
        )
    }
}

export default ConditionalComponent
