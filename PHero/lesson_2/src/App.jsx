import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import User from './User'
import Friends from './Friends'

function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    alert('button clicked');
  }

  const handleClick2 = () => {
    alert('button2 clicked');
  }

  function addFive(num){
    alert(num+5 + ' after add');
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      
      <h3>React Core Concept</h3>

      <Friends></Friends>

      <User></User>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me</button>
      <button onClick={() => addFive(5)}>Add Me</button>
      
      
    </>
  )
}

export default App
