import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
        <div className='mainLogo'><h1>Kaju</h1></div>
        <div className='navLinks'>
            <ul className='links'>
                <li className='link'>Home</li>
                <li className='link'>Sell</li>
                <li className='link'>Cart</li>
                <li className='link'>Log in</li>
            </ul>
           
        </div>
    </div>
  )
}

export default Navbar