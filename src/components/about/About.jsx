import React, { useEffect, useRef, useState } from 'react';
import AboutCard from './AboutCard'
import ME from "../../assets/me-about.jpg"
import "./about.css"

const About = () => {
  // const [isVisible, setIsVisible] = useState(false);
  // const hiddenRef = useRef();

  // useEffect(() => {
  //   window.addEventListener('scroll', scrollHandler);
  //   return () => window.removeEventListener('scroll', scrollHandler);
  // }, [isVisible]);

  // const scrollHandler = () => {
  //   if (window.scrollY + window.innerHeight >= hiddenRef.current.offsetTop){
  //     if (window.scrollY > hiddenRef.current.offsetTop + hiddenRef.current.offsetHeight){
  //       setIsVisible(false);
  //     } else {
  //       setIsVisible(true);
  //     }
  //   } else {
  //     setIsVisible(false);
  //   }
  // }
  return (
      // <section id="about" ref={hiddenRef}>
      <section id="about">
        <h5>Get To Know Me</h5>
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="about" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <AboutCard
                title="Experience"
                content="3+ Years Working"
              />
              <AboutCard
                title="Clients"
                content="200+ Worldwide"
              />
              <AboutCard
                title="Projects"
                content="80+ Completed"
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam felis, efficitur vestibulum felis sed,
              commodo ornare purus. Quisque sem nunc, vehicula ac lobortis quis, aliquam et ipsum. Phasellus nec felis euismod,
              dictum leo vel, ullamcorper lectus. Ut bibendum diam ullamcorper augue tristique lacinia. Proin ut feugiat orci.
              Morbi finibus tempor tempus. Donec a nunc enim. Vivamus ut tempus elit, id commodo urna. Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Aliquam erat volutpat.
            </p>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
          </div>
        </div>
      </section>
  )
}

export default About