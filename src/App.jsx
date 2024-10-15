import ConditionalComponent from "./components/ConditionalComponent"
import Counter from "./components/Counter"
import Fruits from "./components/Fruits"
import Message from "./components/Message"

function App() {

  return (
    <div className="App">
      <Fruits />
      <ConditionalComponent />
      <Message />
      <Counter />
    </div>
  )
}

export default App
