const Hello = ({ person }) => {
    return (
        <div>
            <h1>{person.message} {person.name} {person.emoji} {person.seatNumber}</h1>
        </div>
    )
}

export default Hello