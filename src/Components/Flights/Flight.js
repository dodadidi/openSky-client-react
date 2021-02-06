import React, { Component } from 'react';

import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import { Icon } from '@material-ui/core';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

//TODO: 1. conditions 
//      2. like buy buttons - functionality
//      3. delete button - fix visibility 

class Flight extends Component {
    constructor(props){
        super(props);

        this.delete = this.delete.bind(this);
        this.renderUI = this.renderUI.bind(this);
    }

    delete(e){
        this.props.onDelete(this.props.index);
    }

    renderUI() {
        return (
                <tr style={{   marginBottom: "14px"}}>
                    <td>
                        {this.props.currentFlight.flight_number}
                    </td>
                    <td>
                    {this.props.currentFlight.departure_date}   
                    </td>
                    <td>
                    {this.props.currentFlight.time}   
                    </td>
                    <td>
                        {this.props.currentFlight.departure_city}   
                    </td>    
                    <td>
                        {this.props.currentFlight.landing_city}
                    </td>
                    <td>
                        {this.props.currentFlight.company_name}
                    </td>
                    <td>
                        {this.props.currentFlight.stops}
                    </td>
                    <td>
                        {this.props.currentFlight.price}
                    </td>
                    {/* TODO: IF MANAGER DELETE ELSE LIKE+BUY*/}
                    <td>
                        <IconButton aria-label="delete" className="btn btn-primary" onClick={this.delete}>
                            <DeleteIcon />
                        </IconButton>
                    </td>
                    <td>🤍</td>
                    {/* <td>💗</td> */}
                    {/* <td><Icon><FavoriteBorderIcon/></Icon></td> */}
                    <td><Icon><ShoppingCartIcon/></Icon></td>
                </tr>     
        )
    }

    render() {
        return this.renderUI();
    }
}
export default Flight;