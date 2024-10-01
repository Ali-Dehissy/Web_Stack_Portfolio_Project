import React, { useRef } from 'react';
import Navbar from './Navbar'
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
      
      emailjs.sendForm('service_hsldulf', 'template_zd9mkgp', form.current, 'MzycEju2X270zHi3Z')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
      <div className='contact-background'>
      <div className="contact-container">
        <Navbar />
        <div className="contact-content">
          <p className="contact-header">
            Contact us
          </p>       
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <label className="form-label">Name</label>
            <input type="text" name="user_name" className="form-input" required />
            
            <label className="form-label">Email</label>
            <input type="email" name="user_email" className="form-input" required />
            
            <label className="form-label">Message</label>
            <textarea name="message" className="form-textarea" required></textarea>   
            
            <input type="submit" value="Send" className="form-submit" />        
          </form>
        </div>
      </div>
      </div>
    );
  }
  
  export default Contact;