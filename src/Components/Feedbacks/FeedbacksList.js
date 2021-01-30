import React, { Component } from 'react';
import Feedback from './Feedback';
import Table from 'react-bootstrap/Table';

//TODO: CSS - FeedbacksList
class FeedbacksList extends Component {
    constructor(props){
        super(props);
        this.eachFeedback = this.eachFeedback.bind(this);
        this.update = this.update.bind(this);
        this.onSelectedEdit = this.onSelectedEdit.bind(this);
    }

    update(newFeedback, i){

        this.setState(prevState => ({
            transports: prevState.transports.map(
                transport => transport.id !== i ? transport : {...transport, transport: newFeedback}
            )
        }));
    }
    onSelectedEdit(transport){
        this.props.onSelectedUpdate(transport);
    }

    eachFeedback(item,i){
        return <Feedback key={i} index={item.id} onSelected={this.onSelectedEdit} currentFeedback={item} onDelete={this.props.onDelete}>
        </Feedback>
    }

    nextId(transports = []) {
        let max = transports.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id , 0);
        return ++max;
    }

    render() {
        return(
            <div className="main" >
                <Table className='table'>
                <thead>
                    <tr>
                        <th >Published Date</th>
                        <th>Company Name</th>
                        <th>Feedback</th>
                        <th>Rating</th> 
                    </tr>
                </thead>
                    { this.props.list.map(this.eachFeedback)}
                </Table>
            </div>
        )
    }
}

export default FeedbacksList;
           

