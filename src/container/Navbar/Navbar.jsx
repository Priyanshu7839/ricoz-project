import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <>
    <div className="navbar flex items-center justify-between px-[10rem]">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="nav-items">
        <ul className='flex items-center justify-center gap-[5rem]'>
          <li>About</li>
          <li>Services</li>
          <li>Courses</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="signup">
        <button type="button" className='Signup_button'>Signup</button>
      </div>
    </div>
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Navbar
