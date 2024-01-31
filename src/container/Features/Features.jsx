import React from 'react';
import './Features.css';
import featuresimage1 from '../../assets/features_image_1.png';
import featuresimage2 from '../../assets/features_image_2.png';
import featuresimage3 from '../../assets/features_image_3.png';

const Features = () => {
  return (
   <div className="features">
      <h1 className="features-heading">Explore Our Platform's Unique Features</h1>
      <div className="features_cards">
        <div className="features_card">
          <img src={featuresimage1} alt="" />
          <h3>Wide Range of Services</h3>
          <p>Find everything from web development to marketing under one roof. Our platform offers a diverse array of tech services</p>
        </div>
        <div className="features_card">
          <img src={featuresimage2} alt="" />
          <h3>Instant Search</h3>
          <p>Get connected to top tech professionals within moments. Our intuitive search function ensures quick access.</p>
        </div>
        <div className="features_card">
          <img src={featuresimage3} alt="" />
          <h3>Quality Scoring</h3>
          <p>We maintain high service standards. Our unique scoring system ensures you receive top-notch quality from professionals.</p>
        </div>
      </div>
   </div>
  )
}

export default Features
