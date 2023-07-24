import React from 'react'
import {Outlet, Link} from 'react-router-dom'

function LandingPage() {
  return (
    <div className=' bg-gradient-to-t from-cyan-500 to-blue-500 h-screen flex justify-center items-center'>
    <div className='w-4/5 rounded-xl bg-gray-100 flex justify-center items-center py-8 xl:w-1/4'>
        <div className='flex flex-col justify-center items-center gap-4'>
        <Link to='/login'><h3 className='uppercase text-xl font-semibold tracking-wider cursor cursor-pointer'>Go To Login Page</h3></Link>
            


        </div>
    </div>
</div>
  )
}

export default LandingPage