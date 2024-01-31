import React from 'react';
import './Header.css';
import blobimage1 from '../../assets/blob-image-1.png';
import blobimage2 from '../../assets/blob-image-2.png';


const Header = () => {
  return (
   <div className="header">
    <div className="header_text">
      <h1>Discover Top Tech Professionals in Minutes.</h1>
      <p>Streamline Your Business Needs with Ricoz's All-in-One Tech Service Hub.</p>
      <div className="header_getstarted-button"><button type="button">Get Started</button></div>
    </div>
    <div className="header_blob-images">
      <img src={blobimage1} alt="" />
      <img src={blobimage2} alt="" />
    </div>
   </div>
  )
}

export default Header
