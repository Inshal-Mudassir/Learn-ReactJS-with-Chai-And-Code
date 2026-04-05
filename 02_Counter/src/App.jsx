import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
let [counter, setCounter] = useState(15);

  // let counter = 5;
  const addValue = ()=>{
    // console.log("Value Added", Math.random());
    // counter++;
    // console.log("valueAdded", counter);
    // counter = counter + 1;
    // setCounter(counter);
    setCounter(counter + 1);

  }

  return (
    <>
    <h1>Chai Or React</h1>
    <h2>Counter Value: {counter}</h2>
    <button 
    onClick={addValue}
    >Add Value {counter}</button>
    <br />
    <button>RemoveValue {counter}</button> 
    <p>footer:{counter}</p>
    </>
  )
}

export default App
