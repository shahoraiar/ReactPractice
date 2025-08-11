import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'

function App() {
  const [count, setCount] = useState(0)
  const actors = ['sakib', 'rakib', 'khan', 'jhan', 'chuhan'];

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
      <h1>Vite + React</h1>

      <Todo task="learn react"></Todo>
      <Todo task="core concepts"></Todo>
      <Todo task="try jsx react"></Todo>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Person></Person>
      {/* <Person></Person> */}

      <Student name="shahoraiar" age='24'></Student>
      <Student name="prapty" age='20'></Student>

      <Developer></Developer>

      <Actor name="Emon"></Actor>

      {
        actors.map(actor => <Actor name={actor}></Actor>)

      }
    </>
  )
}

function Person(){
  const age = 24;
  return (
  <>
  <h3>I am a Person.</h3>
  <h4>Age : {age}</h4>
  </>
)
}

function Student(props){
  return(
  <div className='student'>
    <h3>This is a student</h3>
    <p>Name : {props.name}</p>
    <p>AGE : {props.age}</p>
  </div>
  )
}

function Developer(){
  const develperStyle = {
    margin : '20px',
    padding : '20px',
    border : '2px solid red',
    borderRadius : '10px'
  }
  return(
    <div style={develperStyle}>
      <h3>This is a developer</h3>
      <p>Name : Shahoraiar</p>
      <p>AGE : 24</p>
    </div>
  )
}

export default App
