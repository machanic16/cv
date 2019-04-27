import React from 'react'
import NavBar from '../components/NavBar'
import Carrousel from '../components/Carrousel'
import CardList from '../components/CardList'
import Contacto from '../components/Contacto'
import ContactoData from '../data/ContactoData.json'
import SkillsData from '../data/SkillsData.json'


class Main extends React.Component {

    render() {
        return (
            <div className="MainPage">
                <NavBar/>
                <Carrousel/>
                <CardList data={SkillsData}/>
                <Contacto data={ContactoData}/>
            </div>
        )
    }
}
export default Main