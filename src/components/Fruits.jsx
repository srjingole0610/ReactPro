import React from 'react'
import Fruit from './fruit'

function Fruits() {
    const Fruits = [
        { name: 'Apple', price: 10, emoji: '🍎', soldOut: false },
        { name: 'Orange', price: 5, emoji: '🍊', soldOut: true },
        { name: 'PineApple', price: 11, emoji: '🍍', soldOut: false },
        { name: 'Banana', price: 3, emoji: '🍌', soldOut: true },
        { name: 'Cherry', price: 15, emoji: '🍒', soldOut: false }

    ]
    return (
        <div>
            <ul>
                {
                    Fruits.map((fruit, index) => {
                        return <Fruit key={index} emoji={fruit.emoji} name={fruit.name} price={fruit.price} soldOut={fruit.soldOut} />
                    })
                }
            </ul>
        </div>
    )
}
export default Fruits
