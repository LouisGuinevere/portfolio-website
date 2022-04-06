import React from 'react'
import {FaFacebook, FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa"
import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Louis Guinevere</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/LouisGuinevere" target="_blank" rel="noopener noreferrer"><FaFacebook/></a>
        <a href="https://www.instagram.com/louis.guinevere/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/louis-guinevere-35761a236/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/LouisGuinevere" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy;LOUIS. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer