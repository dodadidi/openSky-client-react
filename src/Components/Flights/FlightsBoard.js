import React, {Component} from 'react';
import FlightsList from './FlightsList';

class FlightsBoard extends Component{
    constructor(props){
        super(props);
        this.state = {
            flights: [],
            selectedFlight:null
        }
    this.delete = this.delete.bind(this);
    
    }
    componentDidMount(){
        const that = this;
        let data = [];
        async function fetchData () {
        try {
        // data = await fetch("https://opensky1234.herokuapp.com/api/flights ")
        data = await fetch("https://localhost:3000/api/flights")
        .then(res => res.json());
        } catch(err) {
        console.log(`Error while fetching data from server: ( ${err})`);
        }
        data.map(item => that.add({
            flight_number: item.flight_number,
            departure_date: item.departure_date,
            time: item.time,
            departure_city: item.departure_city,
            landing_city: item.landing_city,
            company_name: item.company_name,
            stops: item.stops,
            price: item.price
        }));
    }
        fetchData ();
}

    add( {flight_number = null, 
        departure_date = 'default departure_date', 
        time = 'default time', 
        departure_city = 'default departure_city', 
        landing_city = 'default landing_city',
        company_name = 'default company_name',
        stops = 'stops',
        price = 'price',
    } ) {
        this.setState(prevState => ({
        flights: [
            ...prevState.flights, {
                flight_number: flight_number !== null ? flight_number : this.nextId(prevState.flights),
                departure_date: departure_date,
                time: time,
                departure_city: departure_city,
                landing_city: landing_city,
                company_name: company_name,
                stops: stops,
                price: price,     
            }]
        }))
    }
    
    delete(flight_number){
        this.setState(prevState => ({
            flights: prevState.flights.filter(flight => flight.flight_number !== flight_number)
        }))
    }

    render(){
        return (
            <div>
            {/* TODO: ADD SEARCH FORM COMPONENT */}
                {/* <FlightFiltter></FlightFiltter> */}
                <FlightsList list={this.state.flights} onDelete={this.delete}></FlightsList>
            </div>
        );
    }
}
export default FlightsBoard;