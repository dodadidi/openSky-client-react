import React, { Component } from 'react';
import Flight from './Flight';
import Table from 'react-bootstrap/Table';

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
                    { this.props.list.map(this.eachFlight)}
                </Table>
            </div>
        )
    }
}

export default FlightsList;

           

