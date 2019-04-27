import React from 'react'

function Card(props) {
    return (
        <div className="pt-4">
            <div className="card " >
                <img src="../images/css.png" className="card-img-top" height="150px" alt="Skill" />
                <div className="card-body">
                    <p className="card-text">{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default Card