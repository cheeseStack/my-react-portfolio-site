import React from 'react'
import './Links.css'

function Links(props) {
    return (
        <div className="projectLinks">
            <div className="siteLink">
                <h3><a href={props.href} target='_blank'>Check it out</a></h3>
            </div>

            <div className="githubLink">
                <h3><a href={props.githubLink} target='_blank'>GitHub link</a></h3>
            </div>
        </div>
    )
}

export default Links