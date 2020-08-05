import React, {Component} from 'react';
import CounterContainer from '../containers/CounterContainer';
import AppTemplate from './AppTemplate';
import TodosContainer from '../containers/TodosContainer';

class App extends Component {
    render() {
        return(
            <AppTemplate
        counter={<CounterContainer/>}
        todos={<TodosContainer/>}/>
        )
    }
}

export default App;