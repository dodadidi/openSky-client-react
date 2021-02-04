import React, { Component } from 'react';

import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

class Feedback extends Component {
    constructor(props){
        super(props);

        this.newTransport = "";
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
        this.delete = this.delete.bind(this);
        this.renderUI = this.renderUI.bind(this);
        this.inputChanged = this.inputChanged.bind(this);
    }

    edit(){
      
       this.props.onSelected(this.props.currentFeedback)
    }

    delete(e){
        this.props.onDelete(this.props.index);
    }

    save(e){
       e.preventDefault();

       this.props.onChange(this.newTransport.value, this.props.index);

       this.setState({
           editing: false
       })
    }

    inputChanged({target: {value : text}}){
        this.setState({
            newTransport: text
        })
    }

    renderUI() {
        return (
                <tr style={{   marginBottom: "14px"}}>
                    <td>
                        {this.props.currentFeedback.published_date}
                    </td>
                    <td>
                        {this.props.currentFeedback.company_name}   
                    </td>    
                    <td>
                        {this.props.currentFeedback.feedback}
                    </td>
                    <td>
                        {this.props.currentFeedback.rating}
                    </td>
                    {/* TODO: IF MANAGER DELETE / USER FEEDBACK*/}
                    <td>
                        <IconButton aria-label="delete" className="btn btn-primary" onClick={this.delete}>
                            <DeleteIcon />
                        </IconButton>
                    </td>
                    <td>
                        <IconButton aria-label="edit" className="btn btn-primary" onClick={this.edit}>
                            <EditIcon />
                        </IconButton>
                    </td>
                </tr>
        )
    }

    render() {
        return this.renderUI();
    }
}
export default Feedback;