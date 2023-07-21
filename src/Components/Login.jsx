import React from 'react'
import '../Components/Login.css'

function Login() {

  return (
    <div className="main">
    <div className='container'>
      <div className="login-title">Login</div>
      <div className="login-section">
        <label className='label' htmlFor="email">Email:</label><br />
        <input className='form-control' type="email" /><br />
        <label className='label' htmlFor="password">Password:</label><br />
        <input className='form-control' type="password" />
        <div className="loginBtn">
        <button className='btn'>Login</button>

        </div>
      </div>

    </div>
    </div>
  )
}

export default Login