import React from 'react';
import './ChooseRicoz.css';
import whychoosericoz from '../../assets/whychoosericoz.png'
import whychoosericozsmall1 from '../../assets/whychoosericozsmall1.png'
import whychoosericozsmall2 from '../../assets/whychoosericozsmall2.png'
import whychoosericozsmall3 from '../../assets/whychoosericozsmall3.png'
import whychoosericozsmall4 from '../../assets/whychoosericozsmall4.png'

const ChooseRicoz = () => {
  return (
 <div className="whychoosericoz">
    <h1 className="whychoosericoz_heading">Why Choose Ricoz?</h1>
    <div className="whychoosericoz_content">
      <div className="whychoosericoz_image">
        <img src={whychoosericoz} alt="" />
      </div>
      <div className="whychoosericoz_text">
        <ul>
          <li>
           <img src={whychoosericozsmall1} alt="" />
           <div className="whychoosericoz_text-content">
            <h3>Vast Professional Network</h3>
            <p>Access a wide range of skilled tech professionals, all in one platform.</p>
           </div>
          </li>
          <li>
           <img src={whychoosericozsmall2} alt="" />
           <div className="whychoosericoz_text-content">
            <h3>Quality You Can Trust</h3>
            <p>Our stringent quality scoring system ensures that you receive exceptional services.</p>
           </div>
          </li>
          <li>
           <img src={whychoosericozsmall3} alt="" />
           <div className="whychoosericoz_text-content">
            <h3>Effortless Collaboration</h3>
            <p>Our integrated tools facilitate seamless communication and collaboration</p>
           </div>
          </li>
          <li>
           <img src={whychoosericozsmall4} alt="" />
           <div className="whychoosericoz_text-content">
            <h3>Save Time and Effort</h3>
            <p>With our platform, finding professionals and managing projects becomes effortless.</p>
           </div>
          </li>
        </ul>
      </div>
    </div>
 </div>
  )
}

export default ChooseRicoz
