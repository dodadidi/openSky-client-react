import {BrowserRouter as Router, Route} from 'react-router-dom'
import Footer from './Components/Footer'
import About from './Components/About'
import Title from './Components/Title'
import HomeButtons from './Components/HomeButtons'
import NavBar from './Components/NavBar'
import FeedbacksBoard from './Components/Feedbacks/FeedbacksBoard'
import FlightsBoard from './Components/Flights/FlightsBoard'
import Weather from './Components/Weather/Weather'
import FeedbackStatistics from './Components/Statistics/FeedbacksStatistics'
import weather from './Components/Weather/Weather'

//import { AppRouter } from "./AppRouter";


const App = () => {
  return (
    <Router>
    <div className='body'>
    <NavBar />
    <Title />
      <div className='container'>
          <Route 
          path='/'
          exact 
          render={(props) =>(
            <> 
              <HomeButtons />
            </>  
          )}
          />
          <Route path='/about' component={About}/>
          <Route path='/weather' component={weather}/>
          <Route path='/homeButtons' component={HomeButtons}/>
          <Route path='/feedbacksBoard' component={FeedbacksBoard}/>
          <Route path='/flightsBoard' component={FlightsBoard}/>
          <Route path='/weather' component={Weather}/>
          <Route path='/feedbackStatistics' component={FeedbackStatistics}/>
          <Footer />
        </div>
    </div>
    
      </Router>
  )
}

export default App;
