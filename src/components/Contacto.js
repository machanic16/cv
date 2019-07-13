import React from 'react'
import './styles/Contacto.css'
import BadgeSocial from './BadgeSocial.js'


function Contacto(props) {
    return (
        <div className="Contacto" id="contacto">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Contacto:</h1>

                    </div>
                </div>
                <div className="row" >
                    {props.data.map(RedSocial => {
                        return (
                            <div className="col-12 col-md-6 col-lg-4" key={RedSocial.id}>
                                <BadgeSocial
                                    url={RedSocial.url}
                                    href={RedSocial.href}
                                    comentario={RedSocial.comentario}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Contacto