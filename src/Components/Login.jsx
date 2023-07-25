import React, { useState } from 'react'
import '../Components/Login.css'
import axios from  'axios'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';




function Login() {


  // getting email from the user input
  const [email, setEmail] = useState('')
  // getting password from the user input
  const [password, setPassword] = useState('')

  const [responseMessage, setResponseMessage] = useState('')

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const navigate = useNavigate()


  // ===============================================

  // backend api url
  const URL = 'http://127.0.0.1:1010/api/user/login'

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

    if(response.data.Code === 0){

      toast.error(`${response.data.message}`, {
        position: 'top-right',
      });

    }else if(response.data.Code === 1){
  
      toast.success(`${response.data.message}`, {
        position: 'top-right',
      });
      navigate('/home')

      setIsLoggedIn(true)



    }

    setResponseMessage(response.data.message)


  })
  .catch((error)=>{
    console.log(error)
  })
  }


  return (

    <div className=' bg-gradient-to-t from-cyan-500 to-blue-500 h-screen flex justify-center items-center'>
        <div className='w-4/5 rounded-xl bg-gray-100 flex justify-center items-center py-8 xl:w-1/4'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <h3 className='uppercase text-xl font-semibold tracking-wider'>Social App Login</h3>
                
                <div className='pt-4 flex flex-col gap-4 justify-center items-center w-4/5'>
                   
                        <input onChange={(e)=>setEmail(e.target.value)}  className='border-0 w-full ps-2 h-8' type="email" placeholder='Email' />   
                   
                  
                        <input onChange={(e)=>setPassword(e.target.value)} className='border-0 w-full ps-2 h-8' type="password" placeholder='Password' />
                   
                    <button onClick={handleSubmit} className='bg-blue-600 rounded-lg p-1 w-20 text-white mt-4 font-semibold tracking-wide hover:bg-blue-100 hover:text-gray-600 uppercase'>Log in</button>
                    <ToastContainer position="top-right" />
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