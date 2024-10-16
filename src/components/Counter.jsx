import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    const [incrementBy, setIncrementBy] = useState(1);

    function increment() {
        setCount(count + incrementBy)
    }
    function decrement() {
        if (count > 0) {
            setCount(count - incrementBy)
        }
    }
    function incrementValue() {
        setIncrementBy(incrementBy + 1)
    }
    function decrementValue() {
        if (incrementBy > 1) {
            setIncrementBy(incrementBy - 1)
        }
    }
    return (
        <>
            <div>
                <h1>The Count Value is : {count}</h1>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement} disabled={count < 0}>Decrement</button>
            </div>

            <div>
                <h1>The increament Value is : {incrementBy}</h1>
                <button onClick={incrementValue}>+</button>
                <button onClick={decrementValue} disabled={incrementBy === 1}>-</button>
            </div>
        </>
    )
}

export default Counter
