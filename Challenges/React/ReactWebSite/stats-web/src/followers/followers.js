import React, {Component} from 'react';
import './followers.css';

class Followers extends Component {

    constructor(props) {
        super(props);
    }
    
    // This card is the top left card that shows
    // the number of followers.  This is rendered by the
    // Summary component.
    render() {
        return (
            <div className="card text-left h-100 rounded followersCard">

                <div className="card-body">
                    <h4 className="card-title">{this.props.total}</h4>
                    
                    {/* mb-2 - Bootstrap spacing for margin-bottom */}
                    <h6 className="card-subtitle mb-2 text-muted">New followers add this month</h6>
                </div>
                
            </div>
        );
    }
}

export default Followers;