import React from 'react'
import './styles/prueba.css'
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
        ]
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-3 col-tittle">
                            <h1>Conocimiento </h1><span>en las siguientes areas</span>
                        </div>
                    </div>
                </div>

                <div container>
                    <div className="row">
                        {this.state.map(item => {
                            return (
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                    <Card image={item.img} text={item.text}/>
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