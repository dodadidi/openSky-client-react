import { useState, useEffect, React} from 'react'
import {feedbackService} from '../../Service/FeedbackService'
import Feedback from './Feedback'
import {FeedbackForm} from './FeedbackForm'
import {EventBus} from '../../Service/EventBus'
// import FeedbackStatistics from '../Statistics/FeedbacksStatistics'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";

export default function FeedbacksBoard() {
  const [feedbacks, setFeedbacks] = useState(null)
  const [feedbackAdd, setFeedbackAdd] = useState(false)
  const [filterByCompanyName, setCompanyName] = useState("")
  const [filterByRating, setRating] = useState("")
  const [filterBy, setFilterBy] = useState({})
  const user = useSelector(state => state.userReducer.user)// from redux

  useEffect(() => {
    EventBus.on('added', () => {
      setFeedbackAdd(false)
  });
    getFeedbacks()
})
  const getFeedbacks= async () =>{
    const data = await feedbackService.query(filterBy)
    setFeedbacks(data)
  }

  const addFeedback=() =>{
    setFeedbackAdd(true)
  }

  const filterChange=(event) =>{
    if (event.target.name === "company_name"){
      setCompanyName(event.target.value)
    } 
    if (event.target.name === "rating"){
      setRating(event.target.value)
    }
    const filterObject = {
      company_name: event.target.name === "company_name" ? event.target.value : filterByCompanyName,
      rating: event.target.name === "rating" ? event.target.value : filterByRating
    }
    setFilterBy(filterObject)  
  }

  if (!feedbacks) return <div>Loading...</div> 
  else{
    return (
      <div className='feedbackList'>
      <h3 className="center">Feedbacks</h3>
      {user.admin&&<Link to='/feedbackStatistics'>Feedback Statistics</Link>}
      <input className="inputFlights" onChange={filterChange} type="text" name="company_name" placeholder="Company Name"></input>
      <input className="inputFlights" onChange={filterChange} type="number" min="1" max="5" name="rating" placeholder="Rating"></input>
      <button style={{backgroundColor: '#440047', border: '0',color: 'White',borderRadius: '5px',width: '130px',height: '32px', fontSize: '1rem',marginTop:'5px'}} onClick={addFeedback}>Add Feedback</button>   
        {feedbackAdd && <FeedbackForm />}
      <div>
      <table className='table'>
                <thead>
                    <tr>
                        <th>Published Date</th>
                        <th>Company Name</th>
                        <th>Feedback</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
        {feedbacks.map(feedback => <Feedback feedback = {feedback} key={feedback.id}/>)}
        </tbody>
        </table>
      </div>
      </div>
    )
  }
}


