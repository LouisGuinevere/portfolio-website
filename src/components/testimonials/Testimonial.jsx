import React from 'react'

const Testimonial = (props) => {
    const {avatar, name, review} = props;
    return (
        <div className="testimonial">
            <div className="client__info">
                <div className="client__avatar">
                    <img src={avatar} alt="client avatar" />
                </div>
                <h4 className="client__name">{name}</h4>
            </div>
            <small className="client__review">{review}</small>
        </div>
    )
}

export default Testimonial