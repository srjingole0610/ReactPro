import React from 'react'

function Message() {
    const handleClick = () => {
        console.log("Button clicked");
    }
    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default Message
