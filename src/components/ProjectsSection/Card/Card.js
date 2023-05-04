//  general card overview to display individual projects.
// to include: : Title, Body (Image and details), Links (Website and Github repo)

import React from 'react'
import Title from '../Title/Title'
import Body from '../Body/Body'
import Links from '../Links/Links'

import './Card.css'

function Card(props) {
    return (
        <div className="projectCard">
            < Title title={props.projectObject.title}/>
            
            < Body 
            image={props.projectObject.image} 
            title={props.projectObject.title} 
            details={props.projectObject.details} />

            {/* {Links} */}
            < Links  
            href={props.projectObject.href}
            githubLink={props.projectObject.githubLink} />
        </div>
    )
}

export default Card