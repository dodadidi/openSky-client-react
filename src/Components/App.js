import React, {Component} from 'react';
import NavBar from './NavBar';
import Main from './Main';
import Title from './Title';

class App extends Component{
    render(){
        return (
            <div className="background">
                <NavBar/>
                <Title/>
                <Main/>
            </div>
        );
    }
}
export default App;