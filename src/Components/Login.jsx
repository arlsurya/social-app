import React, { useState } from 'react'
import '../Components/Login.css'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = ()=>{

  const loginData = {
    email:email,
    password:password
  }
  console.log(loginData)
  }


  return (
    <div className="main">
    <div className='container'>
      <div className="login-title">Login</div>
      <div className="login-section">
        <label className='label' htmlFor="email">Email:</label><br />
        <input value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control' type="email" /><br />
        <label className='label' htmlFor="password">Password:</label><br />
        <input value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control' type="password" />
        <div className="loginBtn">
        <button onClick={handleSubmit} className='btn'>Login</button>

        </div>
      </div>

    </div>
    </div>
  )
}

export default Login