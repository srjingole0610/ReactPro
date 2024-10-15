import Hello from "./components/Hello"

function App() {
  const seatNumber = [1, 4, 7]
  return (
    <div className="App">
      <Hello name="suraj" message="Welcome to React - " emoji="📖" seatNumber={seatNumber} />
    </div>
  )
}

export default App
