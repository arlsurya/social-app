import React from 'react'

function Header() {
  return (
    <header className='bg-slate-600 rounded-b-xl text-lime-100 drop-shadow-2xl'>
      <div className='container mx-auto justify-between bg-slate-600 p-3 flex '>
        <div className='flex my-auto'>
          <div className='pe-3 '>
          <i className="bi bi-list text-3xl"></i>
          </div>
          <h3 className=' my-auto text-3xl'>Welcome to Our App!</h3>
        </div>
        <div className=' flex justify-end'>
          <div className='w-16 h-16 rounded-full bg-blue-300 text-end '></div>
        </div> 
      </div>
    </header>
  )
}
 
export default Header