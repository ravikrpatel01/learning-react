import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full max-w-md mx-auto bg-gray-800 rounded-lg px-4 py-3 my-8 text-orange-500' >
      <h1 className='text-center text-white my-3'>PassworGenerator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
          type='text'
          // value={}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          >
        </input>
        <button className='outline-nonebg-blue-400 px-3 text-white'>Copy</button>
      </div>

      <div>
        <input type='range'></input>
        <h2>Password</h2>
      </div>

    </div>

  )
}

export default App
