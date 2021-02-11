import { useState, useEffect, React} from 'react'
import {flightService} from '../../Service/FlightService'
import Flight from './Flight'
import {FlightForm} from './FlightForm'
import {EventBus} from '../../Service/EventBus'

export default function FlightsBoard() {
  const [flights, setFlights] = useState(null)
  const [flightAdd, setFlightAdd] = useState(false)

  useEffect(() => {
    EventBus.on('added', () => {
      setFlightAdd(false)
  });
    getFlights()
})
  const getFlights= async () =>{
    const data = await flightService.query()
    setFlights(data)
  }

  const addFlight=() =>{
    setFlightAdd(true)
  }

  if (!flights || flights.length === 0) return <div>Loading...</div> 
  else{
    return (
      <div className='flightList'>
      <button onClick={addFlight}>Add</button>
        {flightAdd && <FlightForm />}
        <div className="main" >
                <table className='table'>
                <thead>
                    <tr>
                        <th>Flight Number</th>
                        <th>Departure Date</th>
                        <th>Time</th>
                        <th>Departure City</th>
                        <th>Landing City</th>
                        <th>Company Name</th>
                        <th>Stops</th>
                        <th>Price</th>
                    </tr>
                </thead>
                {flights.map(flight => <Flight flight = {flight} key={flight.flight_number}/>)}
                </table>
            </div>
      </div>
    )
  }
}



// const FlightBoard = () => {
//   return (
//     <div>
//       <h4>FlightBoard</h4>
//       {/* <a href='/'>Go Back</a> */}
//       <Link to='/'>Go Back</Link>
//     </div>
//   )
// }

// export default FlightBoard