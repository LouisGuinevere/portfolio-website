import React, {useState} from 'react'
import { AiOutlineHome, AiOutlineUser, AiOutlineBook } from "react-icons/ai"
import { BiBook, BiMessageSquareDetail } from "react-icons/bi"
import { BsAward } from "react-icons/bs"
import { VscFeedback } from "react-icons/vsc"

import "./nav.css"

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <nav>
      <a href="#home" className={activeNav === "#home" ? "active" : ""} onClick={() => setActiveNav("#home")}><AiOutlineHome /></a>
      <a href="#about" className={activeNav === "#about" ? "active" : ""} onClick={() => setActiveNav("#about")}><AiOutlineUser /></a>
      <a href="#experience" className={activeNav === "#experience" ? "active" : ""} onClick={() => setActiveNav("#experience")}><AiOutlineBook /></a>
      <a href="#services" className={activeNav === "#services" ? "active" : ""} onClick={() => setActiveNav("#services")}><BiBook /></a>
      <a href="#portfolio" className={activeNav === "#portfolio" ? "active" : ""} onClick={() => setActiveNav("#portfolio")}><BsAward /></a>
      <a href="#testimonials" className={activeNav === "#testimonials" ? "active" : ""} onClick={() => setActiveNav("#testimonials")}><VscFeedback /></a>
      <a href="#contact" className={activeNav === "#contact" ? "active" : ""} onClick={() => setActiveNav("#contact")}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav