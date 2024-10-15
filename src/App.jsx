import ConditionalComponent from "./components/ConditionalComponent"
import Fruits from "./components/Fruits"
import Message from "./components/Message"

function App() {

  return (
    <div className="App">
      <Fruits />
      <ConditionalComponent />
      <Message />
    </div>
  )
}

export default App
