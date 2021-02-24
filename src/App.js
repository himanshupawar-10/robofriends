import react,{Component} from 'react'
import CardList from './cardlist'
import {robots} from './robots';
import SearchBox from "./searchbox";

class App extends Component
{   constructor(){
        super()
        this.state={
            robot:robots,
            searchfield: ''
        }
    }
    Change = (event) => {
        this.setState({searchfield : event.target.value})
    }
    
    render(){
    this.state.robot= robots.filter(robots=>
        {
            return robots.name.toLowerCase()
            .includes(
                this.state.searchfield.toLowerCase())
        })

    return(
        <div className='tc'>
            <h1>Robofriends</h1>
            <SearchBox searchChange={this.Change}/>
            <CardList robots={this.state.robot}/>
        </div>
        )
    }
}

export default App;