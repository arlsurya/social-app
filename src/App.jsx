<<<<<<< HEAD
import React from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'

function App() {
  return (
    <>
    <Header/>

        </>
  )
=======
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Login />} />
          <Route path="/forgotpassword" element={<Login />} />
          <Route path="/home" element={<Home />} />
      
        </Routes>
      </div>
    </Router>
  );
>>>>>>> c5290c25a5651b520c410038b7c7f4389cfb6551
}

export default App;
