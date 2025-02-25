import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(5)

  const addValue = () => {
    if (counter < 10) {
      setCount(counter + 1)
    }    
  }

  const removeValue = () => {
    if (counter > 0) {
      setCount(counter - 1)
    }    
  }

  return (
    <>
      <h1>Hello React with Vite Library!</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value: {counter}</button>
      <br/>
      <br/>
      <button onClick={removeValue}>Remove Value: {counter}</button>

      <footer>
        <p>Footer: {counter}</p>
      </footer>
    </>
  )
}

export default App
