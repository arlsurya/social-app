import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className=' bg-gradient-to-t from-cyan-500 to-blue-500 h-screen flex justify-center items-center'>
    <div className='w-4/5 rounded-xl bg-gray-100 flex justify-center items-center py-8 xl:w-1/4'>
        <div className='flex flex-col justify-center items-center gap-4'>
            <h3 className='uppercase text-xl font-semibold tracking-wider'>Social App Register</h3>
            
            <div className='pt-4 flex flex-col gap-4 justify-center items-center w-4/5'>
               
                    <input  className='border-0 w-full ps-2 h-8' type="email" placeholder='Full Name' />   

                    <input  className='border-0 w-full ps-2 h-8' type="email" placeholder='Email' />   
               
                    <input className='border-0 w-full ps-2 h-8' type="password" placeholder='Password' />

                    <input className='border-0 w-full ps-2 h-8' type="password" placeholder='Re-Enter Password' />
               
                <button className='bg-blue-600 rounded-lg p-1 w-20 text-white mt-4 font-semibold tracking-wide hover:bg-blue-100 hover:text-gray-600 uppercase'>Register</button>
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