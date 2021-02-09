import { useState, useEffect, React} from 'react'
import {feedbackService} from '../../Service/FeedbackService'
import Feedback from './Feedback'
import {FeedbackForm} from './FeedbackForm'
import {EventBus} from '../../Service/EventBus'

export default function FeedbacksBoard() {
  const [feedbacks, setFeedbacks] = useState(null)
  const [feedbackAdd, setFeedbackAdd] = useState(false)

  useEffect(() => {
    EventBus.on('added', () => {
      setFeedbackAdd(false)
  });
    getFeedbacks()
})
  const getFeedbacks= async () =>{
    const data = await feedbackService.query()
    setFeedbacks(data)
  }

  const addFeedback=() =>{
    setFeedbackAdd(true)
  }

  if (!feedbacks || feedbacks.length === 0) return <div>Loading...</div> 
  else{
    return (
      <div className='feedbackList'>
      <button onClick={addFeedback}>Add</button>
        {feedbackAdd && <FeedbackForm />}
      <div>
        {feedbacks.map(feedback => <Feedback feedback = {feedback} key={feedback.id}/>)}
      </div>
      </div>
    )
  }
}



// const FeedbackBoard = () => {
//   return (
//     <div>
//       <h4>FeedbackBoard</h4>
//       {/* <a href='/'>Go Back</a> */}
//       <Link to='/'>Go Back</Link>
//     </div>
//   )
// }

// export default FeedbackBoard