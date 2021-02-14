import {FlightForm} from './FlightForm'
import { useState, useEffect, React} from 'react'
import {flightService} from '../../Service/FlightService'
import {EventBus} from '../../Service/EventBus'
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Icon } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useDispatch, useSelector } from "react-redux";

export default function Flight({flight}) {
    const [flightUpdate, setFlightUpdate] = useState(false)
    const [isLiked, setIsLiked] = useState(false)
    const user = useSelector(state => state.userReducer.loggedInUser)

    useEffect(() => {
        EventBus.on('updated', () => {
            setFlightUpdate(false)
      });
    })

    const updateFlight=() =>{
        setFlightUpdate(true)
      }

    const deleteFlight= async (flightNum) =>{
        await flightService.remove(flightNum)
      }

    const onBuy= () =>{
        prompt("Do you want to but this flight?")
    }

    const onIsLiked=()=>{
        setIsLiked(!isLiked);
        console.log(user);
        
      }
    return (
        <tr style={{   marginBottom: "14px"}}>
                    <td>
                        {flight.flight_number}
                    </td>
                    <td>
                        {flight.departure_date}   
                    </td>
                    <td>
                        {flight.time}   
                    </td>
                    <td>
                        {flight.departure_city}   
                    </td>    
                    <td>
                        {flight.landing_city}
                    </td>
                    <td>
                        {flight.company_name}
                    </td>
                    <td>
                        {flight.stops}
                    </td>
                    <td>
                        {flight.price}
                    </td>
                    {/* TODO: IF MANAGER DELETE ELSE LIKE+BUY*/}
                    {/* <td>
                        <IconButton aria-label="delete" className="btn btn-primary" onClick={this.delete}>
                            <DeleteIcon />
                        </IconButton>
                    </td> */}
                    <td><i onClick={onIsLiked} className={`far fa-heart ${isLiked ? "isLiked" : "notLiked"}`}></i></td>
                    {/* <td>💗</td> */}
                    {/* <td><Icon><FavoriteBorderIcon/></Icon></td> */}
                    <td><Icon onClick={onBuy}><ShoppingCartIcon/></Icon></td>
    
            <div className='buttonsfeedbacks'>
            <button onClick={updateFlight}>Update</button>
            <button onClick={()=>{deleteFlight(flight.flight_number)}}>Delete</button>
            </div>
            {flightUpdate && <FlightForm flightNum={flight.flight_number}/>}     
            </tr> 
    )
}
