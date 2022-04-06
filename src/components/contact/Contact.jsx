import React, { useRef } from 'react'
import "./contact.css"
import { MdOutlineEmail } from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"
import { BsInstagram } from "react-icons/bs"
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_nu42nbo', 'template_7hqzg1z', form.current, 'L9OqAUwwkNkUHqi92');
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <a href="mailto:dung.lv4work@gmail.com">dung.lv4work@gmail.com</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon"/>
            <h4>Messenger</h4>
            <a href="https://m.me/Arturia1909" target="_blank" rel="noopener noreferrer">Louis Guinevere</a>
          </article>
          <article className="contact__option">
            <BsInstagram className="contact__option-icon"/>
            <h4>Instagram</h4>
            <a href="https://www.instagram.com/schne1zel/" rel="noopener noreferrer">Louis Guinevere</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required/>
          <input type="text" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="9" placeholder="Your Message" required></textarea>
          <input type="submit" className="btn btn-primary" value="Send"/>
        </form>
      </div>
    </section>
  )
}

export default Contact