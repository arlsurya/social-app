import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from  'axios'
// import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function Register() {

  const [fullName , setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')

  const navigate = useNavigate()


       // backend api url
       const URL = 'http://127.0.0.1:1010/api/user/register'


       // header configuration
       const headers = {
         'Content-Type': 'application/json'
       }
     
   
         // ===============================================
   
   

  const handleSubmit = ()=>{
 
    const registerData = {
      fullName: fullName,
      email: email,
      password: password,
      rePassword: rePassword
    }

    axios.post(URL,registerData,{headers}).then((response)=>{

      if(response.data.Code === 0){
  
        toast.error(`${response.data.message}`, {
          position: 'top-right',
        });
  
      }else if(response.data.Code === 1){
    
        toast.success(`${response.data.message}`, {
          position: 'top-right',
        });

        setTimeout(() => {
          navigate('/login')
          
        }, 4000);
  
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
            <h3 className='uppercase text-xl font-semibold tracking-wider'>Social App Register</h3>
            
            <div className='pt-4 flex flex-col gap-4 justify-center items-center w-4/5'>
               
                    <input onChange={(e)=>setFullName(e.target.value)}  className='border-0 w-full ps-2 h-8' type="text" placeholder='Full Name' />   

                    <input onChange={(e)=>setEmail(e.target.value)}  className='border-0 w-full ps-2 h-8' type="email" placeholder='Email' />   
               
                    <input onChange={(e)=>setPassword(e.target.value)} className='border-0 w-full ps-2 h-8' type="password" placeholder='Password' />

                    <input onChange={(e)=>setRePassword(e.target.value)} className='border-0 w-full ps-2 h-8' type="password" placeholder='Re-Enter Password' />
               
                <button onClick={handleSubmit} className='bg-blue-600 rounded-lg p-1 w-20 text-white mt-4 font-semibold tracking-wide hover:bg-blue-100 hover:text-gray-600 uppercase'>Register</button>
                <ToastContainer position="top-right" />
            </div>
            
            <div className='flex justify-between items-center gap-20 text-sm mt-8'>
          <Link to='/login'><p className=' text-gray-500 cursor-pointer hover:text-gray-900'>Back to Login</p> </Link>
                {/* <p  className=' bg-gray-100 '>Forgot Password?</p> */}
             </div>
             

        </div>
    </div>
</div>
  )
}

export default Register