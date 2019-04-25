import React from 'react'
import './styles/CardList.css'
import css from '../images/css.png'
import animations from '../images/animations.jpg'
import bootstrap from '../images/bootstrap.jpg'
import html from '../images/html.png'
import js from '../images/js.png'
import react from '../images/react.png'
import responsive from '../images/responsive.jpg'
import Card from './Card.js'



class CardList extends React.Component {
    state = {
        array:[
            css,
            animations,
            bootstrap,
            html,
            js,
            react,
            responsive
        ],
        textArray:[
            'CSS : es un lenguaje de diseño gráfico para crear la presentación de un documento estructurado escrito en un lenguaje de marcado.',
            'Animations: Conjunto de gráficos, a una determinada velocidad, crean la ilusión de movimiento.Entre los formatos de animación.',
            'Bootstrap: es un Framework frontend que agilisa mucho el tiempo de dedicado a asignar estilos ',
            'Html: Es el elemento mas basico de construccion de una pag web y la manera el la cual organizar el contenido de la pag',
            'Js: Es la manera en la que se logra tener interaccion con el usuario y hacer dinamica una pag',
            'React: es un poderosa libreria de JS usada para dar velocidad a la pag y hacer representaciones graficas de datos ordenados',
            'Responsive: Es la manera de pensamiento al momento de construir una pag web para que esta se vea bien en  cualqier dispositivo'
        ]
    }
    constructor(props){
        super(props)

        this.i=0
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-4 col-tittle">
                            <h1>Conocimiento </h1><h1>en las siguientes areas</h1>
                        </div>
                    </div>
                </div>

                <div container>
                    <div className="row skils-list pt-4 pr-3 pl-4 pb-4">
                        {this.state.array.map(item => {
                            if(item!=css){
                                this.i=this.i+1
                            }
                            return (
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                    <Card image={item} text={this.state.textArray[this.i]}/>
                                </div>

                            )
                        })}
                    </div>
                </div>

            </div>
        )
    }
}

export default CardList