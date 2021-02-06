import React, {Component} from 'react';
import LoginForm from './LoginForm';
// import NavBar from './NavBar';
import Title from './Title';
// import FlightsBoard from './Flights/FlightsBoard';
// import FeedbacksBoard from './Feedbacks/FeedbacksBoard';



class App extends Component{
    render(){
        return (
            <div className="background">
                {/* <NavBar/> */}
                <Title/>
                <LoginForm/>
                {/* <FlightsBoard/>
                <FeedbacksBoard/> */}
            </div>
        );
    }
}
export default App;