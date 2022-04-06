import React from 'react'
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/louis-guinevere-35761a236/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/LouisGuinevere" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
      <a href="https://www.instagram.com/louis.guinevere/" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
      <a href="https://www.facebook.com/LouisGuinevere" target="_blank" rel="noopener noreferrer"><BsFacebook /></a>
    </div>
  )
}

export default HeaderSocials