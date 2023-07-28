import React from 'react'

function Footer() {
  return (
    <>
    <footer className="p-10 bg-slate-600">
      <div className='container mx-auto flex  text-amber-100 px-10 justify-between'>
        <div className=' basis-1/4 px-3'>
          <h3 className=' text-3xl py-3'>LOGO</h3>
          <p className='py-3'>We work with a passion of taking challenges and creating new ones in advertising sector.</p>
          <button className=' rounded-full bg-amber-800 px-3 py-1'>About Us</button>
        </div>
        <div className='basis-1/4 px-3'>
          <h3 className="font-semibold text-3xl">Official Info:</h3>
          <ul className='py-5'>
            <li className='text-amber-50'>
              Baneshwor, Kathmandu, Bagmati, Nepal
            </li>
            <li className='text-amber-50'>
              +977 9801034111
            </li>
            <h5 className='pt-5 font-normal text-xl'>Open Hours:</h5>
            <ul className='text-amber-50'>
              <li>
                Mon - Sat: 8pm - 5pm,
              </li>
              <li>
                Sunday: CLOSED
              </li>
            </ul>
          </ul>
        </div>
        <div className='basis-1/4'>
          <h3>Hello</h3>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer;