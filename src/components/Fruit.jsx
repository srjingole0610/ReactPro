import React from 'react'

function Fruit({ name, emoji, price }) {
    return (
        <div>
            <li>
                {emoji} {name} ${price}
            </li>
        </div>
    )
}

export default Fruit
