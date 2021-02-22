import {BrowserRouter as Router, Route} from 'react-router-dom'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
import FeedbacksBoard from './Components/Feedbacks/FeedbacksBoard'
import FlightsBoard from './Components/Flights/FlightsBoard'
import Weather from './Components/Weather/Weather'
import FeedbackStatistics from './Components/Statistics/FeedbacksStatistics'
import {HeaderTitle} from './Components/HeaderTitle'

const App = () => {
  return (
    <Router>
    <div className='body'>
    <NavBar />
    <HeaderTitle/>
    {/* <Title />  */}
      <div className='container'>
          {/* <Route path='/about' component={About}/> */}
          <Route path='/feedbacksBoard' component={FeedbacksBoard}/>
          <Route path='/flightsBoard' component={FlightsBoard}/>
          <Route path='/lastMinute' component={Weather}/>
          <Route path='/feedbackStatistics' component={FeedbackStatistics}/>
          <Footer />
    </div>
        </div>
    
      </Router>
  )
}

export default App;
