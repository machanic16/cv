import React from 'react'
import './styles/CardList.css'
import Card from './Card.js'
import './styles/CardList.css'


class CardList extends React.Component {
    render() {
        return (
            <div className="CardList">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-4 col-tittle">
                            <h1>Conocimiento </h1><h1>en las siguientes areas</h1>
                        </div>
                    </div>
                </div>

                <div className="container ">
                    <div className="row skils-list pt-4 pr-3 pl-4 pb-4">
                        {this.props.data.map(skills => {
                            return (
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={skills.id}>
                                    <Card image={skills.src} text={skills.comentario}/>
                                    {console.log(skills.src)}
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