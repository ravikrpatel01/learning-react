import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen' style={{backgroundColor: color}}>
      <div className='flex flex-wrap px-2 inset-x-0 fixed justify-center bottom-12'>
        <div className='flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-2xl'>
          <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full bg-red-600 text-white'>Red</button>
          <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full bg-blue-600 text-white'>Blue</button>
          <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full bg-green-700 text-white'>Green</button>
          <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full bg-yellow-300 text-white'>Yellow</button>
          <button onClick={() => setColor("gray")} className='outline-none px-4 py-1 rounded-full bg-gray-300 text-white'>Gray</button>
        </div>
      </div>
    </div>
  )
}

export default App
