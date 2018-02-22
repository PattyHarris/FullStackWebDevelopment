import React, {Component} from 'react';
import './statistics.css';

import Location from '../location/location';
import Visitors from '../visitors/visitors';
import BounceRate from '../bounce-rate/bounce-rate';
import Searches from '../searches/searches';
import Traffic from '../traffic/traffic';

class Statistics extends Component {
    
    constructor(props) {
        super(props);
    }
    
    // This component renders the last column which
    // contains the Location card and Location Statistic 
    // cards.  The idea here is that the data for the cards here
    // could be passed into this component as props.
    render() {
        return (
            <div className="statisticsColumn h-100">
                <div className="row">
                    <div className="col-sm-12 mt-2">
                        <Location degrees="18" city="London"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12 mt-2">
                        <Visitors text="New Visitors" title="1.5K" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12 mt-2">
                        <BounceRate text="Bounce Rate" title="50%" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12 mt-2">
                        <Searches text="Searches" title="28%" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12 mt-2">
                        <Traffic text="Traffic" title="140.5 kb" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Statistics;