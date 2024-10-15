import React from 'react'
import Code from './Code'
import Welcome from './Welcome'

function ConditionalComponent() {

    // const message1 = <h1>Welcome to Message 1</h1>
    // const message2 = <h1>Welcome to Message 2</h1>
    // const display = false;

    // if (display) {
    //     return message1
    // }
    // else {
    //     return message2
    // }

    let message;
    const display = false;
    if (display) {
        message = <h1>Welcome to Message 1</h1>;
    }
    else {
        message = <h1>Welcome to message2</h1>
    }
    return message
}

export default ConditionalComponent
