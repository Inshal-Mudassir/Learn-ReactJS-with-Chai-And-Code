import { useState } from 'react'
import React from "react";
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
  const removeValue = () => {
    // console.log(counter);
    // setCounter(counter - 1);

    // Assignment

    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <>
    <h1>Chai Or React</h1>
    <h2>Counter Value: {counter}</h2>
    <button 
    onClick={addValue}
    >Add Value {counter}</button>
    <br />
    <button
    onClick={removeValue}
    >RemoveValue {counter}</button> 
    <p>footer:{counter}</p>
    </>
  )
}

export default App
