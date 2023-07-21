import React, { useState } from 'react'
import '../Components/Login.css'
import axios from  'axios'

function Login() {


  // getting email from the user input
  const [email, setEmail] = useState('')
  // getting password from the user input
  const [password, setPassword] = useState('')

  // ===============================================

  // backend api url
  const URL = 'http://127.0.0.1:3001/api/user/login'

  // header configuration
  const headers = {
    'Content-Type': 'application/json'
  }

  // ===============================================



  // when user hit login button
  const handleSubmit = () => {
    const loginData = {
      email: email,
      password: password
    }
    console.log(loginData)

    
  axios.post(URL,loginData,{headers}).then((response)=>{
    console.log(response)
  })
  .catch((error)=>{
    console.log(error)
  })
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