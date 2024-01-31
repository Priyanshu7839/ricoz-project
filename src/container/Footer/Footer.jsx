import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-items">
        <ul className='flex gap-[5rem]'>
          <li>
            <img src={logo} alt="" />
          </li>
          <li>
            <ul className='flex flex-col gap-[15px]'>
              <li className='footer-item-heading'>Company</li>
              <li className='footer-item-subheading'>About Us</li>
              <li className='footer-item-subheading'>Services</li>
              <li className='footer-item-subheading'>Courses</li>
              <li className='footer-item-subheading'>Contact Us</li>
            </ul>
          </li>
          <li>
            <ul  className='flex flex-col gap-[15px]'>
              <li className='footer-item-heading'>Services</li>
              <li className='footer-item-subheading'>Web Development</li>
              <li className='footer-item-subheading'>Performance Marketing</li>
              <li className='footer-item-subheading'>Social Media Marketing</li>
              <li className='footer-item-subheading'>App Development</li>
              <li className='footer-item-subheading'>Graphic Design</li>
              <li className='footer-item-subheading'>UI/UX Design</li>
            </ul>
          </li>
          <li>
            <ul  className='flex flex-col gap-[15px]'>
              <li className='footer-item-heading'>Email Us</li>
              <li className='footer-item-subheading'>Ricoz1234@gmail.com</li>
              <li className='footer-item-heading'>Contact Us</li>
              <li className='footer-item-subheading'>+91 9098885099</li>
              <li className='flex text-white text-[20px] items-center justify-around'>
              <FaFacebook />
              <FaTwitter />
              <FaLinkedin />
              <FaInstagram />



              </li>
            </ul>
          </li>
          <li>
            <ul className='flex flex-col gap-[15px] w-[400px] items-start'>
              <li className='footer-item-heading-subscribe'>Subscribe to Newsletter</li>
              <li className='footer-item-input'> 
                <input type="text"  placeholder='Enter Email'/>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="footer-rights">
        <h1>© 2023 Ricoz. All Rights Reserved.</h1>
      </div>
    </div>
  )
}

export default Footer
