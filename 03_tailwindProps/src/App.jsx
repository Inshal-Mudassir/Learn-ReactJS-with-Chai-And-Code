import { useState } from 'react'
import './App.css'
import Card3 from './components/card'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    {/* <h1 className='bg-green-400 text-black p-4 rounded-b-2xl'>Tailwind Test</h1> */}
    <Card3 ratting= "3.5" subject="Chemistry"/>
    <Card3 ratting= "4.7" subject="Physics"/>
    <Card3 ratting= "2.3" subject="Math"/>
    </>
  )
}

export default App
