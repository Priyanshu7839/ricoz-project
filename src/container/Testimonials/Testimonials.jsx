import React from 'react';
import './Testimonials.css';
import { FaStar } from "react-icons/fa6";

import testimonials_image1 from '../../assets/testimonials_image1.png';
import testimonials_image2 from '../../assets/testimonials_image2.png';
import testimonials_image3 from '../../assets/testimonials_image3.png';

const Testimonials = () => {
  return (
   <div className="testimonials">
    <h1 className='testimonials_heading'>Real Stories from Real Professionals</h1>
    <div className="testimonials_cards">
      <div className="testimonials_card flex flex-col gap-[1rem]">
        <div className="testimonials_card_client_info flex items-center gap-[30px]">
          <img src={testimonials_image1} alt="" />
          <div>
            <h3>John Doe</h3>
            <h2>Graduated</h2>
          </div>
        </div>

        <h1>"I recommend this to All"</h1>

        <p>Ricoz connected me with amazing clients. The quality scoring system ensures I work on exciting projects while maintaining my reputation.</p>

        <div className="testimonials_rating flex gap-[5px]  text-yellow-400">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        </div>
      </div>
      <div className="testimonials_card flex flex-col gap-[1rem]">
        <div className="testimonials_card_client_info flex items-center gap-[30px]">
          <img src={testimonials_image2} alt="" />
          <div>
            <h3>Alice Smith</h3>
            <h2>Ui/UX designer</h2>
          </div>
        </div>

        <h1>“The Support is Awesome”</h1>

        <p>As a freelancer, Ricoz's instant search feature saves me time. It's a one-stop platform for all my degital marketing needs.</p>

        <div className="testimonials_rating flex gap-[5px] text-yellow-400">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        </div>
      </div>
      <div className="testimonials_card flex flex-col gap-[1rem]  ">
        <div className="testimonials_card_client_info flex items-center gap-[30px]">
          <img src={testimonials_image3} alt="" />
          <div>
            <h3>Sophia Miller</h3>
            <h2>Student</h2>
          </div>
        </div>

        <h1>“A Game Changer For Us”</h1>

        <p>I've learned and earned on Ricoz. The courses are well-designed, and the integrated tools streamline communication with clients.</p>

        <div className="testimonials_rating flex gap-[5px] text-yellow-400">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        </div>
      </div>
    </div>
   </div>
  )
}

export default Testimonials
