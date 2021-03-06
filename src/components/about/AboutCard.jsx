import React from 'react'
import { FaAward } from 'react-icons/fa'

const AboutCard = (props) => {
    const {title, content} = props;
    return (
        <article className="about__card">
            <FaAward className="about__icon" />
            <h4>{title}</h4>
            <small>{content}</small>
        </article>
    )
}

export default AboutCard