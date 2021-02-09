import { TextField } from '@material-ui/core';
import { useState, useEffect, React} from 'react'
import {feedbackService} from '../../Service/FeedbackService'
import { withRouter } from 'react-router-dom';
import {EventBus} from '../../Service/EventBus'

function _FeedbackForm(props) {
    const [feedbackObj, setFeedbackObj]  = useState(null)
    const [companyName, setCompanyName]  = useState('')
    const [feedback, setFeedback]  = useState('')
    const [rating, setRating]  = useState('')
    const [count, setCount]  = useState(0)

    useEffect(() => {
        if(props.feedbackId && count===0){
            const getFeedback=(async() =>{
                const feedbackById=await feedbackService.getById(props.feedbackId)
                setFeedbackObj(feedbackById)
                setCompanyName(feedbackById.company_name)
                setRating(feedbackById.rating)
                setFeedback(feedbackById.feedback)
                setCount(count+1)
            })();
        }
    })
    const onInputChange=(event) =>{
        let name = event.target.name;
        let value = event.target.value;
        if (name === 'companyName'){
            setCompanyName(value)
        }
        if (name === 'feedback'){
            setFeedback(value)
        }
        if (name === 'rating'){
            setRating(value)
        }
    }

    const onSubmit= async (event) =>{
        event.preventDefault();
        const feedbackForSave={
            id:feedbackObj ? feedbackObj.id : null,
            user_id: 25893, //temp id
            company_name: companyName,
            feedback: feedback,
            rating: rating
        }
        await feedbackService.save(feedbackForSave)
        EventBus.emit('added')
        EventBus.emit('updated')
    }

    return (
        <div className="modal-wrapper">
            <div className="modal-content">
                <form >
                    <div>
                    <input error={ true } id="outlined-basic" label="Company Name" name="companyName" variant="outlined" defaultValue={companyName} onChange={onInputChange} />
                    </div>
                    <div>
                    <input error={ true } id="outlined-basic" label="Feedback" name="feedback" variant="outlined" defaultValue={feedback} onChange={onInputChange} />
                    </div>
                    <div>
                    <input error={ true } id="outlined-basic" label="Rating" name="rating" variant="outlined" defaultValue={rating} onChange={onInputChange}/>
                    </div>
                    <button onClick={onSubmit}>Save</button>             
                </form>
            </div>
        </div>
    )
}

export const FeedbackForm = withRouter(_FeedbackForm)
