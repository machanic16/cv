import React from 'react'
import './styles/Carrousel.css'
import CarrouselData from '../data/CarouselImageData.json'

class Carrousel extends React.Component {
    render() {
        return (
            <div id="Carrousel">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2" className="active"></li>
                    </ol>
                    <div className="carousel-inner">
                        {CarrouselData.map(item => {
                            console.log(item)
                            return (
                                <div className="carousel-item active" key={item.id}>
                                    <img src={item.src} className="d-block w-100" alt="imagen1" />
                                    {/* <img src="../images/personal/fsae.jpg" className="d-block w-100" alt="esta mierda no carga" /> */}
                                </div>
                            )
                        })}
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Carrousel;