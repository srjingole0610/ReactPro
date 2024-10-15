import React from 'react'

function Fruit({ name, emoji, price, soldOut }) {
    return (
        <div>
            <li>
                {emoji} {name} ${price} {soldOut ? "- is soldout" : "- is available for purchase"}
            </li>
        </div>
    )
}

export default Fruit
