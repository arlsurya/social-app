<<<<<<< HEAD
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
=======
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import LandingPage from './Components/LandingPage';
import Register from './Components/Register';
import ForgotPassword from './Components/ForgotPassword';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/home" element={<Home />} />
      
        </Routes>
      </div>
    </Router>
  );
>>>>>>> b83e711dc5e1bcddd282614681d422a21df2e62f
}

export default App;
