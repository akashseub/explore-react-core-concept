import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Team from './Team'
import Users from './Users'

function App() {

  function handleClick(){
    alert('Button clicked');
  }

  const addFive = (num) => {
    alert(num +5);
  }

  return (
    <>
      <Users></Users>

      <Team></Team>

      <h3>React core concept part-2</h3>

      <button onClick={handleClick}>Click me</button>
      <br />
      <button onClick={() => addFive(5)}>Show Number</button>
    </>
  )
}

export default App
 