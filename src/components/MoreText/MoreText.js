import './moreText.css'
import React from "react"

function MoreText(props) {
    return (
        <p className="services-section__card-desc card-desc">{props.text}</p>
    )
}
export default MoreText