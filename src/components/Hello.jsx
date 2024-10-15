const Hello = ({ message, name, emoji }) => {
    return (
        <div>
            <h1>{message} {name} {emoji}</h1>
        </div>
    )
}

export default Hello