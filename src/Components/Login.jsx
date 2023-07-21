import React, { useState } from 'react'
import '../Components/Login.css'

function Login() {

  // getting email from the user input
  const [email, setEmail] = useState('')
  // getting password from the user input
  const [password, setPassword] = useState('')

  // when user hit login button
  const handleSubmit = () => {
    const loginData = {
      email: email,
      password: password
    }
    console.log(loginData)
  }


  return (
    <div className="main">
      <div className='container'>
        <div className="login-title">Login</div>
        <div className="login-section">
          <label className='label' htmlFor="email">Email:</label><br />
          {/* onChange event to to get user email input value */}
          <input value={email} onChange={(e) => setEmail(e.target.value)} className='form-control' type="email" /><br />
          <label className='label' htmlFor="password">Password:</label><br />
          {/* onChange event to to get user password value */}
          <input value={password} onChange={(e) => setPassword(e.target.value)} className='form-control' type="password" />
          <div className="loginBtn">
            {/* handleSubmit function defined on top */}
            <button onClick={handleSubmit} className='btn'>Login</button>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Login