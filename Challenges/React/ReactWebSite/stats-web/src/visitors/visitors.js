import React, {Component} from 'react';
import './visitors.css';

class Visitors extends Component {
    
    constructor(props) {
        super(props);
    }
    
    // This card is used to show the location statistics.
    // It's a 2-tone color card with text in the color
    // area.
    render() {
        return (
            <div className="card text-left text-white w-100 mb-3 rounded visitorsCard">

                    {/* <div className="card-body locationStatsCardBlock" style={{backgroundColor: this.props.color}}>*/}
                    
                <div className="card-body">
                    <h6 className="card-subtitle">{this.props.text}</h6>
                    <h4 className="card-title">{this.props.title}</h4>

                </div>
                <div className="card-body">
                </div>
                
            </div>
        );
    }
}

export default Visitors;