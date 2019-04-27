import React from 'react'

function BadgeSocial(props) {
    return (
        <div className="container-fluid">
            <a
                href={props.href} 
                target="_blank"
                rel="noopener noreferrer">
                <img
                    alt="Contactame en"
                    src={props.url}
                    title="Contactame en" />
                <h5>{props.comentario}</h5>
            </a>
        </div>
    )
}
export default BadgeSocial