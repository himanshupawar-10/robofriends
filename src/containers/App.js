import react,{Component} from 'react'
import CardList from '../components/cardlist'
import SearchBox from "../components/searchbox";
import "./App.css"
import Scroll from '../components/scroll'

class App extends Component
{   constructor(){
        super()
        this.state={
            robot: [],
            searchfield: ''
        }
    }
    componentDidMount()
    { fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json() )
        .then(users=> this.setState({ robot:users }));
    }
    Change = (event) => {
        this.setState({searchfield : event.target.value})
    }
    
    render(){
        const {robot, searchfield} = this.state;
        const filteredRobots= robot.filter(robots=>
            {
                return robots.name.toLowerCase().includes(
                    searchfield.toLowerCase()
                )
            }
        )
        if(!robot.length){
            return <h1 className='tc'>Loading...</h1>
        }
        else{
            return(
                <div className='tc'>
                    <h1 className='f1'>Robofriends</h1>
                    <SearchBox searchChange={this.Change}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            )
        }
    }
}

export default App;