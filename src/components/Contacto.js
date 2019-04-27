import React from 'react'
import './styles/Contacto.css'
import BadgeSocial from './BadgeSocial.js'


function Contacto(props){
    return(
        <div className="Contacto">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Contacto:</h1>
                        <div>
                            {props.data.map(RedSocial => {
                                return(
                                    <div key={RedSocial.id}>
                                    
                                        <BadgeSocial 
                                            url={RedSocial.url}
                                            href={RedSocial.href}
                                            comentario={RedSocial.comentario} 
                                        />
                                    </div>
                                )
                            })}
                            <img src="" alt="GitHub"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contacto