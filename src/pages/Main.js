// React
import React from 'react'

// Components
import NavBar from '../components/NavBar'
import Carrousel from '../components/Carrousel'
import CardList from '../components/CardList'
import Contacto from '../components/Contacto'
import Activities from '../components/activities'

// Data components
import ContactoData from '../data/ContactoData.json'
import SkillsData from '../data/SkillsData.json'
import CarrouselData from '../data/CarouselImageData.json'
import ActivitiesData from '../data/Activities.json'

class Main extends React.Component {
    render() {
        return (
            <div className="MainPage">
        {/*console.log(CarrouselData[0].src)*/}
                <NavBar/> 
                <Carrousel data={CarrouselData}/>
                <CardList data={SkillsData}/>
                <Activities data={ActivitiesData}/>
                <Contacto data={ContactoData}/>
            </div>
        )
    }
}
export default Main