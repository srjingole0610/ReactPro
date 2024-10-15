import React from 'react'
import Fruit from './fruit'

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
                        return <Fruit key={index} emoji={fruit.emoji} name={fruit.name} price={fruit.price} />
                    })
                }
            </ul>
        </div>
    )
}
export default Fruits
