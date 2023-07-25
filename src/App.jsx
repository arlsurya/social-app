import React from 'react'
import Header from './Components/Header'
import Login from './Components/Login'
import Footer from './Components/Footer'

function App() {
  return (
    <div className=' bg-gradient-to-t from-cyan-500 to-blue-500 h-screen flex justify-center items-center flex-col gap-10'>
      <Header />
      <Login />
      <Footer />
    </div>
  )
}

export default App