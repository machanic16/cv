import React from 'react'
// Components
import NavBar from '../components/NavBar'
import Carrousel from '../components/Carrousel'
import CardList from '../components/CardList'
import Contacto from '../components/Contacto'
import Activities from '../components/activities'

// Data
import CarrouselData from '../data/CarouselImageData.json'
import ContactoData from '../data/ContactoData.json'
import SkillsData from '../data/SkillsData.json'

class Main extends React.Component {
    render() {
        return (
            <div className="MainPage">
                <NavBar/> 
                <Carrousel data={CarrouselData}/>
                <CardList data={SkillsData}/>
                <Activities/>
                <Contacto data={ContactoData}/>
            </div>
        )
    }
}
export default Main