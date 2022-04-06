import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'

const ExperienceDetail = (props) => {
    const {title, content} = props;
    return (
        <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
                <h4>{title}</h4>
                <small className="text-light">{content}</small>
            </div>
        </article>
    )
}

export default ExperienceDetail