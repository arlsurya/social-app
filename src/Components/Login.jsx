import React from 'react'

function Login() {
  return (
  
        <div className='w-4/5 rounded-xl bg-gray-100 flex justify-center items-center py-8 xl:w-1/4'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <h3 className='uppercase text-xl font-semibold tracking-wider'>Social App Login</h3>
                
                <div className='pt-4 flex flex-col gap-4 justify-center items-center w-4/5'>
                   
                        <input  className='border-0 w-full ps-2 h-8' type="email" placeholder='Email' />   
                   
                  
                        <input className='border-0 w-full ps-2 h-8' type="password" placeholder='Password' />
                   
                    <button className='bg-blue-600 rounded-lg p-1 w-20 text-white mt-4 font-semibold tracking-wide hover:bg-blue-100 hover:text-gray-600 uppercase'>Log in</button>
                </div>
                
                <div className='flex justify-between items-center gap-20 text-sm mt-8'>
                    <p className=' text-gray-500 cursor-pointer hover:text-gray-900'>Don't have an account?</p>
                    <p  className=' text-gray-500 cursor-pointer hover:text-gray-900'>Forgot Password?</p>
                 </div>
                 

            </div>
        </div>
   
  )
}

export default Login