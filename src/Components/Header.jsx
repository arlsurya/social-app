import React from 'react'
import "../Components/Header1.css"
function Header() {
  return (
    <div className='div'>
      <ul className='ul'>
            <li><a className='a' href="/">Home</a></li>
            <li><a className='a' href="/about">About</a></li>
            <li><a className='a' href="/contact">Contact</a></li>
            <li></li>
          </ul>
    </div>
  )
}
 
export default Header