import React, { Component } from 'react';
import Flight from './Flight';
import Table from 'react-bootstrap/Table';

//TODO: 1. fix tabel - header
class FlightsList extends Component {
    constructor(props){
        super(props);
        this.eachFlight = this.eachFlight.bind(this);
    }

    eachFlight(item,i){
        return <Flight key={i} index={item.flight_number} onSelected={this.onSelectedEdit} currentFlight={item} onDelete={this.props.onDelete}>
        </Flight>
    }

    render() {
        return(
            <div className="main" >
                <Table className='table'>
                <thead>
                    <tr>
                        <th>flight_number</th>
                        <th>departure_date</th>
                        <th>departure_city</th>
                        <th>landing_city</th>
                        <th>company_name</th>
                        <th>stops</th>
                        <th>price</th>
                    </tr>
                </thead>
                    { this.props.list.map(this.eachFlight)}
                </Table>
            </div>
        )
    }
}

export default FlightsList;

           

