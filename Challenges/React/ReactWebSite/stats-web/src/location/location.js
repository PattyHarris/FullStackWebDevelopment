import React, {Component} from 'react';
import './location.css';

class Location extends Component {
    
    constructor(props) {
        super(props);
    }
    
    // This card is used to show the location temperature
    // and city.  This is displayed at the top right column.
    render() {
        return (
            <div className="card text-white w-100 mb-3 rounded locationCard">

                <div className="card-body mh-100">
                    <h4 className="card-title locatonDegreesText"> {this.props.degrees} &deg;</h4>
                    <h6 className="card-subtitle mb-2  locationCityText">{this.props.city}</h6>

                </div>
                
            </div>
        );
    }
}

export default Location;