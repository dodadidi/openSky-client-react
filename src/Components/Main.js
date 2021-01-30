import React, {Component} from 'react';
import flightsData from '../Data/flights.json';
import FlightsList from './FlightsList';
// import NewFlight from './NewTransportForm';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            flights: [],
            selectedFlight:null
        }
    this.delete = this.delete.bind(this);
    

    }
    componentDidMount(){
        flightsData.map(item => this.add({
            flight_number: item.flight_number,
            departure_date: item.departure_date,
            departure_city: item.departure_city,
            landing_city: item.landing_city,
            company_name: item.company_name,
            stops: item.stops,
            deparpriceture_city: item.price
        }));
    }

    add( {flight_number = null, 
        departure_date = 'default departure_date', 
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
                <FlightsList list={this.state.flights} onDelete={this.delete}></FlightsList>
            </div>
        );
    }
}
export default Main;