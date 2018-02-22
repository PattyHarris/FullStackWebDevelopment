import React, {Component} from 'react';
import './income.css';

class Income extends Component {
    
    constructor(props) {
        super(props);
    }
    
    // This card is used for 2 columns on the top 
    // row to show the income data.  This is rendered by
    // the Summary component.
    render() {
        return (
            <div className="card text-left h-100 rounded incomeCard">

                <div className="card-body">
                    <h4 className="card-title">$ {this.props.total}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.text}</h6>

                </div>
                
            </div>
        );
    }
}

export default Income;