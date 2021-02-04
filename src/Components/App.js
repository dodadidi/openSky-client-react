import React, {Component} from 'react';
import NavBar from './NavBar';
import FlightsBoard from './Flights/FlightsBoard';
// import FeedbacksBoard from './Feedbacks/FeedbacksBoard';
import Title from './Title';


class App extends Component{
    render(){
        return (
            <div className="background">
                <NavBar/>
                <Title/>
                <FlightsBoard/>
                {/* <FeedbacksBoard/> */}
            </div>
        );
    }
}
export default App;