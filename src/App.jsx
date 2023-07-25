import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import LandingPage from './Components/LandingPage';
import Register from './Components/Register';
import ForgotPassword from './Components/ForgotPassword';
import Footer from './Components/Footer';

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
          <Route path="/footer" element={<Footer />} />
      
        </Routes>
      </div>
    </Router>
  );
}

export default App;
