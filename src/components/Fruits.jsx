import React from 'react'

function Fruits() {
    const Fruits = ['Apple', 'Orange', 'PineApple', 'Banana', 'Guava']
    return (
        <div>
            <ul>
                {Fruits.map((fruit, ind) => {
                    return <li key={ind}>{fruit}</li>
                })}
            </ul>
        </div>
    )
}
export default Fruits
