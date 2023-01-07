import CardComponent from "./CardComponent";
import SearchBox from './SearchBox';
import { Component } from "react";
import Scroll from "./Scroll";


class App extends Component{
    constructor(){
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users => this.setState({robots:users}));
    }

    onSearchChange = (event) =>{
        this.setState({searchField: event.target.value});
    }

    render() {
        const filterRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        if(this.state.robots.length === 0){
            return <h1>Loading</h1>
        }
        else{
            return(
                <div className="tc">
                 <h1 className="f1">RoboFriends</h1>
                 <SearchBox searchChange={this.onSearchChange} />
                 <Scroll>
                     <CardComponent robots = {filterRobots}/>
                 </Scroll>
                </div>
             );
        }
    }
};

export default App;


