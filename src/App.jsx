import Hello from "./components/Hello"

function App() {
  const person = {
    name: "suraj",
    message: "Welcome to React - ",
    emoji: "📖",
    seatNumber: [1, 4, 7]
  }
  return (
    <div className="App">
      <Hello person={person} />
    </div>
  )
}

export default App
