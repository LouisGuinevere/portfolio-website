import React from 'react'

const PortfolioCard = (props) => {
    const {image, title, githubLink, liveDemoLink} = props;
    return (
        <article className="portfolio__item">
            <div className="portfolio__item-image">
                <img src={image} alt="" />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
                <a href={githubLink} className="btn" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={liveDemoLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
        </article>
    )
}

export default PortfolioCard