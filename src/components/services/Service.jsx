import React from 'react'
import { BiCheck } from "react-icons/bi"

const Service = (props) => {
    const {content} = props;
    return (
        <li>
            <BiCheck className="service__list-icon" />
            <p>{content}</p>
        </li>
    )
}

export default Service