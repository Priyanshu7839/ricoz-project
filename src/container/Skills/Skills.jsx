import React from 'react';
import './Skills.css';
import skills1 from '../../assets/skills1.png'
import skills2 from '../../assets/skills3.png'
import skills3 from '../../assets/skills3.png'

const Skills = () => {
  return (
   <div className="skills">
    <div className="skills-heading">
        <div className="skills-heading-sub-headings">
          <h3>Unlock New Skills with Our Courses</h3>
          <p>Learn and Grow at Your Own Pace.</p>
        </div>
        <div className="skills_explore-button">
          <button type="button">Explore More</button>
        </div>
    </div>

    <div className="skills_cards">
        <div className="skills_card">
          <img src={skills1} alt="" />
          <div className='pb-[2rem] px-[2rem] flex flex-col gap-[20px] '>
          <h3>Web Development Mastery</h3>
          <h2>₹ 60,000</h2>
          <p>Master the art of web development with our comprehensive course. Learn coding, design, and deployment.</p>
          <a href="#">Learn More</a>
          </div>
        </div>

        <div className="skills_card">
          <img src={skills1} alt="" />
          <div className='pb-[2rem] px-[2rem] flex flex-col gap-[20px] '>
          <h3>Digital Marketing Fundamentals</h3>
          <h2>₹ 80,000</h2>
          <p>Navigate the Digital Landscape. Explore the world of digital marketing. Acquire skills in SEO, social media, and online advertising.</p>
          <a href="#">Learn More</a>
          </div>
        </div>

        <div className="skills_card">
          <img src={skills1} alt="" />
          <div className='pb-[2rem] px-[2rem] flex flex-col gap-[20px] '>
          <h3>Graphic Design Fundamentals</h3>
          <h2>₹ 60,000</h2>
          <p>Unleash your creativity with graphic design. Learn layout, typography, and visual communication.</p>
          <a href="#">Learn More</a>
          </div>
        </div>
       </div>
   </div>
  )
}

export default Skills
