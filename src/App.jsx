import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Landing } from './components/landing'
import { NavBar } from './components/nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar/>
      <Landing/>
    </div>
  )
}

export default App
