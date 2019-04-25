import React from 'react'
import NavBar from '../components/NavBar'
import Carrousel from '../components/Carrousel'
import CardList from '../components/CardList'

class Main extends React.Component {
    render() {
        return (
            <div className="MainPage">
                <NavBar/>
                <Carrousel/>
                <CardList/>
            </div>
        )
    }
}
export default Main