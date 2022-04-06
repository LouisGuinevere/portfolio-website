import React from 'react'
import Service from "./Service"

const ServiceList = (props) => {
    const {title, contents} = props
    return (
        <article className="service">
            <div className="service__head">
                <h3>{title}</h3>
            </div>
            <ul className="service__list">
                {contents.map((content) => {
                    return <Service content={content} />
                })}
            </ul>
        </article>
    )
}

export default ServiceList