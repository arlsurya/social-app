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
}

export default App;
