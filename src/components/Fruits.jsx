import React from 'react'

function Fruits() {
    const Fruits = [
        { name: 'Apple', price: 10, emoji: '🍎' },
        { name: 'Orange', price: 5, emoji: '🍊' },
        { name: 'PineApple', price: 11, emoji: '🍍' },
        { name: 'Banana', price: 3, emoji: '🍌' },
        { name: 'Cherry', price: 15, emoji: '🍒' }

    ]
    return (
        <div>
            <ul>
                {
                    Fruits.map((fruit, index) => {
                        return <li key={index}>
                            {fruit.emoji} {fruit.name} ${fruit.price}
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
export default Fruits
