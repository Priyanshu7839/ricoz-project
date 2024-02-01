
import './Navbar.css';
import logo from '../../assets/logo.png'
import React , {useState} from 'react'

import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";



const Menu =  () => (
  <>  <p><a href="#home">Home</a></p>
  <p><a href="#wgpt3">What is GPT Builder</a></p>
  <p><a href="#blog">Open AI</a></p>
  <p><a href="#features">Case studies </a></p>
  <p><a href="#blog">Library</a></p>
  </>

);

const Navbar = () => {
  const [toggleMenu , setToggleMenu] = useState(false);
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



      <div className="ricoz_navbar-menu">
              {toggleMenu 
              ? <IoClose size={26} color='#fff' onClick={()=>setToggleMenu(false)}/>
              : <CiMenuBurger size={26} color='#fff' onClick={()=>setToggleMenu(true)}/>
               }
               {
                toggleMenu && (
                  <div className="ricoz_navbar-menu_container">
                    <div className="ricoz_navbar-menu_container-links">
                      <Menu/> 
                      <div className="ricoz_navbar-menu_container-links-sign">
                          <button type='button'>SignUP</button>
                        </div>
                    </div>
                  </div>
                )
               }
        </div>
    </div>
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Navbar
