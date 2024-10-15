import React, { useState } from 'react'

function Counter() {
    let [count, setCount] = useState(0)
    function increment() {
        setCount(count + 1)
    }
    function decrement() {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    return (
        <div>
            <h1>The Count Value is : {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement} disabled={count === 0}>Decrement</button>
        </div>
    )
}

export default Counter
