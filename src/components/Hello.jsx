const Hello = (props) => {
    return (
        <div>
            <h1>{props.message} {props.name} {props.emoji} {props.seatNumber}</h1>
        </div>
    )
}

export default Hello