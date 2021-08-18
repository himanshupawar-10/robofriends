import react,{Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../components/cardlist';
import SearchBox from "../components/searchbox";
import "./App.css";
import Scroll from '../components/scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import {setSearchField, requestRobots} from '../actions';

const mapStateToProps= state =>{
    return{
        searchfield: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}
const mapDispatchToProps= (dispatch) => {
    return{
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots:() => dispatch(requestRobots())
    }
}


class App extends Component
{   
    componentDidMount()
    {   
        this.props.onRequestRobots();
    }
    
    render()
    {
        const {searchfield,onSearchChange,robots,isPending}= this.props;
        const filteredRobots= robots.filter(robot=>
            {
                return robot.name.toLowerCase().includes(
                    searchfield.toLowerCase()
                )
            }
        )
        if(isPending){
            return <h1 className='tc'>Loading...</h1>
        }
        else{
            return(
                <div className='tc'>
                    <h1 className='f1'>Robofriends</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll> 
                </div>
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);