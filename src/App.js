import react,{Component} from 'react'
import CardList from './cardlist'
import {robots} from './robots';
import SearchBox from "./searchbox";

class App extends Component
{   

    Change(event){
        console.log(event.target.value);
        

    }

    render(){
    return(
        <div className='tc'>
            <h1>Robofriends</h1>
            <SearchBox searchChange={this.Change}/>
            <CardList robots={robots}/>
        </div>
        )
    }
}

export default App;