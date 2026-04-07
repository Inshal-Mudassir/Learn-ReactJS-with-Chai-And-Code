import { useState } from 'react'
import './App.css'
import Card3 from './components/card'
// import Counter from './components/Counter'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    {/* <h1 className='bg-green-400 text-black p-4 rounded-b-2xl'>Tailwind Test</h1> */}
    <Card3/>
    <Card3 ratting="4.5" subject="Physics"/>
    </>
  )
}

export default App
