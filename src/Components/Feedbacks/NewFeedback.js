import React, { Component } from 'react';

import { TextField } from '@material-ui/core';

//TODO: CSS - NewFeedback
class NewFeedback extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            updating: false,
            id:  this.props.selectedFeedback ? this.props.selectedFeedback.id : null,
            _user_id:  this.props.selectedFeedback ? this.props.selectedFeedback._user_id : null,
            company_name : this.props.selectedFeedback ? this.props.selectedFeedback.company_name : '',
            published_date :  this.props.selectedFeedback ? this.props.selectedFeedback.published_date : '',
            feedback :  this.props.selectedFeedback ? this.props.selectedFeedback.feedback : '',
            rating :  this.props.selectedFeedback ? this.props.selectedFeedback.rating : ''
        }

        this.save = this.save.bind(this);
        this.renderSave = this.renderSave.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }
  
     componentDidUpdate(prevProps){
        if(prevProps.selectedFeedback !== this.props.selectedFeedback){
            this.setState({id:this.props.selectedFeedback.id,
                _user_id:this.props.selectedFeedback._user_id,
                feedback:this.props.selectedFeedback.feedback,
                rating :  this.props.selectedFeedback.rating,
                published_date :  this.props.selectedFeedback.published_date
                
            });
        }
      
    }

    save(e){
        e.preventDefault();
        if(this.state.id){
            this.props.onUpdate({id:this.state.id,
                _user_id: this.state._user_id,
                company_name: this.state.company_name,
                feedback:this.state.feedback,
                published_date:this.state.published_date,
                rating:this.state.rating
            })
        this.setState({
            id:null,
            _user_id:'',
            company_name:'',
            published_date:'',
            feedback:'',
            rating:''
        })
        } else{
            this.props.onSave({id:this.state.id,
                _user_id: this.state._user_id,
                company_name: this.state.company_name,
                feedback:this.state.feedback,
                published_date:this.state.published_date,
                rating:this.state.rating});
        }
    
    }

    onInputChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    textField={
        width: '300px',
        backgroundColor: 'white',
        marginBottom:'14px',
        borderRadius: '5px',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '1.125em',
    }

    buttonForm={
        backgroundColor: '#440047',
        border: '0',
        color: 'White',
        borderRadius: '5px',
        width: '60px',
        height: '40px',
        fontWeight: 'bold',
        fontSize: '1rem',
        marginTop:'16px',
        position: 'absolute',
        left: '115px'
    }

    renderSave(){
        const company_name = this.state.company_name;
        const rating =  this.state.rating;
        const feedback =  this.state.feedback;
        const published_date =  this.state.published_date;
        const id = this.state.id ? this.state.id : null;
        return(
            <div>
            <form className="form">
                <div>
                <TextField style={this.textField} error={true }  id="outlined-basic" label="Date" name="date"  variant="outlined" onChange={this.onInputChange} value={ published_date } />
                </div>
                <div>
                <TextField style={this.textField} error={true } id="outlined-basic" label="Company Name" name="company-name" variant="outlined" onChange={this.onInputChange} value={ company_name }   />
                </div>
                <div>
                <TextField style={this.textField} error={ true } id="outlined-basic" label="Feedback" name="feedback" variant="outlined" onChange={this.onInputChange} value= { feedback }  />
                </div>                <div>
                <TextField style={this.textField} error={ true } id="outlined-basic" label="Rating" name="rating" variant="outlined" onChange={this.onInputChange} value= { rating }  />
                </div>
                <button style={this.buttonForm} onClick={this.save}>{id!==null ? 'Update':'Save' }</button>                
            </form>
            </div>
        )
    }

    render() {
        return this.renderSave();
    }
}
export default NewFeedback;

