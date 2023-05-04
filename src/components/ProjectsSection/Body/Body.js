import React from 'react'
import './Body.css'

// Bodt for the Image and Details

function Body(props) {
    return (
        <div className="projectBody">
            <div className="projectImage">
                <img 
                src={"/resources/img/projects/"+props.image} 
                alt={props.title} />
            </div>

            <div className="projectDetails">
                <p>{props.details}</p>
            </div>

        </div>
    )
}

export default Body
