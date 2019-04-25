import React from 'react'

function Card(props) {
    return (
        <div className="pt-4">
            <div className="card " >
                <img src={props.image} className="card-img-top" height="150px" alt="..." />
                <div className="card-body">
                    <p className="card-text">{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default Card