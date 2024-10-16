import ConditionalComponent from "./components/ConditionalComponent"
import Counter from "./components/Counter"
import Form from "./components/Form"
import Fruits from "./components/Fruits"
import Message from "./components/Message"

function App() {

  return (
    <div className="App">
      <Fruits />
      <ConditionalComponent />
      <Message />
      <Counter />
      <Form />
    </div>
  )
}

export default App
