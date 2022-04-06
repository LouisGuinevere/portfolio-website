import React from 'react'
import CTA from "./CTA"
import ME from "../../assets/me.png"
import HeaderSocials from './HeaderSocials'
import "./header.css"

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h4>Hello, I'm </h4>
        <h1>Louis Guinevere</h1>
        <h3 className="text-light">Fullstack Developer</h3>
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <CTA className="cta"/>
      </div>
    </header>
  )
}

export default Header