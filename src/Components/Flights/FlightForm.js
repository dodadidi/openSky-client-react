import { TextField } from '@material-ui/core';
import { useState, useEffect, React} from 'react'
import {flightService} from '../../Service/FlightService'
import { withRouter } from 'react-router-dom';
import {EventBus} from '../../Service/EventBus'

function _FlightForm(props) {
    const [flightObj, setFlightObj]  = useState(null)
    const [companyName, setCompanyName]  = useState('')
    const [flight, setFlight]  = useState('')
    const [rating, setRating]  = useState('')
    const [count, setCount]  = useState(0)

    useEffect(() => {
        if(props.flightId && count===0){
            const getFlight=(async() =>{
                const flightById=await flightService.getById(props.flightId)
                setFlightObj(flightById)
                setCompanyName(flightById.company_name)
                setRating(flightById.rating)
                setFlight(flightById.flight)
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
        if (name === 'flight'){
            setFlight(value)
        }
        if (name === 'rating'){
            setRating(value)
        }
    }

    const onSubmit= async (event) =>{
        event.preventDefault();
        const flightForSave={
            id:flightObj ? flightObj.id : null,
            user_id: 25893, //temp id
            company_name: companyName,
            flight: flight,
            rating: rating
        }
        await flightService.save(flightForSave)
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
                    <input error={ true } id="outlined-basic" label="Flight" name="flight" variant="outlined" defaultValue={flight} onChange={onInputChange} />
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

export const FlightForm = withRouter(_FlightForm)
