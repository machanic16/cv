import React from 'react'
import './styles/Card.css'

function Card(props) {
    return (
        <div className="pt-4">
            <div className="card " >
                <img src={props.image} className="card-img-top" height="150px" alt="Skill" />
                <div className="card-body">
                <h1>{props.name}</h1>
                    <p className="card-text">{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default Card