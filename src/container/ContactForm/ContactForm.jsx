import React from 'react'
import './ContactForm.css';
import contactformimage from '../../assets/contactformimage.png';
import contacticon1 from '../../assets/contacticon1.png';
import contacticon2 from '../../assets/contacticon2.png';
import contacticon3 from '../../assets/contacticon3.png';

const ContactForm = () => {
  return (
    <div className='contactform'>
      <div className="contactform-filling">
        <div className="contactform_image">
            <img src={contactformimage} alt="" />
        </div>
        <div className="contactform_inputs">
            <h1 className="contactform-inputs">Get In Touch</h1>

            <div className="input-box">
                       <input type="text" required/>
                       <label>Name</label>
                </div>

                <div className='flex w-[80%] gap-[5rem]'>
            <div className="input-box">
                       <input type="email" required/>
                       <label>Email</label>
                </div>
            <div className="input-box">
                       <input type="text" required/>
                       <label>PhoneNumber</label>
                </div>
                </div>

                <div className="input-box">
                       <input type="text" required/>
                       <label>Message</label>
                </div>
            

            <div className="contactform_submitButton"><button type="button">Submit Now</button></div>
        </div>
      </div>
      <div className="contactform_contact-information">
          <div className="flex gap-[20px] items-center">
            <img src={contacticon1} alt="" />
            <p>+91-7011112666</p>
          </div>
          <div className="flex gap-[20px] items-center">
            <img src={contacticon2} alt="" />
            <p>+91-info@Ricoz.in</p>
          </div>
          <div className="flex gap-[20px] items-center">
            <img src={contacticon3} alt="" />
            <p>Ricoz.in</p>
          </div>
      </div>
    </div>
  )
}

export default ContactForm
