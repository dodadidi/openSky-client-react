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
import { userService } from "../../Service/UserService";
import { Flag } from '@material-ui/icons';

export default function Flight({flight}) {
    const [flightUpdate, setFlightUpdate] = useState(false)
    const [isLiked, setIsLiked] = useState(false)
    const user = useSelector(state => state.userReducer.user)// from redux
    const [isBuy, setIsBuy] = useState(false)

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

    const onBuy= (flight) =>{
        if(window.confirm("Do you want to but this flight?")){//change boolean
            user.buy_flights = user.buy_flights.filter(flightNumber => flightNumber !== flight.flight_number)
            user.buy_flights.unshift(flight.flight_number);

            userService.save(user);
            alert(
                flight.flight_number
               //todo flight.stops
            )
            console.log(user);
        } 
    }

    const onIsLiked=(flightNum)=>{
        let flag = !isLiked
        setIsLiked(flag);
        //console.log(flightNum);
        if(flag){
            //for(var i=0; i<user.like_flights.lenght; i++){
            user.like_flights = user.like_flights.filter(flightNumber => flightNumber !== flightNum)
            user.like_flights.unshift(flightNum);
            flight.Liked = true;
            flightService.save(flight);
            userService.save(user);
        }
        else{
            user.like_flights = user.like_flights.filter(flightNumber => flightNumber !== flightNum)
            flight.Liked = false;
            flightService.save(flight);
            userService.save(user);
        
        }       
        console.log(user)
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
                    <td><i onClick={()=>{
                        onIsLiked(flight.flight_number)
                    }} className={`far fa-heart ${isLiked ||flight.Liked ? "isLiked" : "notLiked"}`}></i></td>
                    {/* <td>💗</td> */}
                    {/* <td><Icon><FavoriteBorderIcon/></Icon></td> */}
                    <td><Icon onClick={()=>{
                        onBuy(flight)
                    }}><ShoppingCartIcon/></Icon></td>
    
            <div className='buttonsfeedbacks'>
            <button onClick={updateFlight}>Update</button>
            <button onClick={()=>{deleteFlight(flight.flight_number)}}>Delete</button>
            </div>
            {flightUpdate && <FlightForm flightNum={flight.flight_number}/>}     
            </tr> 
    )
}
