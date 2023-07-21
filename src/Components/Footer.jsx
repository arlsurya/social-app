import React from 'react'

function Footer() {
  return (
    <>
    <footer className="container ">
      <div className='flex flex-row'>
        <div className=' basis-1/4'>
          <h3>LOGO</h3>
          <p>We work with a passion of taking challenges and creating new ones in advertising sector.</p>
          <button className=''>About Us</button>
        </div>
        <div className='basis-1/4'>
          <h3>Official Info</h3>
          <ul>
            <li>
              Baneshwor, Kathmandu, Bagmati, Nepal
            </li>
            <li>
              +977 9801034111
            </li>
            <h5>Open Hours:</h5>
            <ul>
              <li>
                Mon - Sat: 8pm - 5pm,
              </li>
              <li>
                Sunday: CLOSED
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer;