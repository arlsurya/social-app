import React, { useState } from 'react'
import '../Components/Login.css'
import axios from  'axios'
import { Link } from 'react-router-dom'

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
    // <div className="main">
    //   <div className='container'>
    //     <div className="login-title">Login</div>
    //     <div className="login-section">
    //       <label className='label' htmlFor="email">Email:</label><br />
    //       {/* onChange event to to get user email input value */}
    //       <input value={email} onChange={(e) => setEmail(e.target.value)} className='form-control' type="email" /><br />
    //       <label className='label' htmlFor="password">Password:</label><br />
    //       {/* onChange event to to get user password value */}
    //       <input value={password} onChange={(e) => setPassword(e.target.value)} className='form-control' type="password" />
    //       <div className="loginBtn">
    //         {/* handleSubmit function defined on top */}
    //         <button onClick={handleSubmit} className='btn'>Login</button>

    //       </div>
    //     </div>

    //   </div>
    <div className=' bg-gradient-to-t from-cyan-500 to-blue-500 h-screen flex justify-center items-center'>
        <div className='w-4/5 rounded-xl bg-gray-100 flex justify-center items-center py-8 xl:w-1/4'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <h3 className='uppercase text-xl font-semibold tracking-wider'>Social App Login</h3>
                
                <div className='pt-4 flex flex-col gap-4 justify-center items-center w-4/5'>
                   
                        <input  className='border-0 w-full ps-2 h-8' type="email" placeholder='Email' />   
                   
                  
                        <input className='border-0 w-full ps-2 h-8' type="password" placeholder='Password' />
                   
                    <button className='bg-blue-600 rounded-lg p-1 w-20 text-white mt-4 font-semibold tracking-wide hover:bg-blue-100 hover:text-gray-600 uppercase'>Log in</button>
                </div>
                
                <div className='flex justify-between items-center gap-20 text-sm mt-8'>
               <Link to='/register' >  <p className=' text-gray-500 cursor-pointer hover:text-gray-900'>Don't have an account?</p> </Link>  
                <Link to='/forgotpassword'><p  className=' text-gray-500 cursor-pointer hover:text-gray-900'>Forgot Password?</p></Link>
                 </div>
                 

            </div>
        </div>
    </div>
  )
}

export default Login