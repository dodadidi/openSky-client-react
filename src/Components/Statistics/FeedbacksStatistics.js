import { Link } from 'react-router-dom'
import {feedbackService} from '../../Service/FeedbackService'
import { useState, useEffect, React} from 'react'

const FeedbacksStatistics = () => {
  const [feedbacks, setFeedbacks] = useState(null)
  const [feedbacksCouter, setFeedbacksCounter] = useState(0)
  const [rate0, setrate0] = useState(0)
  const [rate1, setrate1] = useState(0)
  const [rate2, setrate2] = useState(0)
  const [rate3, setrate3] = useState(0)
  const [rate4, setrate4] = useState(0)
  const [rate5, setrate5] = useState(0)
  const [feedbacksCouter1, setFeedbacksCounter1] = useState(0)


  useEffect(() => {
    getFeedbacks()
})
  const getFeedbacks= async () =>{
    const data = await feedbackService.query()
    setFeedbacks(data)
  }

  const inputChange=(event)=>{
    if (feedbacks){
      if (event.target.name === "company_name"){
        let counter=0 
        feedbacks.forEach(feedback => {
          console.log(feedback)
          if (feedback.company_name.toLowerCase() === event.target.value.toLowerCase()){
            counter+=1
            if (feedback.rating === 0) setrate0(rate0+1)
            if (feedback.rating === 1) setrate1(rate1+1)
            if (feedback.rating === 2) setrate2(rate2+1)
            if (feedback.rating === 3) setrate3(rate3+1)
            if (feedback.rating === 4) setrate4(rate4+1)
            if (feedback.rating === 5) setrate5(rate5+1)
        }
      })
      setFeedbacksCounter(counter) 
      }
      if (event.target.name === "published_date"){
        let counter1=0
        feedbacks.forEach(feedback => {
          if (feedback.published_date === event.target.value){
            counter1+=1
          }
        })
        setFeedbacksCounter1(counter1) 

      }

    }
  }


  return (
    <div>
      <h3>Feedbacks Statistics</h3>
      <input className="inputFlights" onChange={inputChange} type="text" name="company_name" placeholder="Company Name"></input>
      <p>Number of feedbacks: {feedbacksCouter}</p>
      <p>rating 0: {rate0}</p>
      <p>rating 1: {rate1}</p>
      <p>rating 2: {rate2}</p>
      <p>rating 3: {rate3}</p>
      <p>rating 4: {rate4}</p>
      <p>rating 5: {rate5}</p>
      <input className="inputFlights" onChange={inputChange} type="text" name="published_date" placeholder="mm/dd/yyyy"></input>
      <p>date Counter: {feedbacksCouter1}</p>
      {/* <a href='/'>Go Back</a> */}
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default FeedbacksStatistics