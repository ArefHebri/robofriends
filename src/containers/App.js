import React from "react";
import CardList from '../components/cardList';
import Searchbox from "../components/Searchbox";
import Scroll from "../components/Scroll"
import "./App.css";

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            robots : [],
            searchfield : ""
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => this.setState({robots : users}))
    }

    onSearchChange = (event) =>{
        this.setState({ searchfield : event.target.value});
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <div className= "tc">
                <h1 className = "f1 segafont">Robo Friends</h1>
                <Searchbox searchChange = {this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        )
    }
}

export default App;