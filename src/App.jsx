import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './Components/Login'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Login></Login>
    </>
  )
}

export default App
