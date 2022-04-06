import React from 'react'
import PortfolioCard from './PortfolioCard'
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.jpg"
import IMG6 from "../../assets/portfolio6.jpg"
import "./portfolio.css"

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <PortfolioCard image={IMG1} title="This is a portfolio item title" githubLink="https://github.com" liveDemoLink="https://github.com"/>
        <PortfolioCard image={IMG2} title="This is a portfolio item title" githubLink="https://github.com" liveDemoLink="https://github.com" />
        <PortfolioCard image={IMG3} title="This is a portfolio item title" githubLink="https://github.com" liveDemoLink="https://github.com" />
        <PortfolioCard image={IMG4} title="This is a portfolio item title" githubLink="https://github.com" liveDemoLink="https://github.com" />
        <PortfolioCard image={IMG5} title="This is a portfolio item title" githubLink="https://github.com" liveDemoLink="https://github.com" />
        <PortfolioCard image={IMG6} title="This is a portfolio item title" githubLink="https://github.com" liveDemoLink="https://github.com" />
      </div>
    </section>
  )
}

export default Portfolio