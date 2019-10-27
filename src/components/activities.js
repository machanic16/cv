
import React from 'react'
//import activity from './Activity'

// Styles
import './styles/Activities.css'
// Components
import Carrousel from './Carrousel'
// Data
import ActivitiesData from '../data/Activities.json'
import img1 from '../images/atv-building.jpg'

class Activities extends React.Component{
    render(){
        return(
            <div className='Activities' id='Activities'>
                <div className='container'>
                    <div className='row activities-title'>
                        <h1>Aqui ira el listado de actividades</h1>
                    </div>
                    <div className='row activities-body'>
                        {/*aqui empieza el commponente activities, estoy pensado en usar el componente card...*/}
                            <Carrousel data={ActivitiesData}/>
                            <img src={img1}></img>
                    </div>
                </div>
            
            </div>
        )
    }
}

export default Activities